<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Program;
use App\Models\Category;
use Illuminate\Http\Request;

class MemberListController extends Controller
{
    public function index()
    {
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'badges' => Badge::all(),
            'members' => Member::where('business_name', '!=', '')->get(),
        ]);
    }
}
