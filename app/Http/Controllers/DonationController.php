<?php

namespace App\Http\Controllers;

use Midtrans\Snap;
use Inertia\Inertia;
use Midtrans\Config;
use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Donation');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'company' => 'nullable',
            'amount' => 'required|integer',
        ]);        

        try {
            $donation = new Donation;

            $donation->name = $request->name;
            $donation->email = $request->email;
            $donation->company = $request->company;
            $donation->amount = $request->amount;
            $donation->status = 'pending';

            $donation->save();

        } catch(err) {
            return Redirect::route('donation.index')->with('failed', 'There is something wrong');
        }
    }

    public function pay(Request $request)
    {
        $email = $request->input('email');
        $amount = $request->input('amount');
        
        $order_id = 'DNT-'. date('YmdHis');

        $params = array(
            'transaction_details' => array(
                'order_id' => $order_id,
                'gross_amount' => $amount,
            )
        );

        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('services.midtrans.is_production');
        Config::$isSanitized = config('services.midtrans.is_sanitized');
        Config::$is3ds = config('services.midtrans.is_3ds');

        $snapToken = Snap::getSnapToken($params);

        return $snapToken;
    }


    /**
     * Display the specified resource.
     */
    public function show(Donation $donation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Donation $donation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Donation $donation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Donation $donation)
    {
        //
    }
}
