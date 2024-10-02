<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use Illuminate\Http\Request;
use Spatie\Analytics\Period;
use App\Models\AssessmentSession;
use Spatie\Analytics\Facades\Analytics;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $visitors = Analytics::fetchTotalVisitorsAndPageViews(Period::days(7));
        $pages = Analytics::fetchMostVisitedPages(Period::days(7));
        $referrers = Analytics::fetchTopReferrers(Period::days(7));

        $commonConditions = [
            ['program_id', 1],
            ['status', 'LIKE', '%active%'],
            ['status', 'not like', '%dummy%']
        ];
        
        $hotel = Member::where($commonConditions)
                       ->where('business_type_id', 1)
                       ->get();
        
        $hotelVerified = Member::where($commonConditions)
                               ->where('business_type_id', 1)
                               ->whereNotNull('verified_badge_id')
                               ->get();
        $hotelAssessed = Member::where($commonConditions)
                               ->where('business_type_id', 1)
                               ->whereNotNull('badge_id')
                               ->get();
        $restaurant = Member::where($commonConditions)
                            ->where('business_type_id', 2)
                            ->get();

        $restaurantAssessed = Member::where($commonConditions)
                            ->where('business_type_id', 2)
                            ->whereNotNull('badge_id')
                            ->get();
        
        $restaurantVerified = Member::where($commonConditions)
                            ->where('business_type_id', 2)
                            ->whereNotNull('verified_badge_id')
                            ->get();

        return Inertia::render('Admin/AdminDashboard', [
            'members' => Member::where('status', 'LIKE', '%active%')->get(),
            'assessments' => AssessmentSession::get(),
            'hotel' => $hotel,
            'hotelVerified' => $hotelVerified,
            'hotelAssessed' => $hotelAssessed,
            'restaurant' => $restaurant,
            'restaurantVerified' => $restaurantVerified,
            'restaurantAssessed' => $restaurantAssessed,
            'visitors' => $visitors,
            'pages' => $pages,
            'referrers' => $referrers
        ]);
    }
}
