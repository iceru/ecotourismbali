<?php

namespace App\Http\Controllers;

use App\Models\ForumComment;
use App\Models\ForumThread;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ForumThreadController extends Controller {
    public function index(Request $request) {
        $threads = ForumThread::with('member');
        $member = Member::where('user_id', Auth::id())->first();
        if($request->query('keyword')) {
            $threads = $threads->where('title', 'LIKE', "%".$request->query('keyword')."%");
        }

        if($request->query('category')) {
            if($request->query('category') === 'home') {
                $threads = $threads->where('category', 'thread');
            } else if($request->query('category') === 'my_topics') {
                $threads = $threads->where('member_id', $member->id);
            } else {
                $threads = $threads->where('category', $request->query('category'));
            }
        }

        if($request->query('sort')) {
            $sortColumns = explode('-', $request->query('sort'));
            if($sortColumns[1] === 'descending') {
                if($sortColumns[0] === 'title') {
                    $threads->orderByDesc('title');
                } else if($sortColumns[0] === 'date') {
                    $threads->orderByDesc('created_at');
                }
            } else {
                if($sortColumns[0] === 'title') {
                    $threads->orderBy('title');
                } else if($sortColumns[0] === 'date') {
                    $threads->orderBy('created_at');

                }
            }
        } else {
            $threads->orderBy('created_at');
        }
        return Inertia::render('Forum/ForumIndex', [
            'threads' => $threads->get(),
        ]);

    }

    public function create() {
        $member = Member::where('user_id', Auth::id())->with('badge')->first();
        return Inertia::render('Forum/AddThread', [
            'member' => $member,
        ]);
    }

    public function store(Request $request) {
        $member = Member::where('user_id', Auth::id())->first();
        $forum_thread = new ForumThread;

        $request->validate([
            'title' => 'required',
            'text' => 'required',
        ]);

        $forum_thread->title = $request->title;
        $forum_thread->text = $request->text;
        $forum_thread->member_id = $member->id;
        $forum_thread->category = 'thread';
        $forum_thread->save();

        return Redirect::route('member.forum.thread.show', $forum_thread->id);
    }

    public function show($id) {
        $thread = ForumThread::where('id', $id)->with('member')->first();
        $member = Member::where('user_id', Auth::id())->first();
        $comments = ForumComment::where('forum_thread_id', $id)->with('member')->get();

        return Inertia::render('Forum/Thread', [
            'thread' => $thread,
            'comments' => $comments,
            'member' => $member
        ]);
    }

    public function edit($id) {
        $forum_thread = ForumThread::find($id);

        return Inertia::render('Forum/EditThread', [
            'forum_thread' => $forum_thread,
        ]);
    }

    public function update($id, Request $request) {
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

    public function destroy(Request $request) {
        $forum_thread = ForumThread::find($request->id);
        $forum_thread->delete();

        return Redirect::route('member.forum.index');
    }
}
