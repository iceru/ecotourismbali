<?php

namespace App\Http\Controllers;

use App\Mail\NotifyPayment;
use App\Models\Assessment;
use App\Models\AssessmentSession;
use App\Models\BusinessType;
use App\Models\Category;
use App\Models\Member;
use App\Models\MemberAssessment;
use App\Models\MemberAssessmentAnswer;
use App\Models\MemberPayment;
use App\Models\MemberSlider;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function index()
    {
        $member = Member::where('user_id', Auth::id())->with(['badge', 'business_type', 'member_slider', 'program'])->first();
        $business_type = BusinessType::all();
        $categories = Category::all();
        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        $dateAssessment = null;
        $assessments = Assessment::where('business_type_id', $member->business_type_id)->where('version', $member->version)
            ->get();
        // $answers = MemberAssessmentAnswer::where('assessment_session_id', $lastSession->id)->get();

        if ($lastSession) {
            $lastSession->load([
                'member_assessment_answer.assessment_question.assessment_option',
                'member_assessment_answer.assessment_option',
            ]);

            $memberAssessments = MemberAssessment::with('assessment')
                ->where('member_id', $member->id)
                ->where('assessment_session_id', $lastSession->id)->get();
            $dateAssessment = $lastSession->created_at->addYears(1);
        }

        return Inertia::render('Member/Dashboard/MemberDashboard', [
            'member' => $member,
            'user' => User::find(Auth::id()),
            'scores' => $memberAssessments,
            'lastSession' => $lastSession,
            'business_type' => $business_type,
            'expiredDate' => $dateAssessment,
            'categories' => $categories,
            'assessments' => $assessments,
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

        Mail::to('info@ecotourismbali.com')->send(new NotifyPayment($member));

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
        $member = Member::where('user_id', Auth::id())->with(['member_slider', 'program', 'category', 'badge', 'verified_badge'])->first();
        $lastSession = AssessmentSession::where('member_id', $member->id)->where('completion', 'yes')->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        $dateAssessment = null;

        if ($lastSession) {
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
            'categories' => Category::all(),
            'user' => User::find(Auth::id()),
        ]);
    }

    public function storeProfile(Request $request, $id)
    {
        $member = Member::where('id', $id)->first();

        $request->validate([
            'business_name' => 'nullable',
            'sliders' => 'nullable',
            'sliders.*' => 'file|max:2048', // Validate each file in sliders, max 1MB
            'address' => 'nullable',
            'website' => 'nullable',
            'description' => 'nullable',
            'image' => 'nullable|file|max:1024', // Validate image, max 1MB
            'facebook' => 'nullable',
            'instagram' => 'nullable',
            'twitter' => 'nullable',
            'whatsapp' => 'nullable',
            'merchant_promo' => 'nullable',
            'category' => 'nullable',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->business_name.'_'.time().'.'.$extension;
            $request->file('image')->storeAs('public/member/images', $filename);
            $member->image = $filename;
        }

        if ($request->hasFile('sliders')) {
            foreach ($request->file('sliders') as $file) {
                $sliderName = null;
                $name = $file->getClientOriginalName();
                $sliderName = $request->business_name.'_'.$name;
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
        $member->merchant_promo = $request->merchant_promo;
        $member->category_id = $request->category;
        $member->save();

        return Redirect::route('member.profile')->with('success', 'Profile updated successfully.');
    }

    public function deleteImage($id)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $slider = MemberSlider::find($id);
        if (Storage::disk('public')->exists('/member/sliders/'.$slider->image)) {
            Storage::disk('public')->delete('/member/sliders/'.$slider->image);
        }
        $slider->delete();

        return Redirect::route('member.profile.edit', $member->id)->with('success', 'Image deleted');
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
            'sliders' => 'required|max:2048',
            'address' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'description' => 'required',
            'image' => 'required',
            'province' => 'required',
            'city' => 'required',
            'category' => 'required',
            'website' => 'nullable',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $extension = $request->file('image')->extension();
            $filename = $request->business_name.'_'.time().'.'.$extension;
            $request->file('image')->storeAs('public/member/images', $filename);
            $member->image = $filename;
        }

        if ($request->hasFile('sliders')) {
            foreach ($request->file('sliders') as $file) {
                $sliderName = null;
                $name = $file->getClientOriginalName();
                $sliderName = $request->business_name.'_'.$name;
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
        $member->website = $request->website;
        $member->job_title = $request->job_title;
        $member->address = $request->address;
        $member->description = $request->description;
        $member->province = $request->province;
        $member->city = $request->city;
        $member->phone = $request->phone;
        $member->latitude = $request->latitude;
        $member->longitude = $request->longitude;
        $member->category_id = $request->category;
        $member->status = 'active';
        $member->save();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return Redirect::route('member.dashboard')->with('success', 'Data added successfully.');
    }

    public function updatePayment()
    {
        $member = Member::where('user_id', Auth::id())->first();
        $member->status = 'payment';
        $member->total_payment = 1000000;
        $member->save();

        $business_name = str_replace(' ', '_', $member->business_name);
        $timestamp = time();

        $payment = new MemberPayment;
        $payment->status_code = $business_name.'_'.$timestamp;
        $payment->payment_no = $business_name.'_'.$timestamp;
        $payment->invoice_item_text = 'Greenpal Payment';
        $payment->payment_status = 'pending';
        $payment->member_id = $member->id;
        $payment->save();

        return Redirect::route('member.dashboard')->with('success', 'Proceed to payment');
    }

    public function ngoApproval()
    {
        $member = Member::where('user_id', Auth::id())->first();
        $member->status = 'waiting_approval';
        $member->save();
    }
}
