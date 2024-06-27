<?php

namespace App\Helpers;

class DashboardRedirectPath
{
    public static function get($request): string
    {

        $role = $request->user()->getRoleNames()->first();

        $redirectPath = match ($role) {
            'admin' => route('admin.coupons.index'),
            'user' => route('home'),
            'shop' => route('shop.coupons.index'),
        };

        return $redirectPath;
    }
}
