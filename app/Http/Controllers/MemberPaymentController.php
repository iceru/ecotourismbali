<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Midtrans\Snap;
use Inertia\Inertia;
use Midtrans\Config;
use App\Models\Member;
use Illuminate\Http\Request;
use App\Models\MemberPayment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MemberPaymentController extends Controller
{
    public function new_payment()
    {
        $member = Member::where('user_id', Auth::id())->first();

        $payment = MemberPayment::where('member_id', $member->id)
            ->where('status_code', '!=', '')
            ->latest('created_at')
            ->first();

        if ($payment && Carbon::now()->between($payment->created_at, $payment->created_at->addDays(7))) {
            $member_payment = $payment;
        } else {
            $member_payment = new MemberPayment;
        }

        $order_id = date('YmdHis') . Auth::id();

        $params = array(
            'transaction_details' => array(
                'order_id' => $order_id,
                'gross_amount' => $member->total_payment,
            )
        );

        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('services.midtrans.is_production');
        Config::$isSanitized = config('services.midtrans.is_sanitized');
        Config::$is3ds = config('services.midtrans.is_3ds');

        $snapToken = Snap::getSnapToken($params);
        // $payment_url = Snap::createTransaction($params)->redirect_url;;

        $member_payment->payment_no = $order_id;
        $member_payment->payment_status = 'pending';
        $member_payment->member_id = $member->id;
        $member_payment->save();

        return $snapToken;
    }

    public function notif_handler(Request $request)
    {
        $notif = $request->all();

        $transaction = data_get($notif, 'transaction_status');
        $type = data_get($notif, 'payment_type');
        $orderId = data_get($notif, 'order_id');
        $fraud = data_get($notif, 'fraud_status');

        if (!$transaction || !$orderId) {
            Log::warning('Invalid Midtrans notification payload.', [
                'payload' => $notif,
            ]);

            return response()->json(['message' => 'Invalid notification payload'], 400);
        }

        $memberPayment = MemberPayment::where('payment_no', $orderId)->first();

        if (!$memberPayment) {
            Log::warning('Midtrans notification payment not found.', [
                'order_id' => $orderId,
                'transaction_status' => $transaction,
            ]);

            return response()->json(['message' => 'Payment not found'], 404);
        }

        $member = Member::find($memberPayment->member_id);
        $paymentStatus = $this->paymentStatus($transaction, $type, $fraud);

        $memberPayment->forceFill([
            'payment_status' => $paymentStatus,
            'payment_type' => $type,
            'status_code' => data_get($notif, 'status_code'),
            'amount' => data_get($notif, 'gross_amount'),
            'bank' => $this->bankName($notif),
        ])->save();

        if ($paymentStatus === 'success' && $member) {
            $member->update(['status' => 'active']);
        }

        return response()->json(['message' => 'Notification processed']);
    }

    private function paymentStatus(?string $transaction, ?string $type, ?string $fraud): string
    {
        if ($transaction === 'capture') {
            return $type === 'credit_card' && $fraud === 'challenge'
                ? 'challenge by FDS'
                : 'success';
        }

        return match ($transaction) {
            'settlement' => 'success',
            'pending' => 'pending',
            'deny', 'cancel', 'failure' => 'denied',
            'expire' => 'expire',
            default => $transaction,
        };
    }

    private function bankName(array $notif): string
    {
        return data_get($notif, 'va_numbers.0.bank')
            ?: data_get($notif, 'permata_va_number')
            ?: data_get($notif, 'bill_key')
            ?: data_get($notif, 'bank')
            ?: data_get($notif, 'issuer')
            ?: '-';
    }

    public function finish()
    {
        $member = Member::where('user_id', Auth::id())->first();
        $member_payment = MemberPayment::where('member_id', $member->id)->where('payment_status', 'success')->latest()->first();

        return Inertia::render('Member/Payment/Finish', [
            'member_payment' => $member_payment,
        ]);
    }

    public function unfinish()
    {
        $member = Member::where('user_id', Auth::id())->first();
        $member_payment = MemberPayment::where('member_id', $member->id)->where('payment_status', 'pending')->latest()->first();

        return Inertia::render('Member/Payment/Unfinish', [
            'member_payment' => $member_payment,
        ]);
    }

    public function error()
    {
        $member = Member::where('user_id', Auth::id())->first();
        $member_payment = MemberPayment::where('member_id', $member->id)->where('payment_status', '!=', 'success')->latest()->first();

        return Inertia::render('Member/Payment/Error', [
            'member_payment' => $member_payment,
        ]);
    }
}
