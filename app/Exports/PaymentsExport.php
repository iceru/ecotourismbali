<?php

namespace App\Exports;

use App\Models\MemberPayment;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PaymentsExport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize
{
    use Exportable;

    public function query()
    {
        return MemberPayment::query()
            ->with('member.user')
            ->where('payment_status', 'success')
            ->latest();
    }

    public function headings(): array
    {
        return [
            'Payment No.',
            'Invoice No.',
            'Payment Status',
            'Payment Type',
            'Bank',
            'Amount',
            'Business Name',
            'Customer Name',
            'Email',
            'Phone',
            'Invoice Item',
            'Created At',
            'Paid At',
        ];
    }

    public function map($payment): array
    {
        $member = $payment->member;
        $user = $member?->user;

        return [
            $payment->payment_no,
            $payment->status_code,
            $payment->payment_status,
            $payment->payment_type,
            $payment->bank,
            $payment->amount ?: $member?->total_payment,
            $member?->business_name,
            $user?->name,
            $user?->email ?: $member?->email,
            $member?->phone,
            trim(str_replace('&nbsp;', ' ', strip_tags($payment->invoice_item_text))),
            $payment->created_at?->format('Y-m-d H:i:s'),
            $payment->updated_at?->format('Y-m-d H:i:s'),
        ];
    }
}
