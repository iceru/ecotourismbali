<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Source;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;

class SourceController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Source/CreateSource', [
            'sources' => Source::all(),
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Admin/Source/ShowSource', [
            'sources' => Source::find($id),
        ]);
    }

    public function store(Request $request)
    {
        $source = new Source;

        $request->validate([
            'title' => 'required',
            'image' => 'required|image',
            'description' => 'required',
        ]);

        $image_filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $image_filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/sources', $image_filename);
        }
        $source->title = $request->title;
        $source->image = $image_filename;
        $source->description = $request->description;
        $source->save();

        return Redirect::route('source.index')->with('success', 'Source created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Source/EditSource', [
            'source' => Source::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $source = Source::find($request->id);

        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image',
            'description' => 'required',
        ]);

        if ($request->hasFile('image')) {
            $image_filename = null;
            $extension = $request->file('image')->extension();
            $image_filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/sources', $image_filename);
            $source->image = $image_filename;
        }

        $source->title = $request->title;
        $source->description = $request->description;
        $source->save();

        return Redirect::route('source.index')->with('success', 'Source updated successfully.');;
    }

    public function destroy(Request $request)
    {
        $source = Source::find($request->id);
        Storage::disk('public')->delete('sources/' . $source->image);
        Storage::disk('public')->delete('sources/' . $source->attachment);

        $source->delete();

        return Redirect::route('source.index');
    }
}
