<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Program/CreateProgram', [
            'program' => Program::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $program = new Program;

        $request->validate([
            'name' => 'required',
            'image' => 'required|image',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->name . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/programs', $filename);
        }

        $program->name = $request->name;
        $program->image = $filename;
        $program->save();

        return Redirect::route('program.index')->with('success', 'Program created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Admin/Program/EditProgram', [
            'program' => Program::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $program = Program::find($request->id);

        $request->validate([
            'name' => 'required',
            'image' => 'nullable',
        ]);
        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->name . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/programs', $filename);

            $program->image = $filename;
        }

        $program->name = $request->name;
        $program->save();

        return Redirect::route('program.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $program = Program::find($request->id);
        Storage::disk('public')->delete('programs/' . $program->image);

        $program->delete();

        return Redirect::route('program.index');
    }
}
