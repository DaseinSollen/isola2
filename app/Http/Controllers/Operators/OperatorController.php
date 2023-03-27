<?php

namespace App\Http\Controllers\Operators;

use App\Http\Controllers\Controller;
use App\Models\Operator;
use Illuminate\Http\Request;

class OperatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return "Operator page";
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Operator $operator)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Operator $operator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Operator $operator)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Operator $operator)
    {
        //
    }
}
