<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Program;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\MemberPayment;
use App\Models\VerifiedBadge;
use App\Mail\MemberPaymentMail;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use PDF;
use App\Models\MemberSlider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AdminMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::with('user.roles', 'category', 'program', 'verified_badge', 'badge', 'member_assessment', 'business_type')
            ->get()
            ->map(function ($member) {
                $isAdminUser = $member->user && ($member->user->hasRole('administrator') || $member->user->hasRole('superadministrator'));
                $member->can_delete = !$isAdminUser;
                return $member;
            });

        return Inertia::render('Admin/Member/MemberIndex', [
            'members' => $members,
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function search(Request $request)
    {
        $members = Member::with('user.roles', 'category', 'program', 'verified_badge', 'badge', 'member_assessment', 'business_type')
            ->where('business_name', 'like', "%$request->search%")
            ->get()
            ->map(function ($member) {
                $isAdminUser = $member->user && ($member->user->hasRole('administrator') || $member->user->hasRole('superadministrator'));
                $member->can_delete = !$isAdminUser;
                return $member;
            });

        return Inertia::render('Admin/Member/MemberIndex', [
            'members' => $members,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $member = Member::with('user', 'category', 'program', 'verified_badge', 'badge', 'product_category', 'member_assessment', 'business_type', 'member_slider')->find($id);
        $sessions = AssessmentSession::where('member_id', $id)->get();

        $attempt = 0;
        $dateAssessment = null;
        foreach ($sessions as $session) {
            if ($session->completion === 'yes' && $session->total_score > 0) {
                $attempt = $attempt + 1;
            }
        }

        $remaining = 2 - $attempt;

        $lastSession = AssessmentSession::where('member_id', $id)->orderBy('created_at', 'desc')->first();
        $memberAssessments = null;
        $dateAssessment = null;
        if ($lastSession) {
            $memberAssessments = MemberAssessment::with('assessment')->where('member_id', $id)->where('assessment_session_id', $lastSession->id)->get();
            $dateAssessment = $lastSession->created_at->addYears(1);
        }

        $lastPayment = MemberPayment::where('member_id', $id)->where('status_code', '!=', '')->orderBy('created_at', 'desc')->first();
        return Inertia::render('Admin/Member/MemberDetail', [
            'member' => $member,
            'categories' => Category::all(),
            'programs' => Program::all(),
            'verified_badges' => VerifiedBadge::all(),
            'product_categories' => ProductCategory::all(),
            'remaining' => $remaining,
            'dateAssessment' => $dateAssessment,
            'scores' => $memberAssessments,
            'lastSession' => $lastSession,
            'lastPayment' => $lastPayment,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'category' => 'nullable',
            'program' => 'nullable',
            'verified_badge' => 'nullable',
            'total_payment' => 'nullable',
            'status' => 'nullable',
            'invoice_no' => 'nullable',
            'invoice_item_text' => 'nullable',
            'expired_verified' => 'nullable',
            'badge_certificate' => 'nullable',
            'latitude' => 'nullable',
            'longitude' => 'nullable',
            'version' => 'nullable|in:1,2',
            'product_category_id' => 'nullable',
            'image' => 'nullable|file|image|max:1024',
            'description' => 'nullable|string',
        ]);

        $member = Member::findOrFail($id);
        $payment = MemberPayment::firstOrNew(['status_code' => $request->invoice_no]);

        $member->category_id = $request->category;
        $member->program_id = $request->program;
        $member->verified_badge_id = $request->verified_badge;
        $member->total_payment = $request->total_payment;
        $member->expired_verified = $request->expired_verified;
        $member->badge_certificate = $request->badge_certificate;
        $member->latitude = $request->latitude;
        $member->longitude = $request->longitude;
        if (!is_null($request->version) && $request->version !== '') {
            $member->version = (int) $request->version;
        }
        $member->product_category_id = $request->product_category_id;

        // handle image upload if provided
        if ($request->hasFile('image')) {
            // delete old image if exists
            if ($member->image && Storage::disk('public')->exists('member/images/' . $member->image)) {
                Storage::disk('public')->delete('member/images/' . $member->image);
            }

            $extension = $request->file('image')->extension();
            $filename = ($member->business_name ?: 'member') . '_' . time() . '.' . $extension;
            $request->file('image')->storeAs('member/images', $filename, 'public');
            $member->image = $filename;
        }

        // description
        $member->description = $request->description;

        if ($member->status) {
            $member->status = $request->status;
        }
        $member->save();

        $payment->status_code = $request->invoice_no;
        $payment->payment_no = $request->invoice_no || '-';
        $payment->invoice_item_text = $request->invoice_item_text;
        $payment->payment_status = 'pending';
        $payment->member_id = $id;
        $payment->save();

        if ($request->status === 'payment') {
            Mail::to($member->user->email)->send(new MemberPaymentMail($payment));
        }

        return Redirect::route('admin.member.detail', $member->id);
    }

    public function invoice(Request $request, string $id)
    {
        $payment = MemberPayment::where('member_id', $id)->first();

        // If no payment record exists, create a dummy object to pass to the view
        if (!$payment) {
            $member = Member::findOrFail($id);
            
            // We use (object) to create a generic class so the view doesn't break
            $payment = (object) [
                'member'            => $member,
                'status_code'       => '-',
                'created_at'        => $member->created_at,
                'invoice_item_text' => 'Membership Payment',
            ];
        }

        $data = [
            'payment' => $payment
        ];

        $pdf = PDF::loadView('invoice-pdf', $data);
        
        // Using optional() or null coalescing prevents errors if name is missing
        $filename = 'invoice ' . ($payment->member->name ?? 'Customer') . '.pdf';
        
        return $pdf->stream($filename);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $member = Member::with('user')->findOrFail($id);

        if ($member->user && ($member->user->hasRole('administrator') || $member->user->hasRole('superadministrator'))) {
            abort(403);
        }

        DB::transaction(function () use ($member) {
            $member->delete();

            if ($member->user) {
                $member->user->delete();
            }
        });

        return Redirect::route('admin.member.index');
    }

    /**
     * Display page for member import
     */
    public function import()
    {
        return Inertia::render('Admin/Member/Import', [
            'members' => Member::with('user', 'category', 'program', 'verified_badge', 'badge', 'member_assessment', 'business_type')->
                where('program_id', 2)->get(),
        ]);
    }

    public function uploadSlider(Request $request, $id)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|string|max:255',
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->storeAs('member/sliders', $imageName, 'public');

        $slider = new MemberSlider();
        $slider->member_id = $id;
        $slider->title = $request->title;
        $slider->image = $imageName;
        $slider->save();

        return Redirect::route('admin.member.detail', $id);
    }

    public function deleteSlider($id)
    {
        $slider = MemberSlider::find($id);
        $memberId = $slider->member_id;
        if (Storage::disk('public')->exists('member/sliders/' . $slider->image)) {
            Storage::disk('public')->delete('member/sliders/' . $slider->image);
        }
        $slider->delete();

        return Redirect::route('admin.member.detail', $memberId);
    }
}
