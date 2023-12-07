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

        return Inertia::render('Admin/AdminDashboard', [
            'members' => Member::where('status', 'LIKE', '%active%')->get(),
            'assessments' => AssessmentSession::all(),
            'greenforce' => Member::where('program_id', 1)->where('status', 'LIKE', '%active%')->get(),
            'greenpal' => Member::where('program_id', 2)->where('status', 'LIKE', '%active%')->get(),
            'visitors' => $visitors,
            'pages' => $pages,
            'referrers' => $referrers
        ]);
    }
}
