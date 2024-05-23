<?php

namespace App\Http\Controllers\Admin\Coupon;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Models\CouponUser;
use Inertia\Inertia;

class CouponUserController extends Controller
{
    public function index()
    {
        $overviews = [
            [
                'title' => 'Total Coupon Usage',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-green-500',
                'textColor' => 'text-slate-500',
                'value' => CouponUser::query()->count(),
            ],
            [
                'title' => 'Total Claimed',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-info-500 bg-opacity-20 text-info-500',
                'textColor' => 'text-slate-500',
                'value' => CouponUser::query()->sum('used'),
            ],
        ];

        $buttons = [
            [
                'title' => 'Create Coupon',
                'url' => route('admin.coupons.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Coupon User')->buttons($buttons);

        $coupons = CouponUser::with('user:id,name,phone', 'coupon:id,code')->paginate();

        return Inertia::render('Admin/Coupon/User/Index', compact('coupons', 'overviews'));
    }
}
