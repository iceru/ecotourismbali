<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\MemberPayment;

class AdminPaymentController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Payment/PaymentIndex', [
            'payments' => MemberPayment::with('member')->get(),
        ]);
    }

}
