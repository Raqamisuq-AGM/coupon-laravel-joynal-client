<?php

namespace App\Http\Controllers\Admin\Coupon;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Http\Requests\Coupon as CP;
use App\Models\Coupon;
use Inertia\Inertia;

class CouponController extends Controller
{
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
                'value' => Coupon::query()->active()->count(),
            ],
            [
                'title' => 'Total Inactive Coupons',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-info-500 bg-opacity-20 text-info-500',
                'textColor' => 'text-slate-500',
                'value' => Coupon::query()->inactive()->count(),
            ],
            [
                'title' => 'Total Expired Coupons',
                'icon' => 'heroicons:squares-2x2-solid',
                'iconBgColor' => 'bg-danger-500 bg-opacity-20 text-gray-100',
                'textColor' => 'text-slate-500',
                'value' => Coupon::query()->expired()->count(),
            ],
            [
                'title' => 'Total Used Coupons',
                'icon' => 'heroicons:user-group',
                'iconBgColor' => 'bg-success-500 bg-opacity-20 text-success-500',
                'textColor' => 'text-slate-500',
                'value' => Coupon::query()->sum('used'),
            ],
        ];

        $buttons = [
            [
                'title' => 'Create Coupon',
                'url' => route('admin.coupons.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Coupons')->buttons($buttons);

        $coupons = Coupon::paginate();

        return Inertia::render('Admin/Coupon/Index', compact('coupons', 'overviews'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        PageHeader::set()->title('Coupons')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        return Inertia::render('Admin/Coupon/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CP\StoreCouponRequest $request)
    {
        Coupon::create($request->validated());

        return redirect()->route('admin.coupons.index')->with('success', 'Coupon created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Coupon $coupon)
    {
        PageHeader::set()->title('Coupons')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        return Inertia::render('Admin/Coupon/View', compact('coupon'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Coupon $coupon)
    {
        PageHeader::set()->title('Coupons Edit')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.coupons.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        return Inertia::render('Admin/Coupon/Edit', [
            'coupon' => $coupon,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CP\UpdateCouponRequest $request, Coupon $coupon)
    {
        $coupon->update($request->validated());

        return to_route('admin.coupons.index')->with('success', 'Coupon updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Coupon $coupon)
    {
        $coupon->delete();

        return redirect()->back()->with('success', 'Coupon deleted successfully');
    }
}
