<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/ProductCategory/Create', [
            'productCategory' => ProductCategory::all(),
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
        $productCategory = new ProductCategory;

        $request->validate([
            'name' => 'required',
        ]);

        $productCategory->name = $request->name;
        $productCategory->save();

        return Redirect::route('productCategory.index')->with('success', 'Product Category created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render('Admin/ProductCategory/Edit', [
            'productCategory' => ProductCategory::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       $productCategory = ProductCategory::find($request->id);

        $request->validate([
            'name' => 'required',
        ]);

        $productCategory->name = $request->name;
        $productCategory->save();

        return Redirect::route('productCategory.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $productCategory = ProductCategory::find($request->id);

        $productCategory->delete();

        return Redirect::route('productCategory.index');
    }
}
