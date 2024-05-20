<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Assessment;
use Illuminate\Http\Request;
use App\Models\MemberAssessment;

class PublicController extends Controller
{
    public function members() {
        $total = new \stdClass();

        $greenforce = Member::where('status', 'LIKE', '%active%')->where('program_id', '1')->count();        
        $greenpal = Member::where('status', 'LIKE', '%active%')->where('program_id', '2')->count();        
        $hotels = Member::where('status', 'LIKE', '%active%')->where('business_type_id', '1')->count();
        $restaurant = Member::where('status', 'LIKE', '%active%')->where('business_type_id', '3')->count();
        
        $total->greenforce = $greenforce;
        $total->greenpal = $greenpal;
        $total->hotels = $hotels;
        $total->restaurant = $restaurant;

        return response()->json($total, 200);
    }

    public function impacts() {
        $impacts = new \stdClass();
        $assessments = Assessment::select('id', 'title', 'business_type_id', 'logo')->with('business_type')->get();
        $memberAssess = MemberAssessment::with('member')->where('completion', 'yes')->get();

        $hotelsAvgs =  array();
        $restosAvgs =  array();
        foreach ($assessments as $assess) {
           if($assess->business_type->name === 'Hotel') {
                $hotels = array();
                $assessDatas = new \stdClass();
                foreach ($memberAssess as $memberAs) {
                    if ($assess->id === $memberAs->assessment_id && str_contains($memberAs->member->status, 'active') && !str_contains($memberAs->member->status, 'dummy')) {
                        array_push($hotels, $memberAs->score);
                    }
                }
                $avg = array_sum($hotels) / count($hotels);
                $assessDatas->avg = $avg;
                $assessDatas->title = $assess->title;
                $assessDatas->logo = $assess->logo;

                array_push($hotelsAvgs, $assessDatas);
           } else {
                $restos = array();
                $assessDatas = new \stdClass();
                foreach ($memberAssess as $memberAs) {
                    if ($assess->id === $memberAs->assessment_id && str_contains($memberAs->member->status, 'active') && !str_contains($memberAs->member->status, 'dummy')) {
                        array_push($restos, $memberAs->score);
                    }
                }
                $avg = array_sum($restos) / count($restos);
                $assessDatas->avg = $avg;
                $assessDatas->title = $assess->title;
                $assessDatas->logo = $assess->logo;

                array_push($restosAvgs, $assessDatas);
           }
        }

        $impacts->hotels = $hotelsAvgs;
        $impacts->restaurants = $restosAvgs;

        return response()->json($impacts, 200);
    }
}
