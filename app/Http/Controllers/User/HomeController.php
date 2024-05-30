<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Coupon;

class HomeController extends Controller
{
    public function index()
    {
        $coupons = Coupon::active()->limit(6)->latest()->get();

        return inertia('User/Frontend/Home/Index', compact('coupons'));
    }
}
