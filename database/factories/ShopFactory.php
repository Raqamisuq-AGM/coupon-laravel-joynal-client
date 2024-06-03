<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'short_description' => fake()->sentence(),
            'description' => fake()->text(),
            'image' => fake()->imageUrl(),
            'site_url' => fake()->url(),
            'type' => fake()->randomElement(['cafe', 'restaurant', 'club']),
            'status' => fake()->boolean(),
        ];
    }
}
