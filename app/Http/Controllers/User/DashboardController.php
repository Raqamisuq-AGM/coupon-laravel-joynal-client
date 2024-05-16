<?php

namespace App\Http\Controllers\User;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
         $overviews = [
            [
                'title' => 'Total Users',
                'icon' => 'heroicons:user-group',
                'iconBgColor' => 'bg-primary-500 bg-opacity-20 text-primary-500',
                'textColor' => 'text-slate-500',
                'value' => '2000',
            ],
            [
                'title' => 'Total Orders',
                'icon' => 'heroicons:shopping-bag',
                'iconBgColor' => 'bg-slate-500 bg-opacity-20 text-slate-500',
                'textColor' => 'text-slate-500',
                'value' => '2000',
            ],
            [
                'title' => 'Total Products',
                'icon' => 'heroicons:academic-cap',
                'iconBgColor' => 'bg-info-500 bg-opacity-20 text-info-500',
                'textColor' => 'text-slate-500',
                'value' => '100',
            ],
            [
                'title' => 'Total Sales',
                'icon' => 'heroicons:squares-2x2-solid',
                'iconBgColor' => 'bg-indigo-500 bg-opacity-20 text-indigo-500',
                'textColor' => 'text-slate-500',
                'value' => '20',
            ],
        ];

        PageHeader::set()->title('User Dashboard');;

        return Inertia::render('User/Dashboard', [
            'overviews' => $overviews,
        ]);
    }
}
