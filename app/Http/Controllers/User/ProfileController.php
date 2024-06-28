<?php

namespace App\Http\Controllers\User;

use App\Models\Shop;
use App\Models\User;
use Inertia\Inertia;
use App\Helpers\PageHeader;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        PageHeader::set()->title('Edit Profile')->buttons([
            [
                'title' => 'Edit Profile',
                'url' => route('user.profile.index'),
                'icon' => 'heroicons:user-plus',
            ],
        ]);

        return Inertia::render('User/Profile/Update', compact('user'));
    }

    public function update(Request $request, $userId)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'phone' => 'required|numeric'
        ]);

        $user = User::find($userId);
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->save();

        return to_route('user.profile.index')->with('success', 'User updated successfully');
    }

    public function changeCredentialView()
    {
        PageHeader::set()->title('Change Password')->buttons([
            [
                'title' => 'Change Password',
                'url' => route('user.change-password.store'),
                'icon' => 'heroicons:edit',
            ],
        ]);

        $user = auth()->user();

        return inertia('User/Profile/ChangeCredential', \compact('user'));
    }

    public function changePassword(Request $request)
    {
        $this->validate($request,  [
            'password' => 'required|confirmed|min:6'
        ]);

        $user = User::find(auth()->user()->id);
        $user->password = Hash::make($request->password);
        $user->save();

        return to_route('user.change-credential.index')->with('success', 'Password has been changed successfully');
    }

    public function changeEmail(Request $request)
    {
        $this->validate($request,  [
            'email' => 'required|email|unique:users,email,' . auth()->user()->id
        ]);

        $user = User::find(auth()->user()->id);
        $user->email = $request->email;
        $user->save();

        return to_route('user.change-credential.index')->with('success', 'Email has been changed successfully');
    }
}
