<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Module;
use App\Models\MemberModule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class MemberModuleController extends Controller
{
    public function index()
    {
        return Inertia::render('Member/Module/ModuleList', [
            'modules' => Module::all(),
        ]);
    }

    public function detail($id)
    {
        return Inertia::render('Member/Module/ModuleDetail', [
            'module' => Module::where('id', $id)->firstOrFail(),
        ]);
    }
    
    public function store(Request $request)
    {
        $member_module = new MemberModule;

        $request->validate([
            'completion' => 'required',
            'score_pre_test' => 'required|integer',
            'score_post_test' => 'required|integer',
            'member_id' => 'required',
            'module_id' => 'required',
        ]);

        $member_module->completion = $request->completion;
        $member_module->score_pre_test = $request->score_pre_test;
        $member_module->score_post_test = $request->score_post_test;
        $member_module->member_id = $request->member_id;
        $member_module->module_id = $request->module_id;
        $member_module->save();

        return Redirect::route('member_module.index')->with('success', 'Member module created successfully.');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/MemberModule/EditMemberModule', [
            'member_module' => MemberModule::find($id),
        ]);
    }
    
    public function update(Request $request)
    {
        $member_module = MemberModule::find($request->id);

        $request->validate([
            'completion' => 'required',
            'score_pre_test' => 'required|integer',
            'score_post_test' => 'required|integer',
            'member_id' => 'required',
            'module_id' => 'required',
        ]);

        $member_module->completion = $request->completion;
        $member_module->score_pre_test = $request->score_pre_test;
        $member_module->score_post_test = $request->score_post_test;
        $member_module->member_id = $request->member_id;
        $member_module->module_id = $request->module_id;
        $member_module->save();

        return Redirect::route('member_module.index');
    }

    public function destroy(Request $request)
    {
        $member_module = MemberModule::find($request->id);

        $member_module->delete();

        return Redirect::route('member_module.index');
    }
}