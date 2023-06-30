<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\PostTestOption;
use App\Models\PostTestQuestion;
use Illuminate\Support\Facades\Redirect;

class PostTestOptionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PostTest/CreatePostOption', [
            'post_option' => PostTestOption::where('post_test_question_id', $id)->get(),
            'post_question' => PostTestQuestion::where('id', $id)->with('module')->first(),
        ]);
    }

    public function store(Request $request, $id)
    {
        $post_option = new PostTestOption;

        $request->validate([
            'title' => 'required',
            'answer' => 'required'
        ]);

        $post_option->title = $request->title;
        $post_option->answer = $request->answer;
        $post_option->post_test_question_id = $id;
        $post_option->save();

        return Redirect::route('post_option.index', $id)->with('success', 'Post test option created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PostTest/EditPostOption', [
            'post_option' => PostTestOption::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $post_option = PostTestOption::find($id);

        $request->validate([
            'title' => 'required',
            'answer' => 'required',
        ]);

        $post_option->title = $request->title;
        $post_option->answer = $request->answer;
        $post_option->save();

        return Redirect::route('post_option.index', $post_option->post_test_question_id);
    }

    public function destroy(Request $request)
    {
        $post_option = PostTestOption::find($request->id);
        $id = $post_option->post_test_question_id;

        $post_option->delete();

        return Redirect::route('post_option.index', $id);
    }
}
