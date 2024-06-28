<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Helpers\PageHeader;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function changeCredentialView()
    {
        PageHeader::set()->title('Change Password')->buttons([
            [
                'title' => 'Change Password',
                'url' => route('admin.change-password.store'),
                'icon' => 'heroicons:edit',
            ],
        ]);

        $user = auth()->user();

        return inertia('Admin/Profile/ChangeCredential', \compact('user'));
    }

    public function changePassword(Request $request)
    {
        $this->validate($request,  [
            'password' => 'required|confirmed|min:6'
        ]);

        $user = User::find(auth()->user()->id);
        $user->password = Hash::make($request->password);
        $user->save();

        return to_route('admin.change-credential.index')->with('success', 'Password has been changed successfully');
    }

    public function changeEmail(Request $request)
    {
        $this->validate($request,  [
            'email' => 'required|email|unique:users,email,' . auth()->user()->id
        ]);

        $user = User::find(auth()->user()->id);
        $user->email = $request->email;
        $user->save();

        return to_route('admin.change-credential.index')->with('success', 'Email has been changed successfully');
    }
}
