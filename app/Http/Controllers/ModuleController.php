<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ModuleController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Module/CreateModule', [
            'module' => Module::all(),
        ]);
    }

    public function store(Request $request)
    {
        $module = new Module;

        $request->validate([
            'title' => 'required',
            'image' => 'required|image',
            'description' => 'required',
            'content' => 'required',
            'video' => 'required',
            'attachment' => 'nullable|file',
            'resource_person' => 'required',
        ]);

        $image_filename = null;
        $attachment_filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $image_filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/modules', $image_filename);
        }
        if ($request->hasFile('attachment')) {
            $extension = $request->file('attachment')->extension();
            $attachment_filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('attachment')->storeAs('public/modules', $attachment_filename);
        }

        $module->title = $request->title;
        $module->image = $image_filename;
        $module->description = $request->description;
        $module->content = $request->content;
        $module->video = $request->video;
        $module->attachment = $attachment_filename;
        $module->resource_person = $request->resource_person;
        $module->save();

        return Redirect::route('module.index')->with('success', 'Module created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Module/EditModule', [
            'module' => Module::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $module = Module::find($request->id);

        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image',
            'description' => 'required',
            'content' => 'required',
            'video' => 'required',
            'attachment' => 'nullable|file',
            'resource_person' => 'required',
        ]);

        if ($request->hasFile('image')) {
            $image_filename = null;
            $extension = $request->file('image')->extension();
            $image_filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/modules', $image_filename);
            $module->image = $image_filename;
        }
        if ($request->hasFile('attachment')) {
            $attachment_filename = null;
            $extension = $request->file('attachment')->extension();
            $attachment_filename = $request->title . '_' . time() . '.' . $extension;
            $request->file('attachment')->storeAs('public/modules', $attachment_filename);
            $module->attachment = $attachment_filename;
        }

        $module->title = $request->title;
        $module->description = $request->description;
        $module->content = $request->content;
        $module->video = $request->video;
        $module->resource_person = $request->resource_person;
        $module->save();

        return Redirect::route('module.index');
    }

    public function destroy(Request $request)
    {
        $module = Module::find($request->id);
        Storage::disk('public')->delete('modules/' . $module->image);
        Storage::disk('public')->delete('modules/' . $module->attachment);

        $module->delete();

        return Redirect::route('module.index');
    }
}
