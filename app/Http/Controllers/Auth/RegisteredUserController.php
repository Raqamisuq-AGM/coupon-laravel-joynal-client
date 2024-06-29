<?php

namespace App\Http\Controllers\Auth;

use App\Models\Shop;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'phone' => 'required|numeric|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_type' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        // role as user/shop
        if ($request->user_type == 'shop') {
            $user->assignRole('shop');

            $newShop = new Shop();
            $newShop->name = $user->name;
            $newShop->slug = Str::slug($user->name);
            $newShop->save();

            $newShop->users()->attach($user->id);
            $shop = $newShop;
        } else {
            $user->assignRole('user');
        }

        event(new Registered($user));

        Auth::login($user);
        if ($request->user_type == 'shop') {
            return redirect('shop/profile');
        }
        return redirect(RouteServiceProvider::HOME);
    }
}
