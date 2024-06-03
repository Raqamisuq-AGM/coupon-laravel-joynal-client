<?php

namespace App\Http\Controllers\User\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\Shop;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $shops = Shop::active()->select('id', 'name', 'image', 'site_url')->take(24)->get();

        $cafes_query  = Shop::query()->active()->where('type', 'cafe');
        $cafes= [
            'count' => $cafes_query->count(),
            'data' => $cafes_query->take(3)->get(),
        ];

        $clubs_query = Shop::query()->active()->where('type', 'club');

        $clubs = [
            'count' => $clubs_query->count(),
            'data' => $clubs_query->take(3)->get(),
        ];

        return inertia('User/Frontend/Home/Index', compact('shops', 'clubs', 'cafes'));
    }
}
