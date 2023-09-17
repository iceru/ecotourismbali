<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
use App\Models\Program;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\MemberPayment;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use Illuminate\Support\Facades\Auth;

class MemberListController extends Controller
{
    public function index(Request $request)
    {
        $members =  Member::where('slug', '!=', '')->where('status', 'active')->with('badge', 'verified_badge', 'category', 'program')->orderBy('business_name');
        
        
        if($request->input('category') && $request->input('category') !== 'all') {
            $members = $members->where('category_id', $request->input('category'));
        }

        if($request->input('program')) {
            $members = $members->where('program_id', $request->input('program'));
        }

        if($request->input('badge')) {
            $members = $members->where('badge_id', $request->input('badge'));
        }

        if($request->input('keyword')) {
            $members = $members->where('business_name', 'LIKE', "%$request->input('keyword')%");
        }

        if ($request->input('sort')) {
            $sortColumns = explode('-', $request->input('sort'));
            if($sortColumns[1] === 'descending') {
                $members->orderByDesc('business_name');
            } else {
                $members->orderBy('business_name');
            }
        } else {
            $members->orderBy('business_name');
        }

        $members = $members->paginate(12)->withQueryString();
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'badges' => Badge::all(),
            'members' => $members,
        ]);
    }

    public function filter(Request $request)
    {
        $member =  Member::where('slug', '!=', '')->where('status', 'active');
        $category = Category::where('id', $request->category)->first();

        if($request->category && $request->category !== 'all') {
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
        } else {
            $member->orderBy('business_name');
        }

        $member = $member->with('badge', 'category', 'verified_badge', 'program')->paginate(12)->withQueryString();
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'badges' => Badge::all(),
            'members' => $member,
        ]);
    }

    public function detail($slug)
    {
        $member = Member::where('slug', $slug)->with('member_slider', 'category', 'program', 'badge', 'verified_badge')->firstOrFail();
        $memberAssessments = null;
        $lastSession = AssessmentSession::where('member_id', $member->id)->orderBy('created_at', 'desc')->first();
        if($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $member->id)->where('assessment_session_id', $lastSession->id)->get();
        }
        return Inertia::render('MemberDetail', [
            'member' => $member,
            'scores' => $memberAssessments,
            'lastSession' => $lastSession
        ]);
    }

    public function invoice(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $payment = MemberPayment::where('member_id', $member->id)->where('status_code', '!=', '')->orderBy('created_at', 'desc')->first();

        return view('invoice', compact('payment'));
    }
}
