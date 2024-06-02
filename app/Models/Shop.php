<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

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
            get: fn ($value) => url("storage/{$value}"),
        );
    }
    // generate unique slug
    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->slug = self::generateUniqueSlug($model);
        });
    }

    public static function generateUniqueSlug($model)
    {
        $slug = str($model->name)->slug()->toString();
        $i = 1;
        $isUnique = false;
        while (!$isUnique) {
            if (!self::where('slug', $slug)->exists()) {
                $isUnique = true;
            } else {
                $slug = $slug . '-' . $i;
                $i++;
            }
        }
        return $slug;
    }

    public function scopeActive($builder)
    {
        return $builder->where('status', true);
    }

    public function scopeInactive($builder)
    {
        return $builder->where('status', false);
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(User::class);
    }
}
