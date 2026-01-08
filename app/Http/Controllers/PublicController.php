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

        // 1. Fetch assessments with business type
        $assessments = Assessment::select('id', 'title', 'business_type_id', 'logo', 'max_points')
            ->with(['business_type'])
            ->get();

        // 2. Fetch completed assessments and filter by member status in one go
        $memberAssess = MemberAssessment::with('member')
            ->where('completion', 'yes')
            ->get()
            ->filter(function ($ma) {
                // Ensure member exists and check for active/dummy status
                $status = optional($ma->member)->status ?? '';
                return str_contains($status, 'active') && !str_contains($status, 'dummy');
            });

        $hotelsAvgs = [];
        $restosAvgs = [];

        foreach ($assessments as $assess) {
            // 3. Get all scores for this specific assessment
            $scores = $memberAssess->where('assessment_id', $assess->id)->pluck('score');

            $count = $scores->count();

            /** * 4. Safety Guard: Check if max_points is a valid numeric string/int 
             * and ensure count is greater than zero to avoid Division by Zero.
             */
            $maxPoints = is_numeric($assess->max_points) ? (float) $assess->max_points : 0;

            $avg = 0;
            if ($count > 0 && $maxPoints > 0) {
                // Formula: ((Sum / Count) * 100) / Max
                $avg = (($scores->sum() / $count) * 100) / $maxPoints;
            }

            // 5. Prepare the data object
            $assessDatas = new \stdClass();
            $assessDatas->avg = (int) round($avg); // Rounding ensures 75.8 becomes 76 instead of 75
            $assessDatas->title = $assess->title;
            $assessDatas->logo = $assess->logo;

            // 6. Sort into Hotels or Restaurants
            $typeName = optional($assess->business_type)->name;
            if ($typeName === 'Hotel') {
                $hotelsAvgs[] = $assessDatas;
            } else {
                // Defaults to restaurants if not 'Hotel'
                $restosAvgs[] = $assessDatas;
            }
        }

        $impacts->hotels = $hotelsAvgs;
        $impacts->restaurants = $restosAvgs;

        return response()->json($impacts, 200);
    }
}
