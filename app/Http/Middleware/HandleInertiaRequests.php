<?php

namespace App\Http\Middleware;

use App\Helpers\PageHeader;
use App\Helpers\Toastr;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     */
    public function rootView(Request $request): string
    {
        $role = $request->user() ? $request->user()->getRoleNames()->first() : null;

        return $role ? "layouts.{$role}" : 'layouts.default';
    }

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $permissions = [];

        $user = $request->user();

        $role = $user ? $user->getRoleNames()->first() : null;
        // only get the permissions if the user is an admin and shop
        if ($user && $role !== 'user') {
            $permissions = $user->getAllPermissions()->pluck('name');
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user ? $user->only('name', 'email', 'phone') : null,
                'role' => $role,
            ],
            'permissions' => $permissions,
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'locale' => session('locale', 'en'),
            'toast' => fn () => Toastr::Toast(),
            'pageHeader' => fn () => PageHeader::toArray(),
        ];
    }
}
