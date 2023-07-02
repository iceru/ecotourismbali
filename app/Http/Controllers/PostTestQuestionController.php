<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Models\PostTestQuestion;
use Illuminate\Support\Facades\Redirect;

class PostTestQuestionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PostTest/CreatePostQuestion', [
            'post_question' => PostTestQuestion::where('module_id', $id)->get(),
            'module' => Module::find($id)
        ]);
    }

    public function store(Request $request, $id)
    {
        $post_question = new PostTestQuestion;

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
        ]);

        $post_question->question = $request->question;
        $post_question->question_no = $request->question_no;
        $post_question->module_id = $id;
        $post_question->save();

        return Redirect::route('post_question.index', $id)->with('success', 'Post test question created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PostTest/EditPostQuestion', [
            'post_question' => PostTestQuestion::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $post_question = PostTestQuestion::find($id);

        $request->validate([
            'question' => 'required',
            'question_no' => 'required|integer',
        ]);

        $post_question->question = $request->question;
        $post_question->question_no = $request->question_no;
        $post_question->save();

        return Redirect::route('post_question.index', $id);
    }

    public function destroy(Request $request)
    {
        $post_question = PostTestQuestion::find($request->id);
        $id = $post_question->module_id;
        $post_question->delete();

        return Redirect::route('post_question.index', $id);
    }
}
