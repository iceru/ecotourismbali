<?php

namespace App\Http\Controllers;

use App\Models\PreTestModuleAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PreTestModuleAnswerController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PreTestModuleAnswer/CreatePreTestModuleAnswer', [
            'pre_test_module_answer' => PreTestModuleAnswer::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $pre_test_module_answer = new PreTestModuleAnswer;

        $request->validate([
            'member_id' => 'required',
            'pre_test_question_id' => 'required',
            'pre_test_option_id' => 'required',
        ]);

        $pre_test_module_answer->member_id = $request->member_id;
        $pre_test_module_answer->pre_test_question_id = $request->pre_test_question_id;
        $pre_test_module_answer->pre_test_option_id = $request->pre_test_option_id;
        $pre_test_module_answer->save();

        return Redirect::route('pre_test_module_answer.index')->with('success', 'Pre test module answer created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PreTestModuleAnswer/EditPreTestModuleAnswer', [
            'pre_test_module_answer' => PreTestModuleAnswer::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $pre_test_module_answer = PreTestModuleAnswer::find($request->id);

        $request->validate([
            'member_id' => 'required',
            'pre_test_question_id' => 'required',
            'pre_test_option_id' => 'required',
        ]);

        $pre_test_module_answer->member_id = $request->member_id;
        $pre_test_module_answer->pre_test_question_id = $request->pre_test_question_id;
        $pre_test_module_answer->pre_test_option_id = $request->pre_test_option_id;
        $pre_test_module_answer->save();

        return Redirect::route('pre_test_module_answer.index');
    }

    public function destroy(Request $request)
    {
        $pre_test_module_answer = PreTestModuleAnswer::find($request->id);

        $pre_test_module_answer->delete();

        return Redirect::route('pre_test_module_answer.index');
    }
}
