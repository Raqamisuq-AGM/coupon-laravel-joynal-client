<?php

namespace App\Http\Controllers\Shop\Coupon;

use Inertia\Inertia;
use App\Models\Coupon;
use App\Models\CouponUser;
use App\Helpers\PageHeader;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CouponUserController extends Controller
{
    public function couponUsers(Coupon $coupon)
    {
        $user_id = auth()->user()->id;

        $overviews = [
            [
                'title' => 'Total Coupon Usage',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-green-500',
                'textColor' => 'text-slate-500',
                'value' => $coupon->couponUsers()->shopUserCoupon($user_id)->count(),
            ],
            [
                'title' => 'Total Claimed',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-info-500 bg-opacity-20 text-info-500',
                'textColor' => 'text-slate-500',
                'value' => $coupon->couponUsers()->shopUserCoupon($user_id)->sum('used'),
            ],
        ];

        $buttons = [
            [
                'title' => 'Back',
                'url' => route('shop.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ];

        PageHeader::set()->title('Coupon User')->buttons($buttons);

        $coupons = $coupon->couponUsers()->shopUserCoupon($user_id)->with('user:id,name,phone', 'coupon:id,code')->paginate();

        return Inertia::render('Shop/Coupon/User/Index', compact('coupons', 'overviews'));
    }

    public function userClaims(Coupon $coupon, CouponUser $couponUser)
    {
        if ($couponUser->coupon_id !== $coupon->id) {
            return response()->json([]);
        }

        $claims = $couponUser->shopUserCoupon(auth()->user()->id)->claims()->paginate();

        return response()->json($claims);
    }
}
