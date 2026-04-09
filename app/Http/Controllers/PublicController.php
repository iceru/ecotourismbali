<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Assessment;
use Illuminate\Http\Request;
use App\Models\MemberAssessment;

class PublicController extends Controller
{
    public function members()
    {
        $total = new \stdClass();

        $greenforce = Member::where('status', 'LIKE', '%active%')->where('status', 'not like', "%dummy%")->where('program_id', '1')->count();
        $greenpal = Member::where('status', 'LIKE', '%active%')->where('status', 'not like', "%dummy%")->where('program_id', '2')->count();
        $hotels = Member::where('status', 'LIKE', '%active%')->where('status', 'not like', "%dummy%")->where('business_type_id', '1')->count();
        $restaurant = Member::where('status', 'LIKE', '%active%')->where('status', 'not like', "%dummy%")->where('business_type_id', '3')->count();

        $total->greenforce = $greenforce;
        $total->greenpal = $greenpal;
        $total->hotels = $hotels;
        $total->restaurant = $restaurant;

        return response()->json($total, 200);
    }

    public function activeMembers()
    {
        $members = Member::where('status', 'LIKE', '%active%')
            ->where('status', 'not like', "%dummy%")
            ->select(['business_name', 'longitude', 'latitude', 'image', 'description'])->get();
        return response()->json($members, 200);
    }

    public function impacts()
    {
        $impacts = new \stdClass();

        // 1. Fetch assessments, ensuring we check the business_type relation
        $assessments = Assessment::select('id', 'title', 'business_type_id', 'logo', 'max_points', 'version')
            ->with(['business_type'])
            ->get();

        $memberAssess = MemberAssessment::with('member')
            ->where('completion', 'yes')
            ->get()
            ->filter(function ($ma) {
                $status = optional($ma->member)->status ?? '';
                return str_contains($status, 'active') && !str_contains($status, 'dummy');
            });

        $hotelsAvgs = [];
        $restosAvgs = [];

        foreach ($assessments as $assess) {
            $typeName = optional($assess->business_type)->name;
            if ($typeName === 'Supplier') {
                continue;
            }
            if ($typeName === 'Hotel' && (int) $assess->version !== 2) {
                continue; // Skip this iteration
            }

            // 2. Calculate average (with safety guards)
            $scores = $memberAssess->where('assessment_id', $assess->id)->pluck('score');
            $count = $scores->count();
            $maxPoints = is_numeric($assess->max_points) ? (float) $assess->max_points : 0;

            $avg = 0;
            if ($count > 0 && $maxPoints > 0) {
                $avg = (($scores->sum() / $count) * 100) / $maxPoints;
            }

            $assessDatas = new \stdClass();
            $assessDatas->avg = (int) round($avg);
            $assessDatas->title = $assess->title;
            $assessDatas->logo = $assess->logo;

            // 3. Sort into result arrays
            if ($typeName === 'Hotel') {
                $hotelsAvgs[] = $assessDatas;
            } else {
                $restosAvgs[] = $assessDatas;
            }
        }

        $impacts->hotels = $hotelsAvgs;
        $impacts->restaurants = $restosAvgs;

        return response()->json($impacts, 200);
    }
}
