<?php

namespace App\Http\Controllers;

use App\Models\ForumComment;
use App\Models\ForumThread;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ForumCommentController extends Controller
{
    public function store(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();

        $forum_comment = new ForumComment;

        $request->validate([
            'text' => 'required',
        ]);

        $forum_comment->text = $request->text;
        $forum_comment->forum_thread_id = $request->forum_thread_id;
        $forum_comment->member_id = $member->id;
        $forum_comment->save();

        //+1 total comment
        $forum_thread = ForumThread::find($request->forum_thread_id);
        $forum_thread->total_comment = $forum_thread->total_comment+1;
        $forum_thread->save();

        return Redirect::route('member.forum.thread.show', $request->forum_thread_id);
    }

    public function edit($id)
    {
        $forum_comment = ForumComment::find($id);
        
        return Inertia::render('Forum/EditComment', [
            'forum_comment' => $forum_comment,
        ]);
    }

    public function update($id, Request $request)
    {
        $forum_comment = ForumComment::find($request->id);

        $request->validate([
            'text' => 'required',
        ]);

        $forum_comment->text = $request->text;
        $forum_comment->save();

        return Redirect::route('member.forum.thread.show', $request->forum_thread_id);
    }
    
    public function destroy(Request $request)
    {
        $forum_comment = ForumComment::find($request->id);
        $id = $forum_comment->forum_thread_id;
        $forum_comment->delete();

        return Redirect::route('member.forum.thread.show', $id);
    }
}
