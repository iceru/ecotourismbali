<?php

namespace App\Http\Controllers;

use App\Exports\PaymentsExport;
use Inertia\Inertia;
use App\Models\MemberPayment;
use Maatwebsite\Excel\Facades\Excel;

class AdminPaymentController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Payment/PaymentIndex', [
            'payments' => MemberPayment::with('member.user')
                ->where('payment_status', 'success')
                ->latest()
                ->get()
                ->map(fn ($payment) => $this->paymentData($payment)),
        ]);
    }

    public function show($id)
    {
        $payment = MemberPayment::with('member.user')->findOrFail($id);

        return Inertia::render('Admin/Payment/ShowPayment', [
            'payment' => $this->paymentData($payment),
        ]);
    }

    public function export()
    {
        return Excel::download(new PaymentsExport, 'payments.xlsx');
    }

    private function paymentData(MemberPayment $payment): array
    {
        $member = $payment->member;
        $user = $member?->user;

        return [
            'id' => $payment->id,
            'payment_no' => $payment->payment_no,
            'invoice_number' => $payment->status_code,
            'payment_status' => $payment->payment_status,
            'payment_type' => $payment->payment_type,
            'amount' => $payment->amount ?: $member?->total_payment,
            'bank' => $payment->bank,
            'invoice_item_text' => $payment->invoice_item_text,
            'created_at' => $payment->created_at,
            'updated_at' => $payment->updated_at,
            'member' => $member ? [
                'id' => $member->id,
                'business_name' => $member->business_name,
                'name' => $user?->name,
                'email' => $user?->email ?: $member->email,
                'phone' => $member->phone,
                'total_payment' => $member->total_payment,
            ] : null,
        ];
    }
}
