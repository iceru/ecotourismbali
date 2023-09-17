<?php

namespace App\Http\Controllers;

use Midtrans;
use Carbon\Carbon;
use Midtrans\Snap;
use Inertia\Inertia;
use Midtrans\Config;
use App\Models\Member;
use Midtrans\Notification;
use Illuminate\Http\Request;
use App\Models\MemberPayment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

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

        // return Redirect::route('member.index')->with('success', ' created successfully.');
    }

    public function notif_handler()
    {
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('services.midtrans.is_production');
        $notif = new Notification();

        $notif = $notif->getResponse();
        $transaction = $notif->transaction_status;
        $type = $notif->payment_type;
        $order_id = $notif->order_id;
        $fraud = $notif->fraud_status;

        $memberPayment = MemberPayment::where('payment_no', $order_id);
        $memberPaymentFirst = MemberPayment::where('payment_no', $order_id)->first();
        $member = Member::where('id', $memberPaymentFirst->member_id)->first();

        if ($transaction == 'capture') {
            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card') {
                if ($fraud == 'challenge') {
                    $memberPayment->update(['payment_status' => 'challenge by FDS']);
                } else {
                    $memberPayment->update(['payment_status' => 'success']);
                }
            }
        } else if ($transaction == 'settlement') {
            $memberPayment->update(['payment_status' => 'success']);
            if (intval($member->total_payment) === 500000) {
                $member->update(['status' => 'active_assessment']);
            } else {
                $member->update(['status' => 'active']);
            }
        } else if ($transaction == 'pending') {
            $memberPayment->update(['payment_status' => 'pending']);
        } else if ($transaction == 'deny') {
            $memberPayment->update(['payment_status' => 'denied']);
        } else if ($transaction == 'expire') {
            $memberPayment->update(['payment_status' => 'expire']);
        } else if ($transaction == 'cancel') {
            $memberPayment->update(['payment_status' => 'denied']);
        }

        if ($transaction) {
            $bankName = "-";
            if (isset($notif->va_numbers)) {
                $bankName = $notif->va_numbers[0]->bank;
            } else if(isset($notif->bank)) {
                $bankName = $notif->bank;
            } else if(isset($notif->issuer)) {
                $bankName = $notif->issuer;
            }
            $memberPayment->update([
                'payment_type' => $type,
                'status_code' => $notif->status_code,
                'amount' => $notif->gross_amount,
                'bank' => $bankName,
            ]);
        }
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
