<?php

namespace App\Http\Controllers\Admin\Shop;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ShopUserController extends Controller
{
    public function index(Shop $shop)
    {
        $buttons = [
            [
                'title' => 'Back',
                'url' => route('admin.shops.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ];

        PageHeader::set()->title('Shop User')->buttons($buttons);

        $users = $shop->users()->paginate(10);

        return Inertia::render('Admin/Shop/User/Index', [
            'users' => $users,
            'shop' => $shop,
        ]);
    }

    public function store(Shop $shop, Request $request)
    {
        $request->validate([
            'user_ids' => ['required', 'array'],
            'user_ids.*' => ['required', 'exists:users,id'],
        ]);

        DB::transaction(function () use ($shop, $request) {
            $users = User::whereIn('id', $request->user_ids)->get();
            foreach ($users as $user) {
                $user->shops()->attach($shop->id);
            }
        });

        return back()->with('success', 'Shop users updated successfully');
    }

    public function destroy(Shop $shop, User $user)
    {

        $user->shops()->detach($shop->id);

        return back()->with('success', 'User removed from shop successfully');
    }
}
