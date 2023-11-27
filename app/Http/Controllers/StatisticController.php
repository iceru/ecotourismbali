<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Badge;
use App\Models\Program;
use App\Models\Assessment;
use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use Illuminate\Support\Facades\DB;

class StatisticController extends Controller
{
    public function index()
    {
        // Highest Score
        $sessions = AssessmentSession::with('member')->orderBy('total_score', 'desc')->get();
        $sessionFilter = array();

        foreach ($sessions as $session) {
            if ($session->completion === 'yes') {
                array_push($sessionFilter, $session);
            }
        }

        // Badges
        $countBadges = DB::table('members')
            ->where('status', 'like', '%' . 'active' . '%')
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
        $assessments = Assessment::select('id', 'title', 'business_type_id', 'logo')->with('business_type')->get();
        $memberAssess = MemberAssessment::with('member')->where('completion', 'yes')->get();

        foreach ($assessments as $assess) {
            $members = array();
            foreach ($memberAssess as $memberAs) {
                if ($assess->id === $memberAs->assessment_id && str_contains($memberAs->member->status, 'active')) {
                    array_push($members, $memberAs);
                    $assess->members = $members;
                }
            }
        }
        return Inertia::render('Admin/Statistic/StatisticAssessment', [
            'assessments' => $assessments
        ]);
    }
}
