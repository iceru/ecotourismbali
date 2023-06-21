<?php

namespace App\Http\Controllers;

use App\Models\PostTestModuleAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostTestModuleAnswerController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PostTestModuleAnswer/CreatePostTestModuleAnswer', [
            'post_test_module_answer' => PostTestModuleAnswer::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $post_test_module_answer = new PostTestModuleAnswer;

        $request->validate([
            'member_id' => 'required',
            'post_test_question_id' => 'required',
            'post_test_option_id' => 'required',
        ]);

        $post_test_module_answer->member_id = $request->member_id;
        $post_test_module_answer->post_test_question_id = $request->post_test_question_id;
        $post_test_module_answer->post_test_option_id = $request->post_test_option_id;
        $post_test_module_answer->save();

        return Redirect::route('post_test_module_answer.index')->with('success', 'Pre test module answer created successfully.');
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
