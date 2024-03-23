<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function members() {
        $total = new \stdClass();

        $greenforce = Member::where('status', 'LIKE', '%active%')->where('program_id', '1')->count();        
        $hotels = Member::where('status', 'LIKE', '%active%')->where('business_type_id', '1')->count();
        $restaurant = Member::where('status', 'LIKE', '%active%')->where('business_type_id', '3')->count();
        
        $total->greenforce = $greenforce;
        $total->hotels = $hotels;
        $total->restaurant = $restaurant;

        return response()->json($total, 200);
    }
}
