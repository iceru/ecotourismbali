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
            'members' => Member::where('business_name', '!=', '')->with('badge', 'category', 'program')->get(),
        ]);
    }

    public function detail($id)
    {
        return Inertia::render('MemberDetail', [
            'member' => Member::where('id', $id)->with('member_slider')->with('category')->with('program')->firstOrFail(),
        ]);
    }

    public function filter(Request $request)
    {
        $member = Member::where('business_name', '!=', '');
        $category = Category::where('id', $request->category)->first();

        if($request->category && $category->name !== 'All') {
            $member = $member->where('category_id', $request->category);
        }
        
        if($request->program) {
            $member = $member->where('program_id', $request->program);
        }

        if($request->badge) {
            $member = $member->where('badge_id', $request->badge);
        }

        if($request->keyword) {
            $member = $member->where('business_name', 'LIKE', "%$request->keyword%");
        }

        $member = $member->with('badge', 'category', 'program')->get();
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'badges' => Badge::all(),
            'members' => $member,
        ]);
    }
}
