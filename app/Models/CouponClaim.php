<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponClaim extends Model
{
    use HasFactory;

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
}
