<?php

namespace Database\Seeders;

use App\Models\Shop;
use Illuminate\Database\Seeder;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Shop::factory(50)->create()->each(function ($shop) {

            $shop->users()->saveMany(\App\Models\User::factory(3)->make([
                'shop_id' => $shop->id,
                'status' => true,
            ]))->each(function ($user) {
                $user->assignRole('shop');
            });
            $shop->coupons()->saveMany(\App\Models\Coupon::factory(3)->make([
                'shop_id' => $shop->id,
                'status' => true,
            ]));
        });
    }
}
