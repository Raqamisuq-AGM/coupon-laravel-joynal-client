<?php

use App\Http\Controllers\Admin as Admin;
use App\Http\Middleware\Dashboard\VerifyAdmin;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', VerifyAdmin::class], 'prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::get('/dashboard', Admin\DashboardController::class)->name('dashboard');
    Route::resource('coupons', Admin\Coupon\CouponController::class);

    Route::resource('coupon-users', Admin\Coupon\CouponUserController::class)->only('index');
});
