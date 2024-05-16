
<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Middleware\Dashboard\VerifyUser;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', VerifyUser::class], 'prefix' => 'user', 'as' => 'user.'], function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});
