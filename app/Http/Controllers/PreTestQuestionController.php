<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Models\PreTestQuestion;
use Illuminate\Support\Facades\Redirect;

class PreTestQuestionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PreTest/CreatePreQuestion', [
            'pre_question' => PreTestQuestion::where('module_id', $id)->get(),
            'module' => Module::find($id)
        ]);
    }

    public function store(Request $request, $id)
    {
        $pre_test_question = new PreTestQuestion;

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
        ]);

        $pre_test_question->question = $request->question;
        $pre_test_question->question_no = $request->question_no;
        $pre_test_question->module_id = $id;
        $pre_test_question->save();

        return Redirect::route('pre_question.index', $id)->with('success', 'Pre test question created successfully.');
    }

    public function edit($id)
    {
        $pre_test_question = PreTestQuestion::find($id);

        return Inertia::render('Admin/PreTest/EditPreQuestion', [
            'pre_question' => $pre_test_question,
        ]);
    }

    public function update(Request $request, $id)
    {
        $pre_test_question = PreTestQuestion::find($id);

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
        ]);

        $pre_test_question->question = $request->question;
        $pre_test_question->question_no = $request->question_no;
        $pre_test_question->save();

        return Redirect::route('pre_question.index', $id);
    }

    public function destroy(Request $request)
    {
        $pre_test_question = PreTestQuestion::find($request->id);
        $id = $pre_test_question->module_id;
        $pre_test_question->delete();

        return Redirect::route('pre_question.index', $id);
    }
}
