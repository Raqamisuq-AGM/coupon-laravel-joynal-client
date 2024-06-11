<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory, Sluggable;
    use \Staudenmeir\EloquentEagerLimit\HasEagerLimit;
    protected $fillable = [
        'name',
        'slug',
        'short_description',
        'description',
        'image',
        'site_url',
        'type',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url($value),
        );
    }

    /**
     * Return the sluggable configuration array for this model.
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    public function scopeActive($builder)
    {
        return $builder->where('status', true);
    }

    public function scopeInactive($builder)
    {
        return $builder->where('status', false);
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class, ShopUser::class);
    }

    public function coupons(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Coupon::class);
    }
}
