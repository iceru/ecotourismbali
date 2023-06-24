<?php

namespace App\Http\Controllers;

use App\Models\PreTestQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PreTestQuestionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PreTestQuestion/CreatePreTestQuestion', [
            'pre_test_question' => PreTestQuestion::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $pre_test_question = new PreTestQuestion;

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
            'module_id' => 'required',
        ]);

        $pre_test_question->question = $request->question;
        $pre_test_question->question_no = $request->question_no;
        $pre_test_question->module_id = $request->module_id;
        $pre_test_question->save();

        return Redirect::route('pre_test_question.index')->with('success', 'Pre test question created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PreTestQuestion/EditPreTestQuestion', [
            'pre_test_question' => PreTestQuestion::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $pre_test_question = PreTestQuestion::find($request->id);

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
            'module_id' => 'required',
        ]);

        $pre_test_question->question = $request->question;
        $pre_test_question->question_no = $request->question_no;
        $pre_test_question->module_id = $request->module_id;
        $pre_test_question->save();

        return Redirect::route('pre_test_question.index');
    }

    public function destroy(Request $request)
    {
        $pre_test_question = PreTestQuestion::find($request->id);

        $pre_test_question->delete();

        return Redirect::route('pre_test_question.index');
    }
}
