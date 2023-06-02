<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberAssessment extends Controller
{
    public function index()
    {
        return Inertia::render('Member/Assessment/AssessmentData');
    }
}
