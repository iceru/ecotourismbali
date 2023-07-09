<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
use App\Models\Program;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;

class MemberListController extends Controller
{
    public function index()
    {
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'badges' => Badge::all(),
            'members' => Member::where('business_name', '!=', '')->where('status', 'active')->with('badge', 'category', 'program')->get(),
        ]);
    }

    public function detail($id)
    {
        $memberAssessments = null;
        $lastSession = AssessmentSession::where('member_id', $id)->orderBy('created_at', 'desc')->first();
        if($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $id)->where('assessment_session_id', $lastSession->id)->get();
        }
        return Inertia::render('MemberDetail', [
            'member' => Member::where('id', $id)->with('member_slider', 'category', 'program', 'badge', 'verified_badge')->firstOrFail(),
            'scores' => $memberAssessments,
            'lastSession' => $lastSession
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

        if ($request->sort) {
            $sortColumns = explode('-', $request->sort);
            if($sortColumns[1] === 'descending') {
                $member->orderByDesc('business_name');
            } else {
                $member->orderBy('business_name');
            }
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
