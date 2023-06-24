<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\PreTestOption;
use App\Models\PreTestQuestion;
use Illuminate\Support\Facades\Redirect;

class PreTestOptionController extends Controller
{
    public function index($id)
    {
        return Inertia::render('Admin/PreTest/CreatePreOption', [
            'pre_option' => PreTestOption::where('pre_test_question_id', $id)->get(),
            'pre_question' => PreTestQuestion::where('id', $id)->with('module')->first(),
        ]);
    }

    public function store(Request $request, $id)
    {
        $pre_option = new PreTestOption;

        $request->validate([
            'title' => 'required',
        ]);

        $pre_option->title = $request->title;
        $pre_option->pre_test_question_id = $id;
        $pre_option->save();

        return Redirect::route('pre_option.index', $id)->with('success', 'Pre test option created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/PreTest/EditPreOption', [
            'pre_option' => PreTestOption::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $pre_option = PreTestOption::find($id);

        $request->validate([
            'title' => 'required',
        ]);

        $pre_option->title = $request->title;
        $pre_option->save();

        return Redirect::route('pre_option.index', $pre_option->pre_test_question_id);
    }

    public function destroy(Request $request)
    {
        $pre_option = PreTestOption::find($request->id);
        $id = $pre_option->pre_test_question_id;

        $pre_option->delete();

        return Redirect::route('pre_option.index', $id);
    }
}
