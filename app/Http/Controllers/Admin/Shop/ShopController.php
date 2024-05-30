<?php

namespace App\Http\Controllers\Admin\Shop;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\ShopStoreRequest;
use App\Http\Requests\Shop\ShopUpdateRequest;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $overviews = [
            [
                'title' => 'Total Shops',
                'icon' => 'heroicons:user-group',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-primary-500',
                'textColor' => 'text-slate-500',
                'value' => User::shop()->count(),
            ],
            [
                'title' => 'Total Active Shops',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-success-500 bg-opacity-20 text-success-500',
                'textColor' => 'text-slate-500',
                'value' => User::shop()->active()->count(),
            ],
            [
                'title' => 'Total InActive Shops',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-danger-500 bg-opacity-20 text-danger-500',
                'textColor' => 'text-slate-500',
                'value' => User::shop()->inactive()->count(),
            ],
        ];

        $buttons = [
            [
                'title' => 'Create Shop',
                'url' => route('admin.shops.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Coupons')->buttons($buttons);

        $shops = User::shop()->paginate();

        return Inertia::render('Admin/Shop/Index', compact('shops', 'overviews'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        PageHeader::set()->title('New Shop')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.shops.index'),
                'icon' => 'heroicons:arrow-left',
            ]
        ]);

        return Inertia::render('Admin/Shop/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ShopStoreRequest $request)
    {
         DB::beginTransaction();
        try {
            $user = User::create($request->validated());
            // role as shop
            $user->assignRole('shop');

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with('error', $th->getMessage());
        }

        return to_route('admin.shops.index')->with('success', 'User created successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $shop)
    {
        PageHeader::set()->title('Edit Shop')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.shops.index'),
                'icon' => 'heroicons:arrow-left',
            ]
        ]);

        return Inertia::render('Admin/Shop/Edit', compact('shop'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ShopUpdateRequest $request, User $shop)
    {
        $shop->update($request->validated());

        return to_route('admin.shops.index')->with('success', 'Shop updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $shop)
    {
        $shop->delete();

        return back()->with('success', 'Shop deleted successfully');
    }
}
