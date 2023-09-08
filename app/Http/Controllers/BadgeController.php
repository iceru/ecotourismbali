<?php

namespace App\Http\Controllers;

use App\Models\Badge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BadgeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Badge/CreateBadge', [
            'badge' => Badge::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $badge = new Badge;

        $request->validate([
            'name' => 'required',
            'image' => 'required|image',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->name . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/badges', $filename);
        }

        $badge->name = $request->name;
        $badge->image = $filename;
        $badge->save();

        return Redirect::route('badge.index')->with('success', 'Badge created successfully.');
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Admin/Badge/EditBadge', [
            'badge' => Badge::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $badge = Badge::find($request->id);

        $request->validate([
            'name' => 'required',
            'image' => 'nullable',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->name . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/badges', $filename);

            $badge->image = $filename;
        }

        $badge->name = $request->name;
        $badge->save();

        return Redirect::route('badge.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $badge = Badge::find($request->id);
        Storage::disk('public')->delete('badges/' . $badge->image);

        $badge->delete();

        return Redirect::route('badge.index');
    }
}
