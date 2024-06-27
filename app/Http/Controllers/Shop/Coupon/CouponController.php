<?php

namespace App\Http\Controllers\Shop\Coupon;

use App\Models\Shop;
use Inertia\Inertia;
use App\Models\Coupon;
use App\Traits\Uploader;
use App\Models\CouponUser;
use App\Helpers\PageHeader;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\Coupon\StoreCouponRequest;
use App\Http\Requests\Admin\Coupon\UpdateCouponRequest;

class CouponController extends Controller
{
    use Uploader;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $overviews = [
            [
                'title' => 'Total Active Coupons',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-green-500',
                'textColor' => 'text-slate-500',
                'value' => Coupon::query()->forUser(auth()->user()->id)->active()->count()

            ],
            [
                'title' => 'Total Inactive Coupons',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-info-500 bg-opacity-20 text-info-500',
                'textColor' => 'text-slate-500',
                'value' => Coupon::query()->forUser(auth()->user()->id)->inactive()->count(),
            ],
            [
                'title' => 'Total Expired Coupons',
                'icon' => 'heroicons:squares-2x2-solid',
                'iconBgColor' => 'bg-danger-500 bg-opacity-20 text-gray-100',
                'textColor' => 'text-slate-500',
                'value' => Coupon::query()->forUser(auth()->user()->id)->expired()->count(),
            ],
            [
                'title' => 'Total Used Coupons',
                'icon' => 'heroicons:user-group',
                'iconBgColor' => 'bg-success-500 bg-opacity-20 text-success-500',
                'textColor' => 'text-slate-500',
                'value' => CouponUser::shopUserCoupon(auth()->user()->id)->count(),
            ],
        ];

        $buttons = [
            [
                'title' => 'Create Coupon',
                'url' => route('shop.coupons.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Dashboard')->buttons($buttons);

        $coupons = Coupon::whereHas('shop', function ($q) {
            $q->whereHas('users', function ($q) {
                $q->where('user_id', auth()->user()->id);
            });
        })->with('shop:id,name')->withCount('couponUsers as total_purchased')->latest()->paginate();

        return Inertia::render('Shop/Coupon/Index', compact('coupons', 'overviews'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        PageHeader::set()->title('Coupons')->buttons([
            [
                'title' => 'Back',
                'url' => route('shop.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        return Inertia::render('Shop/Coupon/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCouponRequest $request)
    {
        Coupon::create($request->validated());

        return redirect()->route('shop.coupons.index')->with('success', 'Coupon created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Coupon $coupon)
    {
        PageHeader::set()->title('Coupons')->buttons([
            [
                'title' => 'Back',
                'url' => route('shop.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        $coupon->load(['shop:id,name'])->withCount('couponUsers as total_purchased');

        return Inertia::render('Shop/Coupon/View', compact('coupon'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Coupon $coupon)
    {
        PageHeader::set()->title('Coupons Edit')->buttons([
            [
                'title' => 'Back',
                'url' => route('shop.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        return Inertia::render('Shop/Coupon/Edit', [
            'coupon' => $coupon
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCouponRequest $request, Coupon $coupon)
    {

        $coupon->update($request->validated());

        return to_route('shop.coupons.index')->with('success', 'Coupon updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Coupon $coupon)
    {
        if ($coupon->image) {
            $this->delete($coupon->image);
        }
        $coupon->delete();

        return redirect()->back()->with('success', 'Coupon deleted successfully');
    }
}
