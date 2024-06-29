<?php

namespace App\Http\Controllers\Admin\Shop;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Models\Shop;
use App\Models\ShopCategory;
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

    public function shopCategory()
    {

        $buttons = [
            [
                'title' => 'Create Category',
                'url' => route('admin.category.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Manage Category')->buttons($buttons);

        $categories = ShopCategory::latest()->paginate();

        return Inertia::render('Admin/Shop/Category/Index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function createShopCategory()
    {
        PageHeader::set()->title('Create Category')->buttons(
            [
                [
                    'title' => 'Back',
                    'url' => route('admin.category.index'),
                    'icon' => 'heroicons:chevron-left',
                ],
            ]
        );

        return Inertia::render('Admin/Shop/Category/Create');
    }

    public function storeShopCategory(Request $request)
    {
        $shop = new ShopCategory();
        $shop->category = $request->category;

        if ($request->hasFile('img')) {
            $logoName = time() . '.' . $request->img->getClientOriginalExtension();
            $request->img->move(public_path('uploads/shops'), $logoName);
            $shop->img = '/uploads/shops/' . $logoName;
        }

        $shop->save();

        return to_route('admin.category.index')->with('success', 'Category created successfully');
    }

    public function editShopCategory($id)
    {
        PageHeader::set()->title('Edit Category')->buttons(
            [
                [
                    'title' => 'Back',
                    'url' => route('admin.category.index'),
                    'icon' => 'heroicons:chevron-left',
                ],
            ]
        );

        $category = ShopCategory::find($id);

        return Inertia::render('Admin/Shop/Category/Edit', compact('category'));
    }

    public function updateShopCategory(Request $request)
    {
        $shop = ShopCategory::find($request->id);
        $shop->category = $request->category;

        if ($request->hasFile('img')) {
            $logoName = time() . '.' . $request->img->getClientOriginalExtension();
            $request->img->move(public_path('uploads/shops'), $logoName);
            $shop->img = '/uploads/shops/' . $logoName;
        }

        $shop->save();

        return to_route('admin.category.index')->with('success', 'Category updated successfully');
    }

    public function deleteShopCategory(Request $request, ShopCategory $category, $id)
    {
        $category = ShopCategory::find($id);
        $category->delete();

        return to_route('category.social.index')->with('success', 'Category deleted successfully');
    }
}
