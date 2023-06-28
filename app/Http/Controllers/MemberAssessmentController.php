<?php

namespace App\Http\Controllers;

use App\Models\BusinessType;
use App\Models\Member;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MemberAssessmentController extends Controller
{
    public function index()
    {
        return Inertia::render('Member/Assessment/AssessmentData', [
            'business_type' => BusinessType::all(),
            'member' => Member::where('user_id', Auth::id())->first(),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function store(Request $request, $id, $userId)
    {
        $member = Member::where('id', $id)->first();
        $user = User::where('id', $userId)->first();

        $request->validate([
            'business_name' => 'required',
            'name' => 'required',
            'address' => 'required',
            'website' => 'required',
            'job_title' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'business_type_id' => 'required',
        ]);

        $member->business_name = $request->business_name;
        $member->address = $request->address;
        $member->website = $request->website;
        $member->job_title = $request->job_title;
        $member->phone = $request->phone;
        $member->email = $request->email;
        $member->business_type_id = $request->business_type_id;
        $member->save();

        $user->name = $request->name;
        $user->save();

        return Redirect::route('member.assessment.start');
    }

    public function start()
    {
        return Inertia::render('Member/Assessment/Assessment');
    }
}
