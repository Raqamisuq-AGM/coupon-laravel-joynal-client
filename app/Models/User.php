<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'shop_id',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
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

    public function scopeAdmin($builder)
    {
        return $builder->whereRelation('roles', 'name', 'admin');
    }

    public function scopeShop($builder)
    {
        return $builder->whereRelation('roles', 'name', 'shop');
    }

    public function couponUsers(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CouponUser::class);
    }

    public function coupons(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Coupon::class, CouponUser::class);
    }

    public function shops(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Shop::class, ShopUser::class);
    }
}
