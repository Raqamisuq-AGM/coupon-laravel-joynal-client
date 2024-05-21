
<?php

use App\Http\Controllers\User\CouponController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\HomeController;
use App\Http\Middleware\Dashboard\VerifyUser;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth', VerifyUser::class], 'prefix' => 'user', 'as' => 'user.'], function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('coupon', [CouponController::class, 'index'])->name('coupons.index');
    Route::get('/coupons/buy/{code}', [CouponController::class, 'show'])->name('coupons.checkout.page');
    Route::post('/coupons/buy', [CouponController::class, 'store'])->name('coupons.buy');
});

