<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Assessment;
use App\Models\BusinessType;
use Illuminate\Http\Request;
use App\Models\AssessmentQuestion;
use Illuminate\Support\Facades\Auth;
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
            'member' => Member::where('user_id', Auth::id())->first(),
            'assessments' => Assessment::with('assessment_question')->get(),
        ]);
    }

    public function save(Request $request)
    {
        $data = $request->validate([
            'radio.*' => 'required|exists:options,id',
            'checkbox.*' => 'required|exists:options,id',
        ]);
        $member =  Member::where('user_id', Auth::id())->first();
        dd($request);
        foreach ($data['radio'] as $questionId => $optionId) {
            $memberAnswer = MemberAssessmentAnswer::firstOrNew([
                'member_id' => $member->id,
                'assessment_question_id' => $questionId,
            ]);
            
            $postTestModuleAnswer->member_id = $member->id;
            $postTestModuleAnswer->assessment_question_id = $questionId;
            $postTestModuleAnswer->assessment_option_id = $opionId;
            $postTestModuleAnswer->save();
        }

        foreach ($data['checkbox'] as $questionId => $optionIds) {
            if ($optionIds) {
                foreach ($optionIds as $optionId) {
                    // Process each question and selected option
                    // You can save them to the database or perform any other logic here
                    // For example:
                    $question = Question::find($questionId);
                    $option = $question->options()->find($optionId);

                    // Do something with $question and $option
                    $memberAnswer = MemberAssessmentAnswer::firstOrNew([
                        'member_id' => $member->id,
                        'assessment_question_id' => $questionId,
                    ]);
                    
                    $postTestModuleAnswer->member_id = $member->id;
                    $postTestModuleAnswer->assessment_question_id = $questionId;
                    $postTestModuleAnswer->assessment_option_id = $opionId;
                    $postTestModuleAnswer->save();
                }
            }
        }
    }

    public function store(Request $request, $id)
    {
        $member = Member::where('id', $id)->first();
        $user = User::where('id', $member->user_id)->first();

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

        return Redirect::route('member.assessment.start', $id);
    }
}
