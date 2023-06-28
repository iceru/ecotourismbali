<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
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
            'members' => Member::where('business_name', '!=', '')->with('badge')->with('category')->with('program')->get(),
        ]);
    }

    public function detail($id)
    {
        return Inertia::render('MemberDetail', [
            'member' => Member::where('id', $id)->with('member_slider')->with('category')->with('program')->firstOrFail(),
        ]);
    }
}
