<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\AssessmentQuestionController;
use App\Http\Controllers\BusinessTypeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/member/locked', function () {
    return Inertia::render('Member/MemberDashboard');
})->name('member');

Route::middleware(['auth', 'role:member'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/member/dashboard', function () {
        return Inertia::render('Member/MemberDashboard');
    })->name('member.dashboard');
});

// route below this must be move into middleware auth with role:admin after we have user admin
Route::get('/assessment', [AssessmentController::class, 'index'])->name('assessment.index');
Route::post('/assessment/store', [AssessmentController::class, 'store'])->name('assessment.store');
Route::get('/assessment/edit/{id}', [AssessmentController::class, 'edit'])->name('assessment.edit');
Route::patch('/assessment/update/{id}', [AssessmentController::class, 'update'])->name('assessment.update');
Route::delete('/assessment/delete/{id}', [AssessmentController::class, 'destroy'])->name('assessment.destroy');

Route::get('/business-type', [BusinessTypeController::class, 'index'])->name('business_type.index');
Route::post('/business-type/store', [BusinessTypeController::class, 'store'])->name('business_type.store');
Route::get('/business-type/edit/{id}', [BusinessTypeController::class, 'edit'])->name('business_type.edit');
Route::patch('/business-type/update/{id}', [BusinessTypeController::class, 'update'])->name('business_type.update');
Route::delete('/business-type/delete/{id}', [BusinessTypeController::class, 'destroy'])->name('business_type.destroy');

Route::get('/assessment/{id}/question', [AssessmentQuestionController::class, 'index'])->name('assessment_question.index');
Route::post('/assessment/{id}/question/store', [AssessmentQuestionController::class, 'store'])->name('assessment_question.store');
Route::get('/assessment/question/edit/{id}', [AssessmentQuestionController::class, 'edit'])->name('assessment_question.edit');
Route::patch('/assessment/question/update/{id}', [AssessmentQuestionController::class, 'update'])->name('assessment_question.update');
Route::delete('/assessment/question/delete/{id}', [AssessmentQuestionController::class, 'destroy'])->name('assessment_question.destroy');
// route above this must be move into middleware auth with role:admin after we have user admin

Route::middleware(['auth', 'role:administrator'])->group(function () {
    //
});

require __DIR__ . '/auth.php';
