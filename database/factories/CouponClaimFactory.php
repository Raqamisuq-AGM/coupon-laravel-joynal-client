<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CouponClaim>
 */
class CouponClaimFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'coupon_user_id' => 1,
            'user_id' => \App\Models\User::factory()->create()->id,
            'claimed_at' => now(),
            'code' => $this->faker->ean8(),
        ];
    }
}
