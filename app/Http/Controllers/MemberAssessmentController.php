<?php

namespace App\Http\Controllers;

use App\Mail\ResultMail;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
use App\Models\Category;
use App\Models\Assessment;
use Illuminate\Support\Str;
use App\Models\BusinessType;
use Illuminate\Http\Request;
use App\Mail\VerifyBadgeMail;
use Illuminate\Support\Carbon;
use App\Models\AssessmentOption;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use App\Models\AssessmentQuestion;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use App\Models\MemberAssessmentAnswer;
use Illuminate\Support\Facades\Redirect;

class MemberAssessmentController extends Controller
{
    public function tutorial()
    {
        $member = Member::where('user_id', Auth::id())->with('business_type')->first();
        $sessions = AssessmentSession::where('member_id', $member->id)->get();

        $attempt = 0;
        $dateAssessment = new Date();
        $now = Carbon::now();
        foreach ($sessions as $session) {
            if ($session->created_at->diffInYears($now) > 0) {
                $session->completion = 'expired';
                $session->save();
            }

            if ($session->completion === 'yes' && $session->total_score > 0) {
                $attempt = $attempt + 1;
            }
        }

        $remaining = 2 - $attempt;
        if ($remaining === 0) {
            $lastSession = AssessmentSession::where('member_id', $member->id)->orderBy('created_at', 'desc')->first();

            $dateAssessment = $lastSession->created_at->addYears(1);
        }
        return Inertia::render('Member/Assessment/AssessmentStep', [
            'member' => $member,
            'remaining' => $remaining,
            'dateAssessment' => $dateAssessment,
        ]);
    }

    public function index()
    {
        $member = Member::where('user_id', Auth::id())->with('user')->first();
        $sessions = AssessmentSession::where('member_id', $member->id)->get();
        $categories = Category::all();

        $attempt = 0;
        $dateAssessment = new Date();
        $now = Carbon::now();
        foreach ($sessions as $session) {
            if ($session->created_at->diffInYears($now) > 0) {
                $session->completion = 'expired';
                $session->save();
            }

            if ($session->completion === 'yes' && $session->total_score > 0) {
                $attempt = $attempt + 1;
            }
        }

        $remaining = 2 - $attempt;
        if ($remaining === 0) {
            $lastSession = AssessmentSession::where('member_id', $member->id)->orderBy('created_at', 'desc')->first();

            $dateAssessment = $lastSession->created_at->addYears(1);
        }
        return Inertia::render('Member/Assessment/AssessmentData', [
            'business_type' => BusinessType::all(),
            'member' => $member,
            'remaining' => $remaining,
            'dateAssessment' => $dateAssessment,
            'categories' => $categories,
        ]);
    }

    public function start($id)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $assessments = Assessment::with('assessment_question')->where('business_type_id', $member->business_type_id)->get();
        $session = AssessmentSession::where('id', $id)->where('completion', 'no')->first();

        if ($session->completion === 'yes') {
            return Redirect::route('member.dashboard');
        }

        if ((int)$member->id !== (int)$session->member_id) {
            return Redirect::route('member.dashboard');
        }

        if (!str_contains($member->status, 'active')) {
            $assessments = Assessment::with('assessment_question')->where('business_type_id', $member->business_type_id)->take(1)->get();
        }
        $answers = MemberAssessmentAnswer::where(['member_id' => $member->id, 'assessment_session_id' => $session->id])->with('assessment_question')->get();
        return Inertia::render('Member/Assessment/Assessment', [
            'session' => $session,
            'assessments' => $assessments,
            'answers' => $answers,
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
            'website' => 'nullable',
            'job_title' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'business_type_id' => 'required',
            'province' => 'required',
            'city' => 'required',
            'sister_company' => 'nullable',
            'company_name' => 'required',
            'category' => 'required',
            'legal_identity' => 'required',
        ]);

        if ($request->sister_company) {
            $member->sister_company = $request->sister_company;
        }
        if ($request->website) {
            $member->website = $request->website;
        }

        $member->business_name = $request->business_name;
        $member->address = $request->address;
        $member->job_title = $request->job_title;
        $member->phone = $request->phone;
        $member->province = $request->province;
        $member->city = $request->city;
        $member->company_name = $request->company_name;
        $user->email = $request->email;
        $member->business_type_id = $request->business_type_id;
        $member->category_id = $request->category;
        $member->legal_identity = $request->legal_identity;
        $member->save();

        $user->name = $request->name;
        $user->save();

        $session = AssessmentSession::firstOrNew([
            'completion' => 'no',
            'member_id' => $member->id
        ]);
        if (!$session->member_id) {
            $session->member_id = $member->id;
            $session->id = Str::ulid()->toBase32();
        }

        $session->completion = 'no';
        $session->save();

        return Redirect::route('member.assessment.start', $session->id);
    }

    public function save(Request $request)
    {
        $request->validate([
            'radio.*' => 'required|exists:options,id',
            'checkbox.*' => 'required|exists:options,id',
        ]);
        $member = Member::where('user_id', Auth::id())->first();
        $totalPoints = 0;
        foreach ($request->input() as $questionId => $optionId) {
            $optionSelected = AssessmentOption::where('id', $optionId)->first();
            if (str_contains($questionId, 'radio') || str_contains($questionId, 'checkbox')) {
                $id = explode('.', $questionId);
                $id = $id[1];
            }
            $questionSelected = AssessmentQuestion::where('id', $id)->with('assessment')->first();

            if ($questionSelected->assessment->id === $request->assessment_id) {
                if (str_contains($questionId, 'radio')) {
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
                    $memberAnswer = MemberAssessmentAnswer::where([
                        'member_id' => $member->id,
                        'assessment_session_id' => $request->session_id,
                        'assessment_question_id' => $id
                    ])->get();

                    foreach ($memberAnswer as $answer) {
                        $answer->delete();
                    }
                    foreach ($optionId as $checkId) {
                        $checkSelected = AssessmentOption::where('id', $checkId)->first();
                        $memberAnswer = MemberAssessmentAnswer::firstOrNew([
                            'member_id' => $member->id,
                            'assessment_option_id' => $checkId,
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
        $member = Member::where('user_id', Auth::id())->with('business_type')->first();
        $badge = Badge::all();

        if ($session->completion == 'yes') {
            return Redirect::route('member.assessment.result', $session->id);
        }

        $totalPoint = 0;
        foreach ($memberAssessment as $assess) {
            $totalPoint = $totalPoint + $assess->score;
        }

        if (str_contains($member->status, 'active')) {
            if ($member->business_type->name == 'Hotel') {
                if ($totalPoint > 264) {
                    $badge = Badge::where('name', 'Gold')->first();
                } else if ($totalPoint > 175) {
                    $badge = Badge::where('name', 'Silver')->first();
                } else if ($totalPoint > 87) {
                    $badge = Badge::where('name', 'Bronze')->first();
                }


                if ($totalPoint > 87) {
                    $member->badge_id = $badge->id;
                    $member->save();
                }
            } else {
                if ($totalPoint > 246) {
                    $badge = Badge::where('name', 'Gold')->first();
                } else if ($totalPoint > 164) {
                    $badge = Badge::where('name', 'Silver')->first();
                } else if ($totalPoint > 82) {
                    $badge = Badge::where('name', 'Bronze')->first();
                }

                if ($totalPoint > 82) {
                    $member->badge_id = $badge->id;
                    $member->save();
                }
            }

            $session->completion = 'yes';
            $session->total_score = $totalPoint;
            $session->save();

            // Mail::to($member->user->email)->send(new ResultMail($member, $memberAssessment, $session));

            foreach ($memberAssessment as $assess) {
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
        $member = Member::where('user_id', Auth::id())->with('badge')->first();
        $session = AssessmentSession::where('id', $id)->first();
        $memberAssessments = MemberAssessment::with('assessment')->where('assessment_session_id', $id)->get();
        if ($session) {
            $dateAssessment = $session->created_at->addYears(1);

            if ((int)$member->id !== (int)$session->member_id) {
                return Redirect::route('member.dashboard');
            }
        } else {
            return Redirect::route('member.dashboard');
        }

        return Inertia::render('Member/Assessment/AssessmentResult', [
            'session' => $session,
            'member' => $member,
            'scores' => $memberAssessments,
            'expiredDate' => $dateAssessment,
        ]);
    }

    public function verifyEmail($id)
    {
        $member = Member::where('user_id', Auth::id())->with('badge')->first();
        $session = AssessmentSession::where('id', $id)->first();

        Mail::to('info@ecotourismbali.com')->send(new VerifyBadgeMail($member));

        return Redirect::route('member.assessment.result', $session->id)->with('success', 'The administrator has been notified of your request.');
    }
}
