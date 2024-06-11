<?php

namespace App\Http\Controllers\User\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\Shop;

class HomeController extends Controller
{
    public function index()
    {
        $shops = Shop::active()->select('id', 'name', 'image', 'site_url', 'slug')->take(24)->get();

        $shopsCoupons  = Shop::active()
            ->withCount(['coupons as total_coupons' => fn($query) => $query->active()])
            ->with(['coupons' => fn($query) => $query->active()->limit(3)])
            ->whereIn('type', ['club', 'cafe'])
            ->get()->toArray();

        // reverse order shopCoupons
        $shopsCoupons = array_reverse($shopsCoupons);

        return inertia('User/Frontend/Home/Index', compact('shops', 'shopsCoupons'));
    }
}
