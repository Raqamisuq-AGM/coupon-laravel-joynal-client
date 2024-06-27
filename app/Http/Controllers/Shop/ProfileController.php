<?php

namespace App\Http\Controllers\Shop;

use App\Models\Shop;
use App\Models\User;
use Inertia\Inertia;
use App\Helpers\PageHeader;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Shop\UpdateProfileRequest;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $shop = Shop::withUser($user->id)->first();

        if (\is_null($shop)) {
            $newShop = new Shop();
            $newShop->name = $user->name;
            $newShop->slug = Str::slug($user->name);
            $newShop->save();

            $newShop->users()->attach($user->id);
            $shop = $newShop;
        }

        PageHeader::set()->title('Shop Update')->buttons([
            [
                'title' => 'shop Update',
                'url' => route('shop.profile.index'),
                'icon' => 'heroicons:user-plus',
            ],
        ]);

        return Inertia::render('Shop/Profile/Update', compact('shop'));
    }
    public function changePasswordView()
    {
        PageHeader::set()->title('Change Password')->buttons([
            [
                'title' => 'Change Password',
                'url' => route('shop.change-password.store'),
                'icon' => 'heroicons:edit',
            ],
        ]);

        return inertia('Shop/Profile/ChangePassword');
    }

    public function changePassword(Request $request)
    {
        $this->validate($request,  [
            'password' => 'required|confirmed|min:6'
        ]);

        $user = User::find(auth()->user()->id);
        $user->password = Hash::make($request->password);
        $user->save();

        return to_route('shop.change-password.index')->with('success', 'Password has been changed successfully');
    }

    public function update(UpdateProfileRequest $request, $shopId)
    {
        $shop = Shop::find($shopId);
        $shop->update($request->validated());

        return to_route('shop.profile.index')->with('success', 'Shop updated successfully');
    }
}
