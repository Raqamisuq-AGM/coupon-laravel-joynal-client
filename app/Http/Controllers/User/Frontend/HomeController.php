<?php

namespace App\Http\Controllers\User\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $coupons = Coupon::active()->limit(6)->latest()->get();

        $shops = User::active()->whereRelation('roles', 'name', 'shop')->get();

        return inertia('User/Frontend/Home/Index', compact('coupons', 'shops'));
    }
}
