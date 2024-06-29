<?php

namespace App\Http\Controllers\Shop\Coupon;

use App\Models\User;
use App\Models\Coupon;
use App\Helpers\PageHeader;
use App\Models\CouponClaim;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\CouponClaim\StoreCouponClaimRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CouponClaimController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $coupon_claims = CouponClaim::shopUserCouponClaim(auth()->user()->id)->latest('id')->paginate();
        PageHeader::set()->title('Coupon Claim')->buttons([
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

        // dd($request);
        $params = $request->validated();

        $couponId = $request->couponId;

        if ($couponId) {
            $coupon = Coupon::find($couponId);
            $redirectRouteName = $request->redirectRoute;
        } else {
            $coupon = Coupon::forUser(auth()->user()->id)->where('status', true)->where('code', $params['coupon_code'])->first();
            $redirectRouteName = 'shop.coupon-claims.index';
        }

        if (!$coupon) {
            return back()->with('error', 'Coupon not found');
        }

        // Check if coupon is expired
        if ($coupon->valid_to->lt(now())) {
            return back()->with('error', 'Coupon is expired');
        }
        $user = User::where('phone', $params['phone'])->first();

        $coupon_user = $user->couponUsers()->where('coupon_id', $coupon->id)->first();

        if (!is_null($coupon_user)) {
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

            // Create a new coupon_user record
            $coupon_user = $user->couponUsers()->create([
                'coupon_id' => $coupon->id,
                'used' => 1,
                'status' => 1,
            ]);

            CouponClaim::create([
                'coupon_user_id' => $coupon_user->id,
                'user_id' => $coupon_user->user_id,
                'code' => $coupon->code,
                'claimed_at' => now(),
            ]);

            // $coupon_user->update([
            //     'used' => $coupon_user->used + 1,
            // ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            return back()->with('error', $e->getMessage());
        }

        return to_route($redirectRouteName)->with('success', 'Coupon Claimed');
    }

    public function showUser(Request $request)
    {
        $request->validate([
            'phone' => 'required', // Add any validation rules needed
            'coupon_code' => 'required',
        ]);

        // Retrieve user based on phone number
        $user = User::where('phone', $request->phone)->first();

        // Retrieve coupon with its associated shop based on coupon code
        $coupon = Coupon::with('shop')->where('code', $request->coupon_code)->first();


        if (!$coupon) {
            return back()->with('error', 'Coupon not found');
        }

        // Check if coupon is expired
        if ($coupon->valid_to->lt(now())) {
            return back()->with('error', 'Coupon is expired');
        }

        $coupon_user = $user->couponUsers()->where('coupon_id', $coupon->id)->first();

        if (!is_null($coupon_user)) {
            return back()->with('error', 'Coupon is already claimed');
        }

        $today = Carbon::today();
        $couponsClaimedToday = $user->couponUsers()
            ->where('created_at', '>=', $today)
            ->count();
        // dd($coupon);

        // Return a JSON response with both user and coupon data
        return inertia('Shop/CouponClaim/CouponDetails', compact('user', 'coupon', 'couponsClaimedToday'));
    }
}
