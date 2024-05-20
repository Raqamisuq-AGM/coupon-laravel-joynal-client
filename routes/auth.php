<?php


use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::middleware('guest')->group(function () {
    // Route::get('register', [Auth\RegisteredUserController::class, 'create'])
    //             ->name('register');

    // Route::post('register', [Auth\RegisteredUserController::class, 'store']);

    // Route::get('login', [Auth\AuthenticatedSessionController::class, 'create'])
    //             ->name('login');

    // Route::post('login', [Auth\AuthenticatedSessionController::class, 'store']);

    // Route::get('forgot-password', [Auth\PasswordResetLinkController::class, 'create'])
    //             ->name('password.request');

    // Route::post('forgot-password', [Auth\PasswordResetLinkController::class, 'store'])
    //             ->name('password.email');

    // Route::get('reset-password/{token}', [Auth\NewPasswordController::class, 'create'])
    //             ->name('password.reset');

    // Route::post('reset-password', [Auth\NewPasswordController::class, 'store'])
    //             ->name('password.store');
// });

// Route::middleware('auth')->group(function () {

//     Route::get('/', DashboardController::class)->name('dashboard');

    // Route::get('verify-email', Auth\EmailVerificationPromptController::class)
    //             ->name('verification.notice');

    // Route::get('verify-email/{id}/{hash}', Auth\VerifyEmailController::class)
    //             ->middleware(['signed', 'throttle:6,1'])
    //             ->name('verification.verify');

    // Route::post('email/verification-notification', [Auth\EmailVerificationNotificationController::class, 'store'])
    //             ->middleware('throttle:6,1')
    //             ->name('verification.send');

    // Route::get('confirm-password', [Auth\ConfirmablePasswordController::class, 'show'])
    //             ->name('password.confirm');

    // Route::post('confirm-password', [Auth\ConfirmablePasswordController::class, 'store']);

    // Route::put('password', [Auth\PasswordController::class, 'update'])->name('password.update');

    // Route::post('logout', [Auth\AuthenticatedSessionController::class, 'destroy'])
    //             ->name('logout');

    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
