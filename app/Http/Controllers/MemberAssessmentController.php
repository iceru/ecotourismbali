<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Assessment;
use Illuminate\Support\Str;
use App\Models\BusinessType;
use Illuminate\Http\Request;
use App\Models\AssessmentOption;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use App\Models\AssessmentQuestion;
use Illuminate\Support\Facades\Auth;
use App\Models\MemberAssessmentAnswer;
use Illuminate\Support\Facades\Redirect;

class MemberAssessmentController extends Controller
{
    public function index()
    {
        return Inertia::render('Member/Assessment/AssessmentData', [
            'business_type' => BusinessType::all(),
            'member' => Member::where('user_id', Auth::id())->with('user')->first(),
        ]);
    }

    public function start($id)
    {
        return Inertia::render('Member/Assessment/Assessment', [
            'session' => AssessmentSession::where('id', $id)->first(),
            'assessments' => Assessment::with('assessment_question')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $user = User::where('id', Auth::id())->first();

        $request->validate([
            'business_name' => 'required',
            'name' => 'required',
            'address' => 'required',
            'website' => 'required',
            'job_title' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'business_type_id' => 'required',
        ]);

        $member->business_name = $request->business_name;
        $member->address = $request->address;
        $member->website = $request->website;
        $member->job_title = $request->job_title;
        $member->phone = $request->phone;
        $member->email = $request->email;
        $member->business_type_id = $request->business_type_id;
        $member->save();

        $user->name = $request->name;
        $user->save();

        $session = AssessmentSession::firstOrNew([
            'completion' => 'no',
            'member_id' => $member->id
        ]);

        $session->completion = 'no';
        $session->member_id = $member->id;
        $session->id = Str::ulid()->toBase32();
        $session->save();

        return Redirect::route('member.assessment.start', $session->id);
    }

    public function save(Request $request)
    {
        $request->validate([
            'radio.*' => 'required|exists:options,id',
            'checkbox.*' => 'required|exists:options,id',
        ]);
        $member =  Member::where('user_id', Auth::id())->first();
        $totalPoints = 0;
        foreach ($request->input() as $questionId => $optionId) {
            

            $optionSelected = AssessmentOption::where('id', $optionId)->first();
            if(str_contains($questionId, 'radio')) {
                $id = explode('.', $questionId);
                $id = $id[1];
                $memberAnswer = MemberAssessmentAnswer::firstOrNew([
                    'member_id' => $member->id,
                    'assessment_question_id' => $id,
                    'assessment_session_id' => $request->session_id,
                ]);
                
                $memberAnswer->member_id = $member->id;
                $memberAnswer->assessment_question_id = $id;
                $memberAnswer->assessment_option_id = $optionId;
                $totalPoints = $totalPoints + $optionSelected->point;
                $memberAnswer->assessment_session_id = $request->session_id;
                $memberAnswer->save();
            } else if (str_contains($questionId, 'checkbox')) {
                $id = explode('.', $questionId);
                $id = $id[1];
                foreach ($optionId as $checkId) {
                    $memberAnswer = MemberAssessmentAnswer::firstOrNew([
                        'member_id' => $member->id,
                        'assessment_question_id' => $id,
                        'assessment_session_id' => $request->session_id,
                    ]);
                    
                    $memberAnswer->member_id = $member->id;
                    $memberAnswer->assessment_question_id = $id;
                    $memberAnswer->assessment_option_id = $checkId;
                    $memberAnswer->assessment_session_id = $request->session_id;
                    $memberAnswer->save();
                }
            }
        }

        $memberAssessment = MemberAssessment::firstOrNew([
            'member_id' => $member->id,
            'assessment_id' => $request->assessment_id,
            'completion' => 'no',
            'assessment_session_id' => $request->session_id,
        ]);
        
        $memberAssessment->score = $totalPoints;
        $memberAssessment->member_id = $member->id;
        $memberAssessment->assessment_id = $request->assessment_id;
        $memberAssessment->assessment_session_id = $request->session_id;
        $memberAssessment->completion = 'no';
        $memberAssessment->save();
    }

    public function complete($id)
    {
        $memberAssessment = MemberAssessment::where('assessment_session_id', $id)->get();
        $session = AssessmentSession::where('id', $id)->first();

        $session->completion = 'yes';
        $session->save();
        foreach($memberAssessment as $assess) {
            $assess->completion = 'yes';
            $assess->save;
        } 
        return Inertia::render('Member/Assessment/AssessmentResult', [
            'session' => AssessmentSession::where('id', $id)->first(),
        ]);
    }

    public function result($id)
    {
        return Inertia::render('Member/Assessment/AssessmentResult', [
            'session' => AssessmentSession::where('id', $id)->first(),
            'assessments' => MemberAssessment::where('assessment_session_id', $id)->get()
        ]);
    }
}
