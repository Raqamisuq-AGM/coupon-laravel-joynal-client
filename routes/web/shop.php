<?php

use App\Http\Controllers\Shop\CouponClaimController;
use App\Http\Controllers\Shop\DashboardController;
use App\Http\Middleware\Dashboard\VerifyShop;
use Illuminate\Support\Facades\Route;




Route::group(['middleware' => ['auth', VerifyShop::class], 'prefix' => 'shop', 'as' => 'shop.'], function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::resource('coupon-claims', CouponClaimController::class)->only(['index', 'create', 'store']);
});
