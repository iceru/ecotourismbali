<?php

namespace App\Http\Controllers;

use App\Exports\MemberAssessmentsExport;
use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Member;
use App\Models\Program;
use App\Models\Assessment;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\MemberAssessmentAnswer;

class StatisticController extends Controller
{
    public function index()
    {
        // Highest Score (only completed sessions with valid ECB version)
        $sessionFilter = AssessmentSession::with('member')
            ->whereIn('completion', ['yes', 'expired'])
            ->get();

        // Badges
        $countBadges = DB::table('members')
            ->where('status', 'like', '%' . 'active' . '%')
            ->where('status', 'not like', '%' . 'dummy' . '%')
            ->select('badge_id', DB::raw('count(*) as total'))
            ->groupBy('badge_id')
            ->get();
        $badges = Badge::all();

        $memberBadges = array();

        foreach ($countBadges as $count) {
            foreach ($badges as $badge) {
                if ($count->badge_id === $badge->id) {
                    $count->name = $badge->name;
                    $count->image = $badge->image;
                    if (!in_array($count, $memberBadges, true)) {
                        array_push($memberBadges, $count);
                    }
                }
            }
            if (!$count->badge_id) {
                array_push($memberBadges, $count);
            }
        }

        // Program
        $countProgram = DB::table('members')
            ->where('status', 'like', '%' . 'active' . '%')
            ->where('status', 'not like', '%' . 'dummy' . '%')
            ->select('program_id', DB::raw('count(*) as total'))
            ->groupBy('program_id')
            ->get();
        $programs = Program::all();

        $memberPrograms = array();

        foreach ($countProgram as $count) {
            foreach ($programs as $program) {
                if ($count->program_id === $program->id) {
                    $count->name = $program->name;
                    $count->image = $program->image;
                    if (!in_array($count, $memberPrograms, true)) {
                        array_push($memberPrograms, $count);
                    }
                }
            }
        }
        return Inertia::render('Admin/Statistic/Statistic', [
            'sessions' => $sessionFilter,
            'badges' => $memberBadges,
            'programs' => $memberPrograms,
        ]);
    }

    public function assessment()
    {
        $assessments = Assessment::select('id', 'title', 'business_type_id', 'logo', 'version')->with('business_type')->get();
        $memberAssess = MemberAssessment::with('member')
            ->whereIn('completion', ['yes', 'expired'])
            ->get();

        foreach ($assessments as $assess) {
            $members = array();
            foreach ($memberAssess as $memberAs) {
                if (
                    (int) $assess->id === (int) $memberAs->assessment_id &&
                    (
                        (int) $assess->business_type_id !== 1 ||
                        (int) ($memberAs->member->version ?? 1) === (int) $assess->version
                    ) &&
                    str_contains($memberAs->member->status, 'active') &&
                    !str_contains($memberAs->member->status, 'dummy')
                ) {
                    array_push($members, $memberAs);
                    $assess->members = $members;
                }
            }
        }
        return Inertia::render('Admin/Statistic/StatisticAssessment', [
            'assessments' => $assessments
        ]);
    }

    public function assessmentDetail($id, $sessionId)
    {
        $member = Member::where('id', $id)->first();
        $assessments = Assessment::with('assessment_question')->where('business_type_id', $member->business_type_id)
            ->when((int) $member->business_type_id === 1, function ($query) use ($member) {
                $query->where('version', $member->version ?? 1);
            })
            ->get();
        $session = AssessmentSession::where('id', $sessionId)->first();
        $answers = MemberAssessmentAnswer::where(['member_id' => $member->id, 'assessment_session_id' => $session->id])->with('assessment_question')->get();
        return Inertia::render('Admin/Statistic/AssessmentDetail', [
            'assessments' => $assessments,
            'member' => $member,
            'session' => $session,
            'answers' => $answers
        ]);
    }

    public function assessmentExport($id, $sessionId)
    {
        $member = Member::where('id', $id)->first();
        $assessments = Assessment::with('assessment_question')
            ->where('business_type_id', $member->business_type_id)
            ->when((int) $member->business_type_id === 1, function ($query) use ($member) {
                $query->where('version', $member->version ?? 1);
            })
            ->get();
        $session = AssessmentSession::where('id', $sessionId)->first();
        $answers = MemberAssessmentAnswer::where(column: ['member_id' => $member->id, 'assessment_session_id' => $sessionId])->with('assessment_question')->get();

        return Excel::download(new MemberAssessmentsExport($id, $sessionId), $member->business_name . '-assessments.xlsx');
    }
}
