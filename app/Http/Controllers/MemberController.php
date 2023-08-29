<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Mail\NotifyPayment;
use App\Models\BusinessType;
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
        $member = Member::where('user_id', Auth::id())->with(['badge', 'business_type', 'member_slider', 'program'])->first();
        $business_type = BusinessType::all();

        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        $dateAssessment = null;

        if($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $member->id)->where('assessment_session_id', $lastSession->id)->get();
            $dateAssessment = $lastSession->created_at->addYears(1);
        }
        
        return Inertia::render('Member/Dashboard/MemberDashboard', [
            'member' => $member,
            'user' => User::find(Auth::id()),
            'scores' => $memberAssessments,
            'lastSession' => $lastSession,
            'business_type' => $business_type,
            'expiredDate' => $dateAssessment,
        ]);
    }
    
    public function store(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();

        $request->validate([
            'no_rooms' => 'nullable',
            'no_outlet' => 'nullable',
            'no_employees' => 'nullable',
            'business_type_id' => 'required',
            'total_payment' => 'required',
            'city' => 'required',
            'province' => 'required',
        ]);

        $member->no_rooms = $request->no_rooms;
        $member->no_outlets = $request->no_outlets;
        $member->no_employees = $request->no_employees;
        $member->city = $request->city;
        $member->province = $request->province;
        $member->total_payment = $request->total_payment;
        $member->business_type_id = $request->business_type_id;
        $member->status = 'waiting_approval';
        $member->save();

        // Mail::to('finance@ecotourismbali.com')->send(new NotifyPayment($member));
        Mail::to('m.hafiz1825@gmail.com')->send(new NotifyPayment($member));

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
        $member = Member::where('user_id', Auth::id())->with(['member_slider', 'program', 'category', 'badge'])->first();
        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        $dateAssessment = null;

        if($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $member->id)->where('assessment_session_id', $lastSession->id)->get();
            $dateAssessment = $lastSession->created_at->addYears(1);
        }

        return Inertia::render('Member/MemberProfile', [
            'member' => $member,
            'user' => User::find(Auth::id()),
            'scores' => $memberAssessments,
            'lastSession' => $lastSession,
            'expiredDate' => $dateAssessment,
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
                $name = $file->getClientOriginalName();
                $sliderName = $request->business_name . '_' . $name;
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

    public function greenpal(Request $request)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $user = User::where('id', Auth::id())->first();

        $request->validate([
            'business_name' => 'required',
            'name' => 'required',
            'company_name' => 'required',
            'job_title' => 'required',
            'sliders' => 'required',
            'address' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'description' => 'required',
            'image' => 'required',
            'province' => 'required',
            'city' => 'required',
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
                $name = $file->getClientOriginalName();
                $sliderName = $request->business_name . '_' . $name;
                $file->storeAs('public/member/sliders', $sliderName);
    
                $slider = new MemberSlider;
                $slider->title = $sliderName;
                $slider->image = $sliderName;
                $slider->member_id = $member->id;
                $slider->save();
            }
            
        }

        $member->business_name = $request->business_name;
        $member->company_name = $request->company_name;
        $member->job_title = $request->job_title;
        $member->address = $request->address;
        $member->description = $request->description;
        $member->province = $request->province;
        $member->city = $request->province;
        $member->status = 'active';
        $member->save();

        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return Redirect::route('member.dashboard')->with('success', 'Data added successfully.');
    }
}
