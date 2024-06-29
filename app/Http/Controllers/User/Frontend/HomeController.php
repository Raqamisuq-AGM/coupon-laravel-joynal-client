<?php

namespace App\Http\Controllers\User\Frontend;

use App\Models\Shop;
use App\Models\Coupon;
use App\Models\SocialIcon;
use App\Http\Controllers\Controller;
use App\Models\ShopCategory;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        $shopCategory = ShopCategory::get();

        $shopsByCategory = Shop::select('type', DB::raw('count(*) as total'))
            ->groupBy('type')
            ->get();

        $allShops = Shop::all();

        $shops = $shopsByCategory->map(function ($category) use ($allShops) {
            $category->shops = $allShops->where('type', $category->type)->values();
            return $category;
        });

        // Log the combinedData to inspect its structure
        \Log::info($shops->toArray());

        // dd($shops);

        $socials = SocialIcon::all();

        return inertia('User/Frontend/Home/Index', compact('shopCategory', 'shops', 'socials'));
    }
}
