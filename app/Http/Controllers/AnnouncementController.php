<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ForumThread;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $announcement = ForumThread::where('category', 'announcements')->get();
        return Inertia::render('Admin/Announcement/CreateAnnouncement', [
            'announcement' => $announcement,
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
        $forum_thread = new ForumThread;

        $request->validate([
            'title' => 'required',
            'text' => 'required',
            'images' => 'nullable',
            'file' => 'nullable',
            'category' => 'required'
        ]);
        $imageNames = array();
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $name = $image->getClientOriginalName();
                $extension = $image->extension();
                $imagename = $name . '_' . time() . '.' . $extension;
                $image->storeAs('public/threads/images', $imagename);
                array_push($imageNames, $imagename);
            }

            $forum_thread->images = serialize($imageNames);
        }

        if ($request->hasFile('file')) {
            $filename = $request->file('file')->getClientOriginalName();
            $request->file('file')->storeAs('public/threads/files', $filename);
            $forum_thread->file = $filename;
        }

        $forum_thread->title = $request->title;
        $forum_thread->text = $request->text;
        $forum_thread->member_id = 1;
        $forum_thread->category = $request->category;
        $forum_thread->save();

        return Redirect::route('announcement.index', $forum_thread->id);
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
        $announcement = ForumThread::where('id', $id)->firstOrFail();
        return Inertia::render('Admin/Announcement/EditAnnouncement', [
            'announcement' => $announcement,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $forum_thread = ForumThread::find($request->id);

        $request->validate([
            'title' => 'required',
            'text' => 'required',
            'images' => 'nullable',
            'file' => 'nullable',
            'category' => 'required'
        ]);

        $imageNames = array();
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $name = $image->getClientOriginalName();
                $extension = $image->extension();
                $imagename = $name . '_' . time() . '.' . $extension;
                $image->storeAs('public/threads/images', $imagename);
                array_push($imageNames, $imagename);
            }

            $forum_thread->images = serialize($imageNames);
        }

        if ($request->hasFile('file')) {
            $filename = $request->file('file')->getClientOriginalName();
            $request->file('file')->storeAs('public/threads/files', $filename);
            $forum_thread->file = $filename;
        }

        $forum_thread->title = $request->title;
        $forum_thread->text = $request->text;
        $forum_thread->save();

        return Redirect::route('announcement.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $forum_thread = ForumThread::find($request->id);
        if ($forum_thread->images) {
            foreach (unserialize($forum_thread->images) as $image) {
                if (\File::exists(public_path('storage/threads/images/' . $image))) {
                    \File::delete(public_path('storage/threads/images/' . $image));
                }
            }
        }
        $forum_thread->delete();

        return Redirect::route('announcement.index');
    }
}
