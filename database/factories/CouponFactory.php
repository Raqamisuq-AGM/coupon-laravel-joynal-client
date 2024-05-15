<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coupon>
 */
class CouponFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => fake()->unique()->word(),
            'discount' => fake()->numberBetween(1, 10),
            'usage_limit' => fake()->numberBetween(1, 10),
            'used' => fake()->numberBetween(1, 10),
            'valid_from' => now(),
            'valid_to' => now()->addDays(30),
            'status' => fake()->boolean(),
        ];
    }
}
