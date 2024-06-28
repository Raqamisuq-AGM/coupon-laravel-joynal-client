<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponClaim extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentEagerLimit\HasEagerLimit;
    public $timestamps = false;

    protected $casts = [
        'claimed_at' => 'datetime',
    ];

    protected $guarded = [];

    public function couponUser(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(CouponUser::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeShopUserCouponClaim($query, $userId)
    {
        return $query->whereHas('couponUser', function ($q) use ($userId) {
            $q->whereHas('coupon', function ($q) use ($userId) {
                $q->whereHas('shop', function ($q) use ($userId) {
                    $q->whereHas('users', function ($q) use ($userId) {
                        $q->where('user_id', $userId);
                    });
                });
            });
        });
    }
}
