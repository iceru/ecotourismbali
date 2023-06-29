<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\AssessmentQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AssessmentQuestionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/Assessment/CreateQuestion', [
            'assess_question' => AssessmentQuestion::where('assessment_id', $id)->get(),
            'assessment' => Assessment::find($id),
        ]);
    }

    public function store($id, Request $request)
    {
        $assessment_question = new AssessmentQuestion;

        $request->validate([
            'title' => 'required',
            'question' => 'required',
            'type' => 'required',
            'question_no' => 'required|integer',
        ]);

        $assessment_question->title = $request->title;
        $assessment_question->question = $request->question;
        $assessment_question->question_no = $request->question_no;
        $assessment_question->type = $request->type;

        $assessment = Assessment::find($id);
        $assessment_question->assessment_id = $assessment->id;

        $assessment_question->save();

        return Redirect::route('assessment_question.index', $assessment->id);
    }

    public function edit($id)
    {
        $assessment_question = AssessmentQuestion::find($id);
        $assessment = Assessment::find($assessment_question->assessment_id);

        return Inertia::render('Admin/Assessment/EditQuestion', [
            'assess_question' => $assessment_question,
            'assessment' => $assessment,
        ]);
    }

    public function update($id, Request $request)
    {
        $assessment_question = AssessmentQuestion::find($request->id);

        $request->validate([
            'title' => 'required',
            'question' => 'required',
            'type' => 'required',
            'question_no' => 'required|integer',
        ]);

        $assessment_question->title = $request->title;
        $assessment_question->question = $request->question;
        $assessment_question->question_no = $request->question_no;
        $assessment_question->type = $request->type;

        $assessment_question->save();

        return Redirect::route('assessment_question.index', $assessment_question->assessment->id);
    }

    public function destroy(Request $request)
    {
        $assessment_question = AssessmentQuestion::find($request->id);
        $id = $assessment_question->assessment->id;
        $assessment_question->delete();

        return Redirect::route('assessment_question.index', $id);
    }
}
