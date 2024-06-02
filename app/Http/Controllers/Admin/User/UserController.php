<?php

namespace App\Http\Controllers\Admin\User;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $overviews = [
            [
                'title' => 'Total Users',
                'icon' => 'heroicons:user-group',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-primary-500',
                'textColor' => 'text-slate-500',
                'value' => User::whereRelation('roles', 'name', '!=', 'user')->count(),
            ],
            [
                'title' => 'Total Active Users',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-success-500 bg-opacity-20 text-success-500',
                'textColor' => 'text-slate-500',
                'value' => User::whereRelation('roles', 'name', '!=', 'user')->active()->count(),
            ],
            [
                'title' => 'Total InActive Users',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-danger-500 bg-opacity-20 text-danger-500',
                'textColor' => 'text-slate-500',
                'value' => User::whereRelation('roles', 'name', '!=', 'user')->inactive()->count(),
            ],
        ];

        $buttons = [
            [
                'title' => 'Create User',
                'url' => route('admin.users.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Coupons')->buttons($buttons);

        $users = User::whereRelation('roles', 'name', '!=', 'user')->paginate();

        return Inertia::render('Admin/User/Index', compact('users', 'overviews'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        PageHeader::set()->title('New User')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.users.index'),
                'icon' => 'heroicons:arrow-left',
            ]
        ]);

        return Inertia::render('Admin/User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserStoreRequest $request)
    {
         DB::beginTransaction();
        try {
            $user = User::create($request->validated());
            // role as admin
            $user->assignRole($request->role);

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with('error', $th->getMessage());
        }

        return to_route('admin.users.index')->with('success', 'User created successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        PageHeader::set()->title('Edit User')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.users.index'),
                'icon' => 'heroicons:arrow-left',
            ]
        ]);

        return Inertia::render('Admin/User/Edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update($request->validated());
        // assign role
        if ($request->role) {
            $user->assignRole($request->role);
        }

        return to_route('admin.users.index')->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'User deleted successfully');
    }
}
