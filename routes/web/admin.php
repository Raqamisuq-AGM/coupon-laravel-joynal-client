<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Middleware\Dashboard\VerifyAdmin;
use Illuminate\Support\Facades\Route;



Route::group(['middleware' => ['auth', VerifyAdmin::class], 'prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});
