<?php

use App\Http\Controllers\Admin as Admin;
use App\Http\Middleware\Dashboard\VerifyAdmin;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', VerifyAdmin::class], 'prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::get('/dashboard', Admin\DashboardController::class)->name('dashboard');
    Route::resource('coupons', Admin\Coupon\CouponController::class);
    Route::resource('users', Admin\User\UserController::class);
    Route::resource('shops', Admin\Shop\ShopController::class);
    Route::resource('shops.users', Admin\Shop\ShopUserController::class)->only(['index', 'store', 'destroy']);
    Route::resource('social', Admin\SocialIconController::class)->except('show');

    // Route::post('shops/{shop}/add-user', [Admin\Shop\ShopUserController::class, 'shopUsers'])->name('add.shop-users');
    // Route::get('shops/{shop}/users', [Admin\Shop\ShopUserController::class, 'index'])->name('remove.shop-user');
    // Route::get('shops/{shop}/remove-user/{user}', [Admin\Shop\ShopUserController::class, 'removeUser'])->name('remove.shop-user');

    Route::get('coupons/{coupon}/users', [Admin\Coupon\CouponUserController::class, 'couponUsers'])->name('coupon-users');
    Route::get('coupons/{coupon}/users/{couponUser}/claims', [Admin\Coupon\CouponUserController::class, 'userClaims'])->name('coupon-user-claims');
});
