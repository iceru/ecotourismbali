<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AssessmentController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Assessment/CreateAssessment', [
            'assessment' => Assessment::all(),
        ]);
    }

    public function store(Request $request)
    {
        $assessment = new Assessment;

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image',
        ]);

        if ($request->hasFile('key')) {
            $extension = $request->file('image')->extension();
            $filename = $request->name.'_'.time().'.'.$extension;
            $path = $request->file('image')->storeAs('public/assessments', $filename);
        }

        $assessment->title = $request->name;
        $assessment->description = $request->description;
        $assessment->image = $request->image;
        $assessment->save();

        return Redirect::route('assessment.index');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Assessment/EditAssessment', [
            'assessment' => Assessment::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $assessment = Assessment::find($request->id);

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image',
        ]);

        if ($request->hasFile('key')) {
            $extension = $request->file('image')->extension();
            $filename = $request->name.'_'.time().'.'.$extension;
            $path = $request->file('image')->storeAs('public/assessments', $filename);
        }

        $assessment->title = $request->name;
        $assessment->description = $request->description;
        $assessment->image = $request->image;
        $assessment->save();

        return Redirect::route('assessment.index');
    }

    public function destroy(Request $request)
    {
        $assessment = Assessment::find($request->id);
        Storage::disk('public')->delete('assessments/'.$assessment->image);

        $assessment->delete();

        return Redirect::route('assessment.index');
    }
}
