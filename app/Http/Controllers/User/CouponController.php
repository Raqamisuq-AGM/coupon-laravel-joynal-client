<?php

namespace App\Http\Controllers\User;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CouponController extends Controller
{
    public function index()
    {
        $user = \request()->user();

        $query = $user->couponUser();
        $overviews = [
            [
                'title' => 'Total Active Coupons',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-green-500',
                'textColor' => 'text-slate-500',
                'value' => $query->where('status', true)->count(),
            ],
            [
                'title' => 'Total Inactive Coupons',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-info-500 bg-opacity-20 text-info-500',
                'textColor' => 'text-slate-500',
                'value' =>$query->where('status', false)->count(),
            ],
            [
                'title' => 'Total Used Coupons',
                'icon' => 'heroicons:squares-2x2-solid',
                'iconBgColor' => 'bg-success-500 bg-opacity-20 text-success-100',
                'textColor' => 'text-slate-500',
                'value' =>  $user->couponUser()->sum('used'),
            ],
        ];

        $buttons = [
            [
                'title' => 'Buy Coupon',
                'url' => '/#coupons',
                'icon' => 'heroicons:plus',
            ]
            ];

        PageHeader::set()->title('Coupons')->buttons($buttons);

        $coupons = $user->couponUser()->with('coupon')->paginate();

        return inertia('User/Dashboard/Coupon/Index', compact('coupons', 'overviews'));
    }
    public function show($code)
    {
        $coupon = Coupon::active()->where('code', $code)->firstOrFail();
        return inertia('User/Frontend/Checkout', compact('coupon'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'coupon_code' => ['required', 'string'],
            'name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'phone' => ['required', 'string'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $coupon = Coupon::active()->where('code', $request->coupon_code)->first();

        try {
            DB::beginTransaction();
            if (!$coupon) {
                throw new \Exception('Coupon not found');
            }

            $user = User::firstOrCreate([
                'phone' => $request->phone,
            ], [
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            $phone_number_usage_count = $user->couponUser()->where('created_at', '>=', now()->subDay())->count();

            if ($phone_number_usage_count >= $coupon->daily_limit) {
                throw new \Exception('Daily limit exceeded');
            }

            // check if user not has role as user than assign role as user
            if (!$user->hasRole('user')) {
                $user->assignRole('user');
            }

            $coupon->users()->attach($user->id, [
                'created_at' => now(),
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with('error', $th->getMessage());
        }

        return inertia('User/Frontend/Success', compact('coupon'));
    }
}
