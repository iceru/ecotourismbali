<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AssessmentController;
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

Route::middleware(['auth', 'role:member'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/member/dashboard', function () {
        return Inertia::render('Member/MemberDashboard');
    })->name('member.dashboard');
});

Route::get('/assessment', [AssessmentController::class, 'index'])->name('assessment.index');
Route::post('/assessment', [AssessmentController::class, 'store'])->name('assessment.store');
Route::get('/assessment/{id}', [AssessmentController::class, 'edit'])->name('assessment.edit');
Route::patch('/assessment', [AssessmentController::class, 'update'])->name('assessment.update');
Route::delete('/assessment', [AssessmentController::class, 'destroy'])->name('assessment.destroy');
Route::middleware(['auth', 'role:administrator'])->group(function () {
    //
});

require __DIR__ . '/auth.php';
