<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class MemberController extends Controller
{
    public function index()
    {
        return Inertia::render('Member/MemberDashboard', [
            'member' => Member::where('user_id', Auth::id())->first(),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function locked()
    {
        return Inertia::render('Member/MemberLocked', [
            'member' => Member::where('user_id', Auth::id())->first(),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function profile()
    {
        return Inertia::render('Member/MemberProfile', [
            'member' => Member::where('user_id', Auth::id())->first(),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function editProfile($id)
    {

        return Inertia::render('Member/MemberEditProfile', [
            'member' => Member::where('id', $id)->first(),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function storeProfile(Request $request, $id)
    {
        $member = Member::where('id', $id)->first();

        $request->validate([
            'business_name' => 'nullable',
            'sliders' => 'nullable',
            'address' => 'nullable',
            'website' => 'nullable',
            'description' => 'nullable',
            'image' => 'nullable|image',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->business_name . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/member/images', $filename);
        }

        $member->business_name = $request->business_name;
        $member->address = $request->address;
        $member->website = $request->website;
        $member->description = $request->description;
        $member->image = $filename;
        $member->save();

        return Redirect::route('member.profile')->with('success', 'Profile updated successfully.');
    }
}
