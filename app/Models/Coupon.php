<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentEagerLimit\HasEagerLimit;
    protected $fillable = [
        'title',
        'short_description',
        'description',
        'image',
        'code',
        'discount_type',
        'discount',
        'daily_limit',
        'price',
        'usage_limit',
        'valid_from',
        'valid_to',
        'shop_id',
        'status',
    ];

    protected $casts = [
        'valid_from' => 'datetime',
        'valid_to' => 'datetime',
        'status' => 'boolean',
    ];

    public function scopeActive($builder)
    {
        return $builder->where('status', true);
    }

    public function scopeInactive($builder)
    {
        return $builder->where('status', false);
    }

    public function scopeExpired($builder)
    {
        return $builder->whereDate('valid_to', '<', now());
    }

    public function couponUsers(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CouponUser::class, 'coupon_id');
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class, CouponUser::class);
    }

    public function shop(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }

    public function scopeForUser($query, $userId)
    {
        return $query->whereHas('shop', function ($q) use ($userId) {
            $q->whereHas('users', function ($q) use ($userId) {
                $q->where('user_id', $userId);
            });
        });
    }
}
