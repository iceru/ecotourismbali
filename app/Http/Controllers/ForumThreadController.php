<?php

namespace App\Http\Controllers;

use App\Models\ForumComment;
use App\Models\ForumThread;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ForumThreadController extends Controller
{
    public function index()
    {
        $forum_threads = ForumThread::with('member');

        return Inertia::render('Forum/ThreadList', [
            'forum_threads' => $forum_threads,
        ]);
    }
    
    public function store(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();
        
        $forum_thread = new ForumThread;
        
        $request->validate([
            'title' => 'required',
            'text' => 'required',
        ]);
        
        $forum_thread->title = $request->title;
        $forum_thread->text = $request->text;
        $forum_thread->total_comment = $request->total_comment;
        $forum_thread->member_id = $member->id;
        $forum_thread->save();
        
        return Redirect::route('member.forum.index')->with('success', 'Forum Thread created successfully');
    }

    public function show($id)
    {
        $forum_thread = ForumThread::where('id', $id)->with('member')->first();
        $forum_comments = ForumComment::where('forum_thread_id', $id)->with('member')->get();

        return Inertia::render('Forum/ShowThread', [
            'forum_thread' => $forum_thread,
            'forum_comments' => $forum_comments,
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
        ]);
        
        $forum_thread->title = $request->title;
        $forum_thread->text = $request->text;
        $forum_thread->save();

        return Redirect::route('member.forum.thread.show', $id);
    }

    public function destroy(Request $request)
    {
        $forum_thread = ForumThread::find($request->id);
        $forum_thread->delete();

        return Redirect::route('member.forum.index');
    }
}
