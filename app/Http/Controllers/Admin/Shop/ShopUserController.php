<?php

namespace App\Http\Controllers\Admin\Shop;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShopUserController extends Controller
{
    public function shopUsers(Shop $shop, Request $request)
    {
        $request->validate([
            'user_ids' => ['required', 'array'],
            'user_ids.*' => ['required', 'exists:users,id'],
        ]);

        DB::transaction(function () use ($shop, $request) {
            $users = User::whereIn('id', $request->user_ids)->get();
            foreach ($users as $user) {
                $user->shop_id = $shop->id;
                $user->save();
            }
        });

        return back()->with('success', 'Shop users updated successfully');
    }
}
