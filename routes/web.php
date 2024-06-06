<?php

use App\Http\Controllers\Auth as Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/locale/{locale}', function ($locale) {
    App::setLocale($locale);
    session(['locale' => $locale]);

    return redirect()->back();
});

Route::middleware('guest')->group(function () {
    Route::get('register', [Auth\RegisteredUserController::class, 'create'])
        ->name('register');
    Route::post('register', [Auth\RegisteredUserController::class, 'store']);

    Route::get('login', [Auth\AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('login', [Auth\AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {

    Route::post('logout', [Auth\AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
