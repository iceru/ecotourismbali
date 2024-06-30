<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
use App\Models\Source;
use App\Models\Program;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\MemberPayment;
use App\Models\MemberTourism;
use App\Models\VerifiedBadge;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use Illuminate\Support\Facades\Auth;

class MemberListController extends Controller
{
    public function index(Request $request)
    {
        $members = Member::where('slug', '!=', '')->where('status', 'like', '%active%')
        ->where('status', 'not like', "%dummy%")->where('program_id', 1)
        ->with('badge', 'verified_badge', 'category', 'program')->orderBy('business_name');

        $tribe = Program::where('name', 'like', '%embers%')->first();
        
        if ($request->input('category') && $request->input('category') !== 'all') {
            $members = $members->where('category_id', $request->input('category'));
        }

        if ($request->input('program')) {
            $members = $members->where('program_id', $request->input('program'));
            $tribe = Program::where('id', $request->input('program'))->first();
            $tourism = MemberTourism::where('business_name', '!=', NULL)->with('source');
            $auth = Auth::user();
            if(!$auth) {
                $tourism->where('member_only', 'No');
            } else if ($auth->member && ($auth->member->status === 'admin' || str_contains($auth->member->status, 'active'))){
                $tourism->where('member_only', '!=', NULL);
            }
            if($tribe->id === 2) {
                $members = $tourism;
            }
        }

        if ($request->input('badge')) {
            $members = $members->where('badge_id', $request->input('badge'));
        }

        if ($request->input('verified_badge')) {
            $members = $members->where('verified_badge_id', $request->input('verified_badge'));
        }

        if ($request->input('keyword')) {
            $members = $members->where('business_name', 'LIKE', "%$request->input('keyword')%");
        }

        if($request->source && $request->program === 2) {
            $members = $members->where('source_id', $request->source);
        }

        if ($request->input('sort')) {
            $sortColumns = explode('-', $request->input('sort'));
            if ($sortColumns[1] === 'descending') {
                $members->orderByDesc('business_name');
            } else {
                $members->orderBy('business_name');
            }
        } else {
            $members->orderBy('business_name');
        }
        if($request->program !== 2 && $tribe->id !== 2) {
            $members = $members->paginate(12)->withQueryString();
        } else {
            $members = $members->paginate(16)->withQueryString();
        }
        $tourisms = MemberTourism::with('source')->get();
        $categoriesTourism = $tourisms->pluck('category')->unique()->filter()->values();
        $sources = Source::all();
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'categoriesTourism' => $categoriesTourism,
            'sources' => $sources,
            'badges' => Badge::all(),
            'verified_badges' => VerifiedBadge::all(),
            'members' => $members,
            'tribe' => $tribe,
        ]);
    }

    public function filter(Request $request)
    {
        $members = Member::where('slug', '!=', '')->where('status', 'like', '%active%')->where('status', 'not like', "%dummy%");
        $tribe = Program::where('name', 'like', '%embers%')->first();

        if ($request->category && $request->category !== 'all') {
            $members = $members->where('category_id', $request->category);
        }

        if ($request->program) {
            $members = $members->where('program_id', $request->program);
            $tribe = Program::where('id', $request->input('program'))->first();
            $auth = Auth::user();
            $tourism = MemberTourism::where('business_name', '!=', NULL)->with('source');
            if(!$auth) {
                $tourism->where('member_only', 'No');
            } else if ($auth->member && ($auth->member->status === 'admin' || str_contains($auth->member->status, 'active'))){
                $tourism->where('member_only', '!=', NULL);
            }
            if($tribe->id === 2) {
                $members = $tourism;
            }
        }

        if ($request->badge) {
            $members = $members->where('badge_id', $request->badge);
        }

        if ($request->input('verified_badge')) {
            $members = $members->where('verified_badge_id', $request->input('verified_badge'));
        }


        if ($request->keyword) {
            $members = $members->where('business_name', 'LIKE', "%$request->keyword%");
        }

        if($request->source && $request->program === 2) {
            $members = $members->where('source_id', $request->source);
        }

        if ($request->sort) {
            $sortColumns = explode('-', $request->sort);
            if ($sortColumns[1] === 'descending') {
                $members->orderByDesc('business_name');
            } else {
                $members->orderBy('business_name');
            }
        } else {
            $members->orderBy('business_name');
        }
        if($request->program !== 2 && $tribe->id !== 2) {
            $members = $members->with('badge', 'category', 'verified_badge', 'program')->paginate(12)->withQueryString();
        } else {
            $members = $members->paginate(16)->withQueryString();
        }
        $tourisms = MemberTourism::with('source')->get();
        $categoriesTourism = $tourisms->pluck('category')->unique()->filter()->values();
        $sources = Source::all();
        return Inertia::render('MemberList', [
            'programs' => Program::all(),
            'categories' => Category::all(),
            'categoriesTourism' => $categoriesTourism,
            'sources' => $sources,
            'badges' => Badge::all(),
            'verified_badges' => VerifiedBadge::all(),
            'members' => $members,
            'tribe' => $tribe
        ]);
    }

    public function detail($slug)
    {
        $member = Member::where('slug', $slug)->with('member_slider', 'category', 'business_type', 'program', 'badge', 'verified_badge')->firstOrFail();
        $memberAssessments = null;
        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        if ($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $member->id)->where('assessment_session_id', $lastSession->id)->get();
        }
        return Inertia::render('MemberDetail', [
            'member' => $member,
            'scores' => $memberAssessments,
            'lastSession' => $lastSession
        ]);
    }

    public function detailTourism($slug)
    {
        $member = MemberTourism::where('slug', $slug)->with('source')->firstOrFail();
        return Inertia::render('MemberDetailTourism', [
            'member' => $member,
            'program' => Program::where('id', 2)->first(),
        ]);
    }


    public function invoice(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $payment = MemberPayment::where('member_id', $member->id)->where('status_code', '!=', '')->orderBy('created_at', 'desc')->first();

        return view('invoice', compact('payment'));
    }
}
