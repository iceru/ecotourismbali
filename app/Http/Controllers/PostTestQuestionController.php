<?php

namespace App\Http\Controllers;

use App\Models\PostTestQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostTestQuestionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PostTestQuestion/CreatePostTestQuestion', [
            'post_test_question' => PostTestQuestion::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $post_test_question = new PostTestQuestion;

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
            'module_id' => 'required',
        ]);

        $post_test_question->question = $request->question;
        $post_test_question->question_no = $request->question_no;
        $post_test_question->module_id = $request->module_id;
        $post_test_question->save();

        return Redirect::route('post_test_question.index')->with('success', 'Post test question created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PostTestQuestion/EditPostTestQuestion', [
            'pre_test_question' => PostTestQuestion::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $post_test_question = PostTestQuestion::find($request->id);

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
            'module_id' => 'required',
        ]);

        $post_test_question->question = $request->question;
        $post_test_question->question_no = $request->question_no;
        $post_test_question->module_id = $request->module_id;
        $post_test_question->save();

        return Redirect::route('post_test_question.index');
    }

    public function destroy(Request $request)
    {
        $post_test_question = PostTestQuestion::find($request->id);

        $post_test_question->delete();

        return Redirect::route('post_test_question.index');
    }
}
