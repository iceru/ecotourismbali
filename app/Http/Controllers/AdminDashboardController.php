<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Models\Module;
use Illuminate\Http\Request;
use Spatie\Analytics\Period;
use Spatie\Analytics\Facades\Analytics;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $visitors = Analytics::fetchTotalVisitorsAndPageViews(Period::days(7));
        $pages = Analytics::fetchMostVisitedPages(Period::days(7));
        $referrers = Analytics::fetchTopReferrers(Period::days(7));

        return Inertia::render('Admin/AdminDashboard', [
            'members' => Member::all(),
            'modules' => Module::all(),
            'visitors' => $visitors,
            'pages' => $pages,
            'referrers' => $referrers
        ]);
    }
}
