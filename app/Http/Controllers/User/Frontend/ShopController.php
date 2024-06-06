<?php

namespace App\Http\Controllers\User\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Shop;

class ShopController extends Controller
{
    public function index()
    {

        $shops = Shop::with(['coupons:shop_id,id,title,code,image,short_description,valid_from,valid_to'])
            ->active()->cursorPaginate(20);

        return inertia('User/Frontend/Shop/Index', compact('shops'));
    }
}
