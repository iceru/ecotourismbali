<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
use App\Models\Assessment;
use Illuminate\Support\Str;
use App\Models\BusinessType;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\AssessmentOption;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use App\Models\AssessmentQuestion;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use App\Models\MemberAssessmentAnswer;
use Illuminate\Support\Facades\Redirect;

class MemberAssessmentController extends Controller
{
    public function index()
    { 
        $member = Member::where('user_id', Auth::id())->with('user')->first();
        $sessions = AssessmentSession::where('member_id', $member->id)->get();

        $attempt = 0;
        $dateAssessment = new Date();
        $now = Carbon::now();
        foreach ($sessions as $session) {
            if($session->created_at->diffInYears($now) > 0) {
                $session->completion = 'expired';
                $session->save();
            }

            if($session->completion === 'yes' && $session->total_score > 0) {
                $attempt = $attempt + 1;
            }           
        }

        $remaining = 2 - $attempt;
        if($remaining === 0) {
            $lastSession = AssessmentSession::where('member_id', $member->id)->orderBy('created_at', 'desc')->first();
            
            $dateAssessment = $lastSession->created_at->addYears(1);
        }
        return Inertia::render('Member/Assessment/AssessmentData', [
            'business_type' => BusinessType::all(),
            'member' => $member,
            'remaining' => $remaining,
            'dateAssessment' => $dateAssessment,
        ]);
    }

    public function start($id)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $assessments = Assessment::with('assessment_question')->get();
        if($member->status !== 'active') {
            $assessments = Assessment::with('assessment_question')->take(1)->get();
        }
        return Inertia::render('Member/Assessment/Assessment', [
            'session' => AssessmentSession::where('id', $id)->first(),
            'assessments' => $assessments,
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
        $user->email = $request->email;
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
                $memberAnswer->assessment_session_id = $request->session_id;
                $memberAnswer->save();

                $totalPoints = $totalPoints + $optionSelected->point;
            } else if (str_contains($questionId, 'checkbox')) {
                $id = explode('.', $questionId);
                $id = $id[1];
                foreach ($optionId as $checkId) {
                    $checkSelected = AssessmentOption::where('id', $checkId)->first();
                    $memberAnswer = MemberAssessmentAnswer::firstOrNew([
                        'member_id' => $member->id,
                        'assessment_question_id' => $id,
                        'assessment_session_id' => $request->session_id,
                    ]);
                    $totalPoints = $totalPoints + $checkSelected->point;
                    
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
        $member =  Member::where('user_id', Auth::id())->first();
        $badge =  Badge::all();

        $totalPoint = 0;
        foreach($memberAssessment as $assess) {
            $totalPoint = $totalPoint + $assess->score;
        }

        if ($totalPoint > 264) {
            $badge = Badge::where('name', 'Gold')->first();
        }
        else if ($totalPoint > 175) {
            $badge = Badge::where('name', 'Silver')->first();
        }
        else if($totalPoint > 87) {
            $badge = Badge::where('name', 'Bronze')->first();
        }
      

        if($totalPoint > 87) {
            $member->badge_id = $badge->id;
            $member->save();
        }


        if($member->status === 'active') {
            $session->completion = 'yes';
            $session->total_score = $totalPoint;
            $session->save();
    
            foreach($memberAssessment as $assess) {
                $assess->completion = 'yes';
                $assess->save();
            }
        } else {
            $session->completion = 'trial';
        }

        return Redirect::route('member.assessment.result', $session->id);
    }

    public function result($id)
    {
    
        return Inertia::render('Member/Assessment/AssessmentResult', [
            'session' => AssessmentSession::where('id', $id)->first(),
            'member' =>  Member::where('user_id', Auth::id())->with('badge')->first(),
        ]);
    }
}
