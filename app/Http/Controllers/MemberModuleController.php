<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Models\Module;
use App\Models\MemberModule;
use Illuminate\Http\Request;
use App\Models\PreTestQuestion;
use App\Models\PostTestQuestion;
use App\Models\PreTestModuleAnswer;
use App\Models\PostTestModuleAnswer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class MemberModuleController extends Controller
{
    public function index()
    {
        $member = Member::where('user_id', Auth::id())->first();
        $modules = Module::with('member_module')->get();
        $memberModule = MemberModule::where('member_id', $member->id)->get();

        if($member->status !== 'active') {
            $modules = Module::with('member_module')->take(1)->get();
        }
        return Inertia::render('Member/Module/ModuleList', [
            'modules' => $modules,
            'member' => $member,
            'memberModule' => $memberModule,
        ]);
    }

    public function detail($id)
    {
        $member = Member::where('user_id', Auth::id())->first();
        $memberModule = MemberModule::where('member_id', $member->id)->get();

        return Inertia::render('Member/Module/ModuleDetail', [
            'module' => Module::where('id', $id)->firstOrFail(),
            'memberModule' => $memberModule,
        ]);
    }

    public function result($id)
    {
        $member = Member::where('user_id', Auth::id())->first();
        
        $preQuestions = PreTestQuestion::with('pre_test_option')->get();
        $prePoint = 100 / $preQuestions->count();
        $totalPrePoint = 0;
        
        $preAnswers = PreTestModuleAnswer::where('member_id', $member->id)->get();
        
        foreach ($preAnswers as $answer) {
            foreach ($preQuestions as $question) {
                if ($answer->pre_test_question_id === $question->id) {
                    foreach ($question->pre_test_option as $option) {
                        if ($answer->pre_test_option_id === $option->id && $option->answer === 'yes') {
                            $totalPrePoint += $prePoint;
                        }
                    }
                }
            }
        }

        $postQuestions = PostTestQuestion::with('post_test_option')->get();
        $postPoint = 100 / $postQuestions->count();
        $totalPostPoint = 0;
        
        $postAnswers = PostTestModuleAnswer::where('member_id', $member->id)->get();

        foreach ($postAnswers as $answer) {
            foreach ($postQuestions as $question) {
                if ($answer->post_test_question_id === $question->id) {
                    foreach ($question->post_test_option as $option) {
                        if ($answer->post_test_option_id === $option->id && $option->answer === 'yes') {
                            $totalPostPoint += $postPoint;
                        }
                    }
                }
            }
        }

        $memberModule = MemberModule::firstOrNew([
            'member_id' => $member->id,
            'module_id' => $id
        ]);
        
        $memberModule->completion = 1;
        $memberModule->score_pre_test = $totalPrePoint;
        $memberModule->score_post_test = $totalPostPoint;
        $memberModule->member_id = $member->id;
        $memberModule->module_id = $id;
        $memberModule->save();

        return Inertia::render('Member/Module/ModuleResult', [
            'totalPostPoint' => $totalPostPoint,
            'totalPrePoint' => $totalPrePoint,
            'memberModule' => $memberModule,
        ]);
    }
}