<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Models\ForumThread;
use App\Models\ForumComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ForumThreadController extends Controller
{
    public function index(Request $request)
    {
        $threads = ForumThread::with('member');
        $member = Member::where('user_id', Auth::id())->first();
        $activeUsers = DB::table('forum_threads')
            ->join('members', 'forum_threads.member_id', '=', 'members.id')
            ->where('member_id', '!=', 1)
            ->select('member_id', 'business_name', 'image', DB::raw('count(*) as total'))
            ->groupBy('member_id', 'business_name')
            ->get(5);

        if ($request->query('keyword')) {
            $threads = $threads->where('title', 'LIKE', "%" . $request->query('keyword') . "%");
        }

        if ($request->query('category')) {
            if ($request->query('category') === 'home') {
                $threads = $threads->where('category', 'thread');
            } else if ($request->query('category') === 'my_topics') {
                $threads = $threads->where('member_id', $member->id);
            } else {
                $threads = $threads->where('category', $request->query('category'));
            }
        } else {
            $threads = $threads->where('category', 'thread');
        }

        if ($request->query('sort')) {
            $sortColumns = explode('-', $request->query('sort'));
            if ($sortColumns[1] === 'descending') {
                if ($sortColumns[0] === 'title') {
                    $threads->orderByDesc('title');
                } else if ($sortColumns[0] === 'date') {
                    $threads->orderByDesc('created_at');
                }
            } else {
                if ($sortColumns[0] === 'title') {
                    $threads->orderBy('title');
                } else if ($sortColumns[0] === 'date') {
                    $threads->orderBy('created_at');

                }
            }
        } else {
            $threads->orderBy('created_at', 'desc');
        }

        return Inertia::render('Forum/ForumIndex', [
            'threads' => $threads->get(),
            'activeUsers' => $activeUsers
        ]);

    }

    public function create()
    {
        $member = Member::where('user_id', Auth::id())->with('badge')->first();
        return Inertia::render('Forum/AddThread', [
            'member' => $member,
        ]);
    }

    public function store(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();
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
        $forum_thread->member_id = $member->id;
        $forum_thread->category = $request->category;
        $forum_thread->save();

        return Redirect::route('member.forum.thread.show', $forum_thread->id);
    }

    public function download(Request $request)
    {
        $file_path = public_path('storage/threads/files/' . $request->file);
        return response()->download($file_path);
    }

    public function show($id)
    {
        $thread = ForumThread::where('id', $id)->with('member')->firstOrFail();
        $images = unserialize($thread->images);
        $member = Member::where('user_id', Auth::id())->first();
        $comments = ForumComment::where('forum_thread_id', $id)->with('member')->get();

        return Inertia::render('Forum/Thread', [
            'thread' => $thread,
            'comments' => $comments,
            'member' => $member,
            'images' => $images
        ]);
    }

    public function edit($id)
    {
        $forum_thread = ForumThread::find($id);

        return Inertia::render('Forum/EditThread', [
            'forum_thread' => $forum_thread,
        ]);
    }

    public function update($id, Request $request)
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

        return Redirect::route('member.forum.thread.show', $id);
    }

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

        return Redirect::route('member.forum.index');
    }
}
