<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin as Admin;
use App\Http\Middleware\Dashboard\VerifyAdmin;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\Coupon\CouponClaimController;
use App\Http\Controllers\Admin\Shop\ShopUserController;

Route::group(['middleware' => ['auth', VerifyAdmin::class], 'prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::get('/dashboard', Admin\DashboardController::class)->name('dashboard');
    Route::resource('coupons', Admin\Coupon\CouponController::class);
    Route::resource('users', Admin\User\UserController::class);
    Route::resource('shops', Admin\Shop\ShopController::class);
    Route::resource('shops.users', Admin\Shop\ShopUserController::class)->only(['index', 'store', 'destroy']);
    Route::resource('social', Admin\SocialIconController::class)->except('show');
    Route::resource('coupon-claims', CouponClaimController::class)->only(['index', 'create', 'store']);
    // Route::post('shops/{shop}/add-user', [Admin\Shop\ShopUserController::class, 'shopUsers'])->name('add.shop-users');
    // Route::get('shops/{shop}/users', [Admin\Shop\ShopUserController::class, 'index'])->name('remove.shop-user');
    // Route::get('shops/{shop}/remove-user/{user}', [Admin\Shop\ShopUserController::class, 'removeUser'])->name('remove.shop-user');

    Route::get('coupons/{coupon}/users', [Admin\Coupon\CouponUserController::class, 'couponUsers'])->name('coupon-users');
    Route::get('coupons/{coupon}/users/{couponUser}/claims', [Admin\Coupon\CouponUserController::class, 'userClaims'])->name('coupon-user-claims');

    Route::get('change-credential', [ProfileController::class, 'changeCredentialView'])->name('change-credential.index');
    Route::post('change-password', [ProfileController::class, 'changePassword'])->name('change-password.store');
    Route::post('change-email', [ProfileController::class, 'changeEmail'])->name('change-email.store');
    Route::get('shop-category', [ShopUserController::class, 'shopCategory'])->name('category.index');
    Route::get('crete-shop-category', [ShopUserController::class, 'createShopCategory'])->name('category.create');
    Route::get('edit-shop-category/{id}', [ShopUserController::class, 'editShopCategory'])->name('category.edit');
    Route::post('store-shop-category', [ShopUserController::class, 'storeShopCategory'])->name('category.store');
    Route::post('update-shop-category', [ShopUserController::class, 'updateShopCategory'])->name('category.update');
    Route::delete('delete-shop-category/{id}', [ShopUserController::class, 'deleteShopCategory'])->name('category.destroy');
});
