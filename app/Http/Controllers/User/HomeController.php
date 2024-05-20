<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        $coupons = Coupon::active()->limit(6)->latest()->get();
        return inertia('User/Frontend/Home', compact('coupons'));
    }

   
}
