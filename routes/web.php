<?php

use Inertia\Inertia;
use App\Models\MemberPayment;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BadgeController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\SourceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\MemberListController;
use App\Http\Controllers\AdminMemberController;
use App\Http\Controllers\ForumThreadController;
use App\Http\Controllers\AdminPaymentController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\BusinessTypeController;
use App\Http\Controllers\ForumCommentController;
use App\Http\Controllers\MemberModuleController;
use App\Http\Controllers\MemberPaymentController;
use App\Http\Controllers\MemberTourismController;
use App\Http\Controllers\PreTestOptionController;
use App\Http\Controllers\VerifiedBadgeController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\PostTestOptionController;
use App\Http\Controllers\PreTestQuestionController;
use App\Http\Controllers\AssessmentOptionController;
use App\Http\Controllers\MemberAssessmentController;
use App\Http\Controllers\PostTestQuestionController;
use App\Http\Controllers\AssessmentQuestionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\PreTestModuleAnswerController;
use App\Http\Controllers\PostTestModuleAnswerController;

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

Route::get('/booking', function () {
    return Inertia::render('Booking/Products', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/validate/sender', function() {
    $response = Http::withBasicAuth(env('MAILJET_APIKEY'), env('MAILJET_APISECRET'))
               ->post('https://api.mailjet.com/v3/REST/sender', [
                   'Email' => 'program@ecotourismbali.com',
                   'Name' => 'Eco Tourism Bali',
                   'EmailType' => 'transactional'
               ]);
    if ($response->successful()) {
        return $response;
    }

    return 'Failed to send verification email';
});

Route::get('/directory', [MemberListController::class, 'index'])->name('member.list');
Route::get('/directory/member/{slug}', [MemberListController::class, 'detail'])->name('member.detail');
Route::get('/directory/member-tourism/{slug}', [MemberListController::class, 'detailTourism'])->name('member.detail.tourism');
Route::post('/directory', [MemberListController::class, 'filter'])->name('member.filter');
Route::get('/donation', [DonationController::class, 'index'])->name('donation.index');
Route::post('/donation/store', [DonationController::class, 'store'])->name('donation.store');
Route::post('/donation/pay', [DonationController::class, 'pay'])->name('donation.pay');
Route::get('/donation/success', [DonationController::class, 'success'])->name('donation.success');

Route::post('/member-payment/notif-handler', [MemberPaymentController::class, 'notif_handler'])->name('member_payment.notif_handler');

Route::middleware(['auth', 'verified', 'role:member|administrator|superadministrator|finance'])->group(function () {
    Route::get('/member/forum', [ForumThreadController::class, 'index'])->name('member.forum.index');
    Route::get('/member/forum/thread/create', [ForumThreadController::class, 'create'])->name('member.forum.thread.create');
    Route::post('/member/forum/thread/store', [ForumThreadController::class, 'store'])->name('member.forum.thread.store');
    Route::post('/member/forum/thread/download', [ForumThreadController::class, 'download'])->name('member.forum.thread.download');
    Route::get('/member/forum/thread/show/{id}', [ForumThreadController::class, 'show'])->name('member.forum.thread.show');
    Route::get('/member/forum/thread/{id}/edit', [ForumThreadController::class, 'edit'])->name('member.forum.thread.edit');
    Route::post('/member/forum/thread/{id}/update', [ForumThreadController::class, 'update'])->name('member.forum.thread.update');
    Route::post('/member/forum/thread/delete', [ForumThreadController::class, 'destroy'])->name('member.forum.thread.destroy');

    Route::post('/member/forum/comment/store', [ForumCommentController::class, 'store'])->name('member.forum.comment.store');
    Route::get('/member/forum/comment/{id}/edit', [ForumCommentController::class, 'edit'])->name('member.forum.comment.edit');
    Route::post('/member/forum/comment/{id}/update', [ForumCommentController::class, 'update'])->name('member.forum.comment.update');
    Route::post('/member/forum/comment/{id}/delete', [ForumCommentController::class, 'destroy'])->name('member.forum.comment.destroy');
});

Route::middleware(['auth', 'verified', 'role:member'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/member/dashboard', [MemberController::class, 'index'])->name('member.dashboard');
    Route::post('/member/dashboard/store', [MemberController::class, 'store'])->name('member.store');
    Route::post('/member/notifPayment', [MemberController::class, 'notifyPayment'])->name('member.notifyPayment');
    // Route::get('/member/locked', [MemberController::class, 'locked'])->name('member.locked');
    Route::get('/member/profile', [MemberController::class, 'profile'])->name('member.profile');
    Route::get('/member/profile/edit/{id}', [MemberController::class, 'editProfile'])->name('member.profile.edit');
    Route::post('/member/profile/delete/image/{id}', [MemberController::class, 'deleteImage'])->name('member.profile.deleteImage');
    Route::post('/member/profile/store/{id}', [MemberController::class, 'storeProfile'])->name('member.profile.store');
    Route::post('/member/greenpal/store', [MemberController::class, 'greenpal'])->name('member.greenpal.store');

    Route::get('/member/assessment/tutorial', [MemberAssessmentController::class, 'tutorial'])->name('member.assessment.index');
    Route::get('/member/assessment', [MemberAssessmentController::class, 'index'])->name('member.assessment.data');
    Route::get('/member/assessment/result/{id}', [MemberAssessmentController::class, 'result'])->name('member.assessment.result');
    Route::get('/member/assessment/start/{id}', [MemberAssessmentController::class, 'start'])->name('member.assessment.start');
    Route::post('/member/assessment/store', [MemberAssessmentController::class, 'store'])->name('member.assessment.store');
    Route::post('/member/assessment/save', [MemberAssessmentController::class, 'save'])->name('member.assessment.save');
    Route::post('/member/assessment/complete/{id}', [MemberAssessmentController::class, 'complete'])->name('member.assessment.complete');
    Route::get('/member/assessment/verify-email/{id}', [MemberAssessmentController::class, 'verifyEmail'])->name('member.assessment.verifyEmail');

    Route::get('/member/module', [MemberModuleController::class, 'index'])->name('member.module.index');
    Route::get('/member/module/{id}', [MemberModuleController::class, 'detail'])->name('member.module.detail');
    Route::get('/member/module/{id}/result', [MemberModuleController::class, 'result'])->name('member.module.result');
    Route::get('/member/module/{id}/post-test', [PostTestModuleAnswerController::class, 'index'])->name('member.module.post-test');
    Route::get('/member/module/{id}/pre-test', [PreTestModuleAnswerController::class, 'index'])->name('member.module.pre-test');

    Route::post('/member/module/pre-test/store', [PreTestModuleAnswerController::class, 'store'])->name('member.pre-test.store');
    Route::post('/member/module/post-test/store', [PostTestModuleAnswerController::class, 'store'])->name('member.post-test.store');

    Route::post('/member-payment/new-payment', [MemberPaymentController::class, 'new_payment'])->name('member_payment.new_payment');
    Route::get('/member-payment/finish', [MemberPaymentController::class, 'finish'])->name('member_payment.finish');
    Route::get('/member-payment/unfinish', [MemberPaymentController::class, 'unfinish'])->name('member_payment.unfinish');
    Route::get('/member-payment/error', [MemberPaymentController::class, 'error'])->name('member_payment.error');
});

Route::middleware(['auth', 'role:superadministrator'])->prefix('admin')->group(function () {
    Route::get('/register', [RegisteredUserController::class, 'createAdmin'])->name('register.admin');
    Route::post('/register/store', [RegisteredUserController::class, 'storeAdmin'])->name('register.admin.store');

    Route::get('/assessment', [AssessmentController::class, 'index'])->name('assessment.index');
    Route::post('/assessment/store', [AssessmentController::class, 'store'])->name('assessment.store');
    Route::get('/assessment/edit/{id}', [AssessmentController::class, 'edit'])->name('assessment.edit');
    Route::post('/assessment/update/{id}', [AssessmentController::class, 'update'])->name('assessment.update');
    Route::delete('/assessment/delete/{id}', [AssessmentController::class, 'destroy'])->name('assessment.destroy');

    Route::get('/assessment/{id}/question', [AssessmentQuestionController::class, 'index'])->name('assessment_question.index');
    Route::post('/assessment/{id}/question/store', [AssessmentQuestionController::class, 'store'])->name('assessment_question.store');
    Route::get('/assessment/question/edit/{id}', [AssessmentQuestionController::class, 'edit'])->name('assessment_question.edit');
    Route::post('/assessment/question/update/{id}', [AssessmentQuestionController::class, 'update'])->name('assessment_question.update');
    Route::delete('/assessment/question/delete/{id}', [AssessmentQuestionController::class, 'destroy'])->name('assessment_question.destroy');

    Route::get('/assessment/{id}/option', [AssessmentOptionController::class, 'index'])->name('assessment_option.index');
    Route::post('/assessment/{id}/option/store', [AssessmentOptionController::class, 'store'])->name('assessment_option.store');
    Route::get('/assessment/option/edit/{id}', [AssessmentOptionController::class, 'edit'])->name('assessment_option.edit');
    Route::post('/assessment/option/update/{id}', [AssessmentOptionController::class, 'update'])->name('assessment_option.update');
    Route::delete('/assessment/option/delete/{id}', [AssessmentOptionController::class, 'destroy'])->name('assessment_option.destroy');
});

Route::middleware(['auth', 'role:superadministrator|finance'])->prefix('admin')->group(function () {
    Route::get('/payment/index', [AdminPaymentController::class, 'index'])->name('admin.payment.index');
    Route::get('/payment/show/{id}', [AdminPaymentController::class, 'show'])->name('admin.payment.show');
});

Route::middleware(['auth', 'role:superadministrator|administrator|finance'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

    Route::get('/member/index', [AdminMemberController::class, 'index'])->name('admin.member.index');
    Route::get('/member/detail/{id}', [AdminMemberController::class, 'show'])->name('admin.member.detail');
    Route::post('/member/update/{id}', [AdminMemberController::class, 'update'])->name('admin.member.update');
    Route::post('/member/invoice/{id}', [AdminMemberController::class, 'invoice'])->name('admin.member.invoice');
    Route::post('/member/invoice/{id}', [AdminMemberController::class, 'invoice'])->name('admin.member.invoice');

    Route::get('/tourism/member/index', [MemberTourismController::class, 'index'])->name('admin.member_tourism.index');
    Route::post('/tourism/member/import', [MemberTourismController::class, 'import'])->name('admin.member_tourism.import');
    Route::post('/tourism/member/update/{id}', [MemberTourismController::class, 'update'])->name('admin.member_tourism.update');
    Route::get('/tourism/member/edit/{id}', [MemberTourismController::class, 'edit'])->name('admin.member_tourism.edit');
    Route::get('/tourism/member/destroy/{id}', [MemberTourismController::class, 'destroy'])->name('admin.member_tourism.destroy');


    Route::get('/business-type', [BusinessTypeController::class, 'index'])->name('business_type.index');
    Route::post('/business-type/store', [BusinessTypeController::class, 'store'])->name('business_type.store');
    Route::get('/business-type/edit/{id}', [BusinessTypeController::class, 'edit'])->name('business_type.edit');
    Route::post('/business-type/update/{id}', [BusinessTypeController::class, 'update'])->name('business_type.update');
    Route::delete('/business-type/delete/{id}', [BusinessTypeController::class, 'destroy'])->name('business_type.destroy');

    Route::get('/module', [ModuleController::class, 'index'])->name('module.index');
    Route::post('/module/store', [ModuleController::class, 'store'])->name('module.store');
    Route::get('/module/show/{id}', [ModuleController::class, 'show'])->name('module.show');
    Route::get('/module/edit/{id}', [ModuleController::class, 'edit'])->name('module.edit');
    Route::post('/module/update/{id}', [ModuleController::class, 'update'])->name('module.update');
    Route::delete('/module/delete/{id}', [ModuleController::class, 'destroy'])->name('module.destroy');

    Route::get('/source', [SourceController::class, 'index'])->name('source.index');
    Route::post('/source/store', [SourceController::class, 'store'])->name('source.store');
    Route::get('/source/show/{id}', [SourceController::class, 'show'])->name('source.show');
    Route::get('/source/edit/{id}', [SourceController::class, 'edit'])->name('source.edit');
    Route::post('/source/update/{id}', [SourceController::class, 'update'])->name('source.update');
    Route::delete('/source/delete/{id}', [SourceController::class, 'destroy'])->name('source.destroy');

    Route::get('/module/{id}/pre-question', [PreTestQuestionController::class, 'index'])->name('pre_question.index');
    Route::post('/module/{id}/pre-question/store', [PreTestQuestionController::class, 'store'])->name('pre_question.store');
    Route::get('/pre-question/edit/{id}', [PreTestQuestionController::class, 'edit'])->name('pre_question.edit');
    Route::patch('/pre-question/update/{id}', [PreTestQuestionController::class, 'update'])->name('pre_question.update');
    Route::delete('/pre-question/delete/{id}', [PreTestQuestionController::class, 'destroy'])->name('pre_question.destroy');

    Route::get('/module/{id}/post-question', [PostTestQuestionController::class, 'index'])->name('post_question.index');
    Route::post('/module/{id}/post-question/store', [PostTestQuestionController::class, 'store'])->name('post_question.store');
    Route::get('/post-question/edit/{id}', [PostTestQuestionController::class, 'edit'])->name('post_question.edit');
    Route::patch('/post-question/update/{id}', [PostTestQuestionController::class, 'update'])->name('post_question.update');
    Route::delete('/post-question/delete/{id}', [PostTestQuestionController::class, 'destroy'])->name('post_question.destroy');

    Route::get('/pre-question/{id}/pre-option', [PreTestOptionController::class, 'index'])->name('pre_option.index');
    Route::post('/pre-question/{id}/pre-option/store', [PreTestOptionController::class, 'store'])->name('pre_option.store');
    Route::get('/pre-option/edit/{id}', [PreTestOptionController::class, 'edit'])->name('pre_option.edit');
    Route::patch('/pre-option/update/{id}', [PreTestOptionController::class, 'update'])->name('pre_option.update');
    Route::delete('/pre-option/delete/{id}', [PreTestOptionController::class, 'destroy'])->name('pre_option.destroy');

    Route::get('/post-question/{id}/post-option', [PostTestOptionController::class, 'index'])->name('post_option.index');
    Route::post('/post-question/{id}/post-option/store', [PostTestOptionController::class, 'store'])->name('post_option.store');
    Route::get('/post-option/edit/{id}', [PostTestOptionController::class, 'edit'])->name('post_option.edit');
    Route::patch('/post-option/update/{id}', [PostTestOptionController::class, 'update'])->name('post_option.update');
    Route::delete('/post-option/delete/{id}', [PostTestOptionController::class, 'destroy'])->name('post_option.destroy');

    Route::get('/badge', [BadgeController::class, 'index'])->name('badge.index');
    Route::post('/badge/store', [BadgeController::class, 'store'])->name('badge.store');
    Route::get('/badge/edit/{id}', [BadgeController::class, 'edit'])->name('badge.edit');
    Route::post('/badge/update/{id}', [BadgeController::class, 'update'])->name('badge.update');
    Route::delete('/badge/delete/{id}', [BadgeController::class, 'destroy'])->name('badge.destroy');

    Route::get('/verified-badge', [VerifiedBadgeController::class, 'index'])->name('verified_badge.index');
    Route::post('/verified-badge/store', [VerifiedBadgeController::class, 'store'])->name('verified_badge.store');
    Route::get('/verified-badge/edit/{id}', [VerifiedBadgeController::class, 'edit'])->name('verified_badge.edit');
    Route::post('/verified-badge/update/{id}', [VerifiedBadgeController::class, 'update'])->name('verified_badge.update');
    Route::delete('/verified-badge/delete/{id}', [VerifiedBadgeController::class, 'destroy'])->name('verified_badge.destroy');

    Route::get('/announcement', [AnnouncementController::class, 'index'])->name('announcement.index');
    Route::post('/announcement/store', [AnnouncementController::class, 'store'])->name('announcement.store');
    Route::get('/announcement/edit/{id}', [AnnouncementController::class, 'edit'])->name('announcement.edit');
    Route::post('/announcement/update/{id}', [AnnouncementController::class, 'update'])->name('announcement.update');
    Route::delete('/announcement/delete/{id}', [AnnouncementController::class, 'destroy'])->name('announcement.destroy');

    Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
    Route::post('/category/store', [CategoryController::class, 'store'])->name('category.store');
    Route::get('/category/edit/{id}', [CategoryController::class, 'edit'])->name('category.edit');
    Route::post('/category/update/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/category/delete/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');

    Route::get('/program', [ProgramController::class, 'index'])->name('program.index');
    Route::post('/program/store', [ProgramController::class, 'store'])->name('program.store');
    Route::get('/program/edit/{id}', [ProgramController::class, 'edit'])->name('program.edit');
    Route::post('/program/update/{id}', [ProgramController::class, 'update'])->name('program.update');
    Route::delete('/program/delete/{id}', [ProgramController::class, 'destroy'])->name('program.destroy');

    Route::get('/statistic', [StatisticController::class, 'index'])->name('statistic.index');
    Route::get('/assessment/statistic', [StatisticController::class, 'assessment'])->name('statistic.assessment');
    Route::get('/assessment/statistic/detail/{id}', [StatisticController::class, 'assessmentDetail'])->name('statistic.assessmentDetail');
    Route::get('/assessment/statistic/export/{id}', [StatisticController::class, 'assessmentExport'])->name('statistic.assessmentExport');
});

require __DIR__ . '/auth.php';
