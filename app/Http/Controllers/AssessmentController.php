<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\BusinessType;
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
            'business_type' => BusinessType::all(),
        ]);
    }

    public function store(Request $request)
    {
        $assessment = new Assessment;

        $request->validate([
            'title' => 'required',
            'title_en' => 'required',
            'description' => 'required',
            'description_en' => 'required',
            'business_type' => 'required',
            'image' => 'required|image',
            'image_en' => 'required|image',
        ]);

        $filename = null;
        $imageEn = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/assessments', $filename);
        }

        
        if ($request->hasFile('image_en')) {
            $extension = $request->file('image_en')->extension();
            $imageEn = $request->title . '_' . time() . '.' . $extension;
            $request->file('image_en')->storeAs('public/assessments', $imageEn);
        }

        $assessment->title = $request->title;
        $assessment->title_en = $request->title_en;
        $assessment->description = $request->description;
        $assessment->description_en = $request->description_en;
        $assessment->image = $filename;
        $assessment->image_en = $imageEn;
        $assessment->business_type_id = $request->business_type;
        $assessment->save();

        return Redirect::route('assessment.index')->with('success', 'Assessment created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Assessment/EditAssessment', [
            'assessment' => Assessment::find($id),
            'business_type' => BusinessType::all(),
        ]);
    }

    public function update(Request $request)
    {
        $assessment = Assessment::find($request->id);

        $request->validate([
            'title' => 'required',
            'title_en' => 'required',
            'description' => 'required',
            'description_en' => 'required',
            'business_type' => 'required',
            'image' => 'nullable|image',
            'image_en' => 'nullable|image',
        ]);

        $filename = null;
        $imageEn = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/assessments', $filename);

            $assessment->image = $filename;
        }

        if ($request->hasFile('image_en')) {
            $extension = $request->file('image_en')->extension();
            $imageEn = $request->title . '_' . time() . '.' . $extension;
            $request->file('image_en')->storeAs('public/assessments', $imageEn);
            $assessment->image_en = $imageEn;
        }

        $assessment->title = $request->title;
        $assessment->title_en = $request->title_en;
        $assessment->description = $request->description;
        $assessment->description_en = $request->description_en;
        $assessment->save();

        return Redirect::route('assessment.index')->with('success', 'Assessment edited successfully.');
    }

    public function destroy(Request $request)
    {
        $assessment = Assessment::find($request->id);
        Storage::disk('public')->delete('assessments/' . $assessment->image);

        $assessment->delete();

        return Redirect::route('assessment.index');
    }
}
