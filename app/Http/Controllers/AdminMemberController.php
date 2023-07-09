<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Program;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\VerifiedBadge;
use App\Models\AssessmentSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Redirect;

class AdminMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Member/MemberIndex', [
            'members' => Member::with('user', 'category', 'program', 'verified_badge', 'badge', 'member_assessment', 'business_type')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $member = Member::with('user', 'category', 'program', 'verified_badge', 'badge', 'member_assessment', 'business_type')->find($id);
        $sessions = AssessmentSession::where('member_id', $id)->get();

        $attempt = 0;
        $dateAssessment = null;
        foreach ($sessions as $session) {
            if($session->completion === 'yes' && $session->total_score > 0) {
                $attempt = $attempt + 1;
            }
        }

        $remaining = 2 - $attempt;
        $lastSession = AssessmentSession::where('member_id', $id)->orderBy('created_at', 'desc')->first();
            
        if($lastSession) {
            $dateAssessment = $lastSession->created_at->addYears(1);
        } else {
            $dateAssessment = null;
        }
        
        return Inertia::render('Admin/Member/MemberDetail', [
            'member' =>$member,
            'categories' => Category::all(),
            'programs' => Program::all(),
            'verified_badges' => VerifiedBadge::all(),
            'remaining' => $remaining,
            'dateAssessment' => $dateAssessment,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $member = Member::find($request->id);

        $request->validate([
            'category' => 'nullable',
            'program' => 'nullable',
            'verified_badge' => 'nullable',
            'total_payment' => 'nullable',
        ]);

        $member->category_id = $request->category;
        $member->program_id = $request->program;
        $member->verified_badge_id = $request->verified_badge;
        $member->total_payment = $request->total_payment;
        $member->save();

        return Redirect::route('admin.member.detail', $member->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
