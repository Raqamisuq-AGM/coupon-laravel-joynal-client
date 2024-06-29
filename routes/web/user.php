
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\Dashboard\VerifyUser;
use App\Http\Controllers\User\CouponController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\Frontend\HomeController;
use App\Http\Controllers\User\Frontend\ShopController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('shops/{slug}', [ShopController::class, 'index'])->name('shops.index');
// Route::get('/shop/{slug}', [ShopController::class, 'viewShopWithCoupon'])->name('shop.show');

Route::group(['middleware' => ['auth', VerifyUser::class], 'prefix' => 'user', 'as' => 'user.'], function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('coupon', [CouponController::class, 'index'])->name('coupons.index');
    Route::get('/coupons/buy/{code}', [CouponController::class, 'show'])->name('coupons.checkout.page');
    Route::post('/coupons/buy', [CouponController::class, 'store'])->name('coupons.buy');

    Route::resource('profile', ProfileController::class)->only(['index', 'update']);

    Route::get('change-credential', [ProfileController::class, 'changeCredentialView'])->name('change-credential.index');
    Route::post('change-password', [ProfileController::class, 'changePassword'])->name('change-password.store');
    Route::post('change-email', [ProfileController::class, 'changeEmail'])->name('change-email.store');
});
