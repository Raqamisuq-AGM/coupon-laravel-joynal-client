<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponUser extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentEagerLimit\HasEagerLimit;
    protected $fillable = [
        'coupon_id',
        'user_id',
        'used',
        'status',
    ];

    public function coupon(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Coupon::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function claims(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CouponClaim::class, 'coupon_user_id');
    }

    public function scopeShopUserCoupon($query, $userId)
    {
        return $query->whereHas('coupon', function ($q) use ($userId) {
            $q->whereHas('shop', function ($q) use ($userId) {
                $q->whereHas('users', function ($q) use ($userId) {
                    $q->where('user_id', $userId);
                });
            });
        });
    }
}
