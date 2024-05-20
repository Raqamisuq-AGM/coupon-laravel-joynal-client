
<?php

use App\Http\Controllers\User\CouponController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\HomeController;
use App\Http\Middleware\Dashboard\VerifyUser;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', VerifyUser::class], 'prefix' => 'user', 'as' => 'user.'], function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('coupon', [CouponController::class, 'index'])->name('coupons.index');
});

Route::group(['middleware' => 'guest'], function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::get('/coupons/buy/{code}', [CouponController::class, 'buy'])->name('coupons.checkout.page');
    Route::post('/coupons/buy', [CouponController::class, 'checkout'])->name('coupons.buy');
});
