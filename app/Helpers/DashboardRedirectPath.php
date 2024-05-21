<?php

namespace App\Helpers;
use App\Models\User;
use App\Providers\RouteServiceProvider;

class DashboardRedirectPath
{
    public static function get($request): string{

        $role = $request->user()->getRoleNames()->first();

        $redirectPath = match ($role) {
            'admin' => route('admin.dashboard'),
            'user' => route('home'),
            'shop' => route('shop.dashboard'),
        };
        return $redirectPath;
    }
}
