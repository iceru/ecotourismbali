<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\AssessmentOption;
use App\Models\AssessmentQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AssessmentOptionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/Assessment/CreateOption', [
            'assessment_option' => AssessmentOption::where('assessment_question_id', $id)->get(),
            'assessment_question' => AssessmentQuestion::find($id),
        ]);
    }

    public function store($id, Request $request)
    {
        $assessment_option = new AssessmentOption;

        $request->validate([
            'option_no' => 'required',
            'option' => 'required',
            'point' => 'required|integer',
        ]);

        $assessment_option->option_no = $request->option_no;
        $assessment_option->option = $request->option;
        $assessment_option->point = $request->point;

        $assessment_question = AssessmentQuestion::find($id);
        $assessment_option->assessment_question_id = $assessment_question->id;

        $assessment_option->save();

        return Redirect::route('assessment_option.index', $id);
    }

    public function edit($id)
    {
        $assessment_option = AssessmentOption::find($id);
        $assessment_question = AssessmentQuestion::find($assessment_option->assessment_question_id);

        return Inertia::render('Admin/Assessment/EditOption', [
            'assessment_option' => $assessment_option,
            'assessment_question' => $assessment_question,
        ]);
    }

    public function update($id, Request $request)
    {
        $assessment_option = AssessmentOption::find($request->id);

        $request->validate([
            'option_no' => 'required',
            'option' => 'required',
            'point' => 'required|integer',
        ]);

        $assessment_option->option_no = $request->option_no;
        $assessment_option->option = $request->option;
        $assessment_option->point = $request->point;

        $assessment_question = AssessmentQuestion::find($id);
        $assessment_option->assessment_question_id = $assessment_question->id;

        $assessment_option->save();

        return Redirect::route('assessment_option.index', $id);
    }

    public function destroy(Request $request)
    {
        $assessment_option = AssessmentOption::find($request->id);
        $id = $assessment_option->assessment_question_id;
        $assessment_option->delete();

        return Redirect::route('assessment_option.index', $id);
    }
}
