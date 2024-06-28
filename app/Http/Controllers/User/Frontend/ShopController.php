<?php

namespace App\Http\Controllers\User\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Shop;

class ShopController extends Controller
{
    public function index()
    {
        $shops = Shop::with(['coupons' => function ($query) {
            $query->where('status', 1)
                ->select('id', 'shop_id', 'title', 'code', 'image', 'short_description', 'valid_from', 'valid_to')
                ->withCount(['couponUsers as claimed' => function ($query) {
                    $query->where('used', 1)->where('status', 1);
                }]);
        }])
            ->active()
            ->cursorPaginate(500);

        $user = auth()->user();
        $isLoggedIn = $user !== null;

        return inertia('User/Frontend/Shop/Index', compact('shops', 'isLoggedIn'));
    }
}
