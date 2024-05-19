<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'discount',
        'usage_limit',
        'valid_from',
        'valid_to',
        'status',
        'used',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function scopeActive($builder)
    {
        return $builder->where('status', false);
    }

    public function scopeInactive($builder)
    {
        return $builder->where('status', false);
    }

    public function scopeExpired($builder)
    {
        return $builder->whereDate('valid_to', '<', now());
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class, CouponUser::class);
    }


}
