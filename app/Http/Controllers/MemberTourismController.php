<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\MemberTourism;
use App\Imports\MembersImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreMemberTourismRequest;
use App\Http\Requests\UpdateMemberTourismRequest;

class MemberTourismController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/MemberTourism/Index', [
            'members' => MemberTourism::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx',
        ]);


        Excel::import(new MembersImport, $request->file('file'));
        
        return redirect()->back()->with('success', 'Members imported successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMemberTourismRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(MemberTourism $memberTourism)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Admin/MemberTourism/Edit', [
            'member' => MemberTourism::where('id', $id)->firstOrFail(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'category' => 'nullable',
            'name' => 'nullable',
            'business_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'member_only' => 'nullable',
        ]);

        $member = MemberTourism::find($request->id);

        $member->category = $request->category;
        $member->name = $request->name;
        $member->business_name = $request->business_name;
        $member->email = $request->email;
        $member->phone = $request->phone;
        $member->member_only = $request->member_only;
        $member->slug = Str::slug($request->business_name);

        $member->save();

        return Redirect::route('admin.member_tourism.index')->with('success', 'Member edited successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $category = MemberTourism::find($request->id);

        $category->delete();

        return Redirect::route('admin.member_tourism.index');
    }

}
