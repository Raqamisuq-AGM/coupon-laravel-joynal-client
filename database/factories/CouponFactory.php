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
            'title' => fake()->sentence(),
            'short_description' => fake()->sentence(),
            'description' => fake()->sentence(),
            'image' => fake()->imageUrl(),
            'code' => fake()->unique()->word(),
            'discount_type' => fake()->randomElement(['fixed', 'percentage']),
            'discount' => fake()->numberBetween(1, 10),
            'daily_limit' => fake()->numberBetween(1, 10),
            'price' => fake()->numberBetween(1, 10),
            'usage_limit' => fake()->numberBetween(1, 10),
            'valid_from' => now(),
            'valid_to' => now()->addDays(30),
            'shop_id' => \App\Models\Shop::factory()->create()->id,
            'status' => fake()->boolean(),
        ];
    }
}
