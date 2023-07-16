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
        $visitors = Analytics::fetchVisitorsAndPageViews(Period::days(7));
        return Inertia::render('Admin/AdminDashboard', [
            'members' => Member::all(),
            'modules' => Module::all(),
            'visitors' => $visitors,
        ]);
    }
}
