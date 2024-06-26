<?php

namespace App\Http\Controllers\Shop;

use App\Models\User;
use App\Models\Coupon;
use App\Helpers\PageHeader;
use App\Models\CouponClaim;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\CouponClaim\StoreCouponClaimRequest;

class CouponClaimController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $coupon_claims = CouponClaim::latest('id')->paginate();
        PageHeader::set()->title('Coupon Claims')->buttons([
            [
                'title' => 'New Coupon Claim',
                'url' => route('shop.coupon-claims.create'),
                'icon' => 'heroicons:plus',
            ],
        ]);

        return inertia('Shop/CouponClaim/Index', compact('coupon_claims'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        PageHeader::set()->title('New Coupon Claim');

        return inertia('Shop/CouponClaim/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCouponClaimRequest $request)
    {
        $params = $request->validated();

        $coupon = Coupon::where('status', true)->where('code', $params['coupon_code'])->first();

        if (!$coupon) {
            return back()->with('error', 'Coupon not found');
        }
        // Check if coupon is expired
        if ($coupon->valid_to->lt(now())) {
            return back()->with('error', 'Coupon is expired');
        }
        $user = User::where('phone', $params['phone'])->first();

        $coupon_user = $user->couponUsers()->where('coupon_id', $coupon->id)->first();

        if (!$coupon_user) {
            return back()->with('error', 'Coupon is not valid for this user');
        }
        // Check if coupon is already claimed
        if ($coupon->usage_limit == $coupon_user->used) {
            return back()->with('error', 'Coupon is already claimed');
        }

        $today = Carbon::today();
        $couponsClaimedToday = $user->couponUsers()
            ->where('created_at', '>=', $today)
            ->count();

        if ($couponsClaimedToday >= 5) {
            return back()->with('error', 'User has reached the daily limit of 5 coupons');
        }

        try {
            DB::beginTransaction();

            CouponClaim::create([
                'coupon_user_id' => $coupon_user->id,
                'user_id' => $coupon_user->user_id,
                'code' => $coupon->code,
                'claimed_at' => now(),
            ]);

            $coupon_user->update([
                'used' => $coupon_user->used + 1,
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            return back()->with('error', $e->getMessage());
        }

        return to_route('shop.coupon-claims.index')->with('success', 'Coupon Claimed');
    }
}
