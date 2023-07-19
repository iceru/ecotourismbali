<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Mail\NotifyPayment;
use App\Models\MemberSlider;
use Illuminate\Http\Request;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class MemberController extends Controller
{
    public function index()
    {
        $member = Member::where('user_id', Auth::id())->with('member_slider')->with('badge')->first();

        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        if($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $member->id)->where('assessment_session_id', $lastSession->id)->get();
        }
        return Inertia::render('Member/MemberDashboard', [
            'member' => $member,
            'user' => User::find(Auth::id()),
            'scores' => $memberAssessments,
            'lastSession' => $lastSession,
        ]);
    }
    
    public function store(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();

        $request->validate([
            'no_rooms' => 'nullable',
            'no_outlet' => 'nullable',
            'no_employees' => 'nullable',
            'total_payment' => 'required',
        ]);

        $member->no_rooms = $request->no_rooms;
        $member->no_outlets = $request->no_outlets;
        $member->no_employees = $request->no_employees;
        $member->total_payment = $request->total_payment;
        $member->status = 'waiting_approval';
        $member->save();

        return Redirect::route('member.dashboard');
        Mail::to('finance@ecotourismbali.com')->send(new NotifyPayment($member));
        // Mail::to('m.hafiz1825@gmail.com')->send(new NotifyPayment($member));

        return Redirect::route('member.dashboard')->with('success', 'Your notification to Administrator has been successfully delivered');
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
        $member = Member::where('user_id', Auth::id())->with('member_slider')->with('badge')->first();
        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        if($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $member->id)->where('assessment_session_id', $lastSession->id)->get();
        }

        return Inertia::render('Member/MemberProfile', [
            'member' => $member,
            'user' => User::find(Auth::id()),
            'scores' => $memberAssessments,
            'lastSession' => $lastSession,
        ]);
    }

    public function editProfile($id)
    {

        return Inertia::render('Member/MemberEditProfile', [
            'member' => Member::where('id', $id)->with('member_slider')->first(),
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
            'image' => 'nullable',
            'facebook' => 'nullable',
            'instagram' => 'nullable',
            'twitter' => 'nullable',
            'whatsapp' => 'nullable',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->business_name . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('public/member/images', $filename);
            $member->image = $filename;
        }


        if ($request->hasFile('sliders')) {
            foreach($request->file('sliders') as $file) {
                $sliderName = null;
                $extension = $file->extension();
                $sliderName = $request->business_name . '_' . time() . '.' . $extension;
                $file->storeAs('public/member/sliders', $sliderName);
    
                $slider = new MemberSlider;
                $slider->title = $sliderName;
                $slider->image = $sliderName;
                $slider->member_id = $id;
                $slider->save();
            }
            
        }

        $member->business_name = $request->business_name;
        $member->address = $request->address;
        $member->website = $request->website;
        $member->description = $request->description;
        $member->facebook = $request->facebook;
        $member->instagram = $request->instagram;
        $member->twitter = $request->twitter;
        $member->whatsapp = $request->whatsapp;
        $member->save();

        return Redirect::route('member.profile')->with('success', 'Profile updated successfully.');
    }

    public function notifyPayment()
    {
        $member = Member::where('user_id', Auth::id())->first();
    }
}
