<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Models\PostTestQuestion;
use App\Models\PostTestModuleAnswer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PostTestModuleAnswerController extends Controller
{
    public function index($id)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $module = Module::where('id', $id)->with(array('member_module' => function($query) use($member) {
            $query->where('member_id', $member->id);
        }))->firstOrFail();

        return Inertia::render('Member/Module/ModulePostTest', [
            'module' => $module,
            'post_test' => PostTestQuestion::where('module_id', $id)->with('post_test_option')->get(),
            'member' => $member,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'member_id' => 'required',
            'post_test_question_id' => 'required',
            'post_test_option_id' => 'required',
        ]);
        
        $postTestModuleAnswer = PostTestModuleAnswer::firstOrNew([
            'member_id' => $request->member_id,
            'post_test_question_id' => $request->post_test_question_id
        ]);
        
        $postTestModuleAnswer->member_id = $request->member_id;
        $postTestModuleAnswer->post_test_question_id = $request->post_test_question_id;
        $postTestModuleAnswer->post_test_option_id = $request->post_test_option_id;
        $postTestModuleAnswer->save();
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PostTestModuleAnswer/EditPostTestModuleAnswer', [
            'post_test_module_answer' => PostTestModuleAnswer::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $post_test_module_answer = PostTestModuleAnswer::find($request->id);

        $request->validate([
            'member_id' => 'required',
            'post_test_question_id' => 'required',
            'post_test_option_id' => 'required',
        ]);

        $post_test_module_answer->member_id = $request->member_id;
        $post_test_module_answer->post_test_question_id = $request->post_test_question_id;
        $post_test_module_answer->post_test_option_id = $request->post_test_option_id;
        $post_test_module_answer->save();

        return Redirect::route('post_test_module_answer.index');
    }

    public function destroy(Request $request)
    {
        $post_test_module_answer = PostTestModuleAnswer::find($request->id);

        $post_test_module_answer->delete();

        return Redirect::route('post_test_module_answer.index');
    }
}
