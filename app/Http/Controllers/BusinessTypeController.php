<?php

namespace App\Http\Controllers;

use App\Models\BusinessType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BusinessTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/BusinessType/CreateBusinessType', [
            'business_type' => BusinessType::all(),
        ]);
    }

    public function store(Request $request)
    {
        $business_type = new BusinessType;

        $request->validate([
            'name' => 'required',
        ]);

        $business_type->name = $request->name;
        $business_type->save();

        return Redirect::route('business_type.index');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/BusinessType/EditBusinessType', [
            'business_type' => BusinessType::find($id),
        ]);
    }

    public function update(Request $request)
    {
        $business_type = BusinessType::find($request->id);

        $request->validate([
            'name' => 'required',
        ]);

        $business_type->name = $request->name;
        $business_type->save();

        return Redirect::route('business_type.index');
    }

    public function destroy(Request $request)
    {
        $business_type = BusinessType::find($request->id);
        $business_type->delete();

        return Redirect::route('business_type.index');
    }
}
