<?php

namespace App\Http\Controllers;

use App\Models\PostTestOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostTestOptionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PostTestOption/CreatePostTestOption', [
            'post_test_option' => PostTestOption::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $post_test_option = new PostTestOption;

        $request->validate([
            'title' => 'required',
            'post_test_question_id' => 'required',
        ]);

        $post_test_option->title = $request->title;
        $post_test_option->post_test_question_id = $request->post_test_question_id;
        $post_test_option->save();

        return Redirect::route('post_test_option.index')->with('success', 'Post test option created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PostTestOption/EditPostTestOption', [
            'post_test_option' => PostTestOption::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $post_test_option = PostTestOption::find($request->id);

        $request->validate([
            'title' => 'required',
            'post_test_question_id' => 'required',
        ]);

        $post_test_option->title = $request->title;
        $post_test_option->post_test_question_id = $request->post_test_question_id;
        $post_test_option->save();

        return Redirect::route('post_test_option.index');
    }

    public function destroy(Request $request)
    {
        $post_test_option = PostTestOption::find($request->id);

        $post_test_option->delete();

        return Redirect::route('post_test_option.index');
    }
}
