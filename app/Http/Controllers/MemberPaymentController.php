<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\MemberPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Midtrans;
use Midtrans\Snap;
use Midtrans\Config;

class MemberPaymentController extends Controller
{
    public function new_payment()
    {
        $member_payment = new MemberPayment;

        $order_id = date('YmdHis').Auth::id();
        $member = Member::where('user_id', Auth::id())->first();

        $params = array(
            'transaction_details' => array(
                'order_id' => $order_id,
                'gross_amount' => 500000,
            )
        );

        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('services.midtrans.is_production');
        Config::$isSanitized =config('services.midtrans.is_sanitized');
        Config::$is3ds =config('services.midtrans.is_3ds');

        // $snapToken = Snap::getSnapToken($params);
        $payment_url = Snap::createTransaction($params)->redirect_url;
        
        $member_payment->payment_no = $order_id;
        $member_payment->payment_status = 'pending';
        $member_payment->member_id = $member->id;
        $member_payment->save();

        return Redirect::to($payment_url);

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
                
        if ($transaction == 'capture') {
            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card') {
                if ($fraud == 'challenge') {
                    MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'challenge by FDS']);
                }
                else {
                    MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'success']);
                }
            }
        }
        else if ($transaction == 'settlement') {
            MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'success']);
        }
        else if ($transaction == 'pending') {
            MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'pending']);
        }
        else if ($transaction == 'deny') {
            MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'denied']);
        }
        else if ($transaction == 'expire') {
            MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'expire']);
        }
        else if ($transaction == 'cancel') {
            MemberPayment::where('payment_no', $order_id)->update(['payment_status' => 'denied']);
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
        $member_payment = MemberPayment::where('member_id', $member->id)->where('payment_status', '!=' ,'success')->latest()->first();
        
        return Inertia::render('Member/Payment/Error', [
            'member_payment' => $member_payment,
        ]);
    }

}
