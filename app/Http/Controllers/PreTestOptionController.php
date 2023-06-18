<?php

namespace App\Http\Controllers;

use App\Models\PreTestOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PreTestOptionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PreTestOption/CreatePreTestOption', [
            'pre_test_option' => PreTestOption::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $pre_test_option = new PreTestOption;

        $request->validate([
            'title' => 'required',
            'pre_test_question_id' => 'required',
        ]);

        $pre_test_option->title = $request->title;
        $pre_test_option->pre_test_question_id = $request->pre_test_question_id;
        $pre_test_option->save();

        return Redirect::route('pre_test_option.index')->with('success', 'Pre test option created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PreTestQuestion/EditPreTestQuestion', [
            'pre_test_option' => PreTestOption::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $pre_test_option = PreTestOption::find($request->id);

        $request->validate([
            'title' => 'required',
            'pre_test_question_id' => 'required',
        ]);

        $pre_test_option->title = $request->title;
        $pre_test_option->pre_test_question_id = $request->pre_test_question_id;
        $pre_test_option->save();

        return Redirect::route('pre_test_option.index');
    }

    public function destroy(Request $request)
    {
        $pre_test_option = PreTestOption::find($request->id);

        $pre_test_option->delete();

        return Redirect::route('pre_test_option.index');
    }
}
