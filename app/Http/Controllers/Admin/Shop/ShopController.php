<?php

namespace App\Http\Controllers\Admin\Shop;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\StoreShopRequest;
use App\Http\Requests\Shop\UpdateShopRequest;
use App\Models\Shop;
use App\Models\User;
use App\Traits\Uploader;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ShopController extends Controller
{
    use Uploader;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $overviews = [
            [
                'title' => 'Total Shops ',
                'icon' => 'heroicons:user-group',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-primary-500',
                'textColor' => 'text-slate-500',
                'value' => Shop::count(),
            ],
            [
                'title' => 'Total Active Shops',
                'icon' => 'heroicons:check',
                'iconBgColor' => 'bg-success-500 bg-opacity-20 text-success-500',
                'textColor' => 'text-slate-500',
                'value' => Shop::active()->count(),
            ],
            [
                'title' => 'Total InActive Shops',
                'icon' => 'heroicons:exclamation-circle',
                'iconBgColor' => 'bg-danger-500 bg-opacity-20 text-danger-500',
                'textColor' => 'text-slate-500',
                'value' => Shop::inactive()->count(),
            ],
        ];

        $buttons = [
            [
                'title' => 'Create Shop',
                'url' => route('admin.shops.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Shops')->buttons($buttons);

        $shops = Shop::withCount('users as total_users')->latest()->paginate();

        $users = User::shop()
            ->select('id as value', 'name as label')
            ->latest()
            ->get();

        return Inertia::render('Admin/Shop/Index', compact('shops', 'overviews', 'users'));
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
            ],
        ]);

        $users = User::shop()
            ->select('id as value', 'name as label')
            ->get();

        return Inertia::render('Admin/Shop/Create', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreShopRequest $request)
    {
        try {
            DB::beginTransaction();
            $shop = Shop::create($request->validated());

            if ($request->user_id) {
                $shop->users()->attach($request->user_id);
            }
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();

            return back()->with('error', $ex->getMessage());
        }

        return to_route('admin.shops.index')->with('success', 'Shop created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Shop $shop)
    {
        PageHeader::set()->title($shop->name)->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.shops.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        return Inertia::render('Admin/Shop/Show', compact('shop'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shop $shop)
    {
        PageHeader::set()->title('Edit Shop')->buttons([
            [
                'title' => 'Back',
                'url' => route('admin.shops.index'),
                'icon' => 'heroicons:arrow-left',
            ],
        ]);

        $users = User::shop()
            ->select('id as value', 'name as label')
            ->get();

        return Inertia::render('Admin/Shop/Edit', compact('shop', 'users'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateShopRequest $request, Shop $shop)
    {
        $shop->update($request->validated());

        if ($request->user_id) {
            $shop->users()->sync($request->user_id);
        }

        return to_route('admin.shops.index')->with('success', 'Shop updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop)
    {
        if ($shop->image) {
            $this->delete($shop->image);
        }

        $shop->users()->detach();
        $shop->delete();

        return back()->with('success', 'Shop deleted successfully');
    }
}
