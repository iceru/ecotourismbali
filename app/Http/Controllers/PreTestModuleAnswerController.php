<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Models\PreTestQuestion;
use App\Models\PreTestModuleAnswer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PreTestModuleAnswerController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Member/Module/ModulePreTest', [
            'module' => Module::where('id', $id)->firstOrFail(),
            'pre_test' => PreTestQuestion::where('module_id', $id)->with('pre_test_option')->get(),
            'member' => Member::where('user_id', Auth::id())->first(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'member_id' => 'required',
            'pre_test_question_id' => 'required',
            'pre_test_option_id' => 'required',
        ]);
        
        $pre_test_module_answer = PreTestModuleAnswer::where(['member_id'=>$request->member_id, 'pre_test_question_id'=>$request->pre_test_question_id])->first();

        if($pre_test_module_answer === null) {
            $pre_test_module_answer = new PreTestModuleAnswer;
        }
        
        $pre_test_module_answer->member_id = $request->member_id;
        $pre_test_module_answer->pre_test_question_id = $request->pre_test_question_id;
        $pre_test_module_answer->pre_test_option_id = $request->pre_test_option_id;
        $pre_test_module_answer->save();
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
