<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create roles for user, admin, shop
        $admin = \Spatie\Permission\Models\Role::create(['name' => 'admin']);
        $shop = \Spatie\Permission\Models\Role::create(['name' => 'shop']);
        $user = \Spatie\Permission\Models\Role::create(['name' => 'user']);

        // create permissions for admin, user and shop

        $admin_permission = \Spatie\Permission\Models\Permission::create(['name' => 'admin']);
        $shop_permission = \Spatie\Permission\Models\Permission::create(['name' => 'shop']);
        $user_permission = \Spatie\Permission\Models\Permission::create(['name' => 'user']);

        // assign permissions to roles
        $admin->givePermissionTo($admin_permission);
        $shop->givePermissionTo($shop_permission);
        $user->givePermissionTo($user_permission);

        // create admin, user, and shop users
        $admin = \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'phone' => '0019000000',
            'status' => true,
        ]);

        $shop = \App\Models\User::factory()->create([
            'name' => 'Shop',
            'email' => 'shop@gmail.com',
            'phone' => '0019000001',
            'status' => true,
        ]);

        $user = \App\Models\User::factory()->create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'phone' => '0019000002',
            'status' => true,
        ]);

        // assign roles to users
        $admin->assignRole('admin');
        $shop->assignRole('shop');
        $user->assignRole('user');
    }
}
