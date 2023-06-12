<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;

class MemberController extends Controller
{
    public function index()
    {
        return Inertia::render('Member/MemberDashboard', [
            'member' => User::find(Auth::id())->with('member'),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function locked()
    {
        return Inertia::render('Member/MemberLocked', [
            'member' => User::find(Auth::id())->with('member'),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function profile()
    {
        return Inertia::render('Member/MemberProfile', [
            'member' => User::find(Auth::id())->with('member'),
            'user' => User::find(Auth::id()),
        ]);
    }
}
