<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\PageHeader;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SocialLink as SL;
use App\Models\SocialIcon;
use App\Traits\Uploader;
use Inertia\Inertia;

class SocialIconController extends Controller
{
    use Uploader;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $buttons = [
            [
                'title' => 'Create Social Link',
                'url' => route('admin.social.create'),
                'icon' => 'heroicons:plus',
            ],
        ];

        PageHeader::set()->title('Social Links')->buttons($buttons);

        $socials = SocialIcon::latest()->paginate();

        return Inertia::render('Admin/SocialLink/Index', compact('socials'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        PageHeader::set()->title('Create Social Link')->buttons(
            [
                [
                    'title' => 'Back',
                    'url' => route('admin.social.index'),
                    'icon' => 'heroicons:chevron-left',
                ],
            ]
        );

        return Inertia::render('Admin/SocialLink/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SL\StoreSocialIconRequest $request)
    {
        $social = SocialIcon::create($request->validated());

        if ($request->icon) {
            $social->icon = $this->upload($request->icon, 'social_icons');
            $social->save();
        }

        return to_route('admin.social.index')->with('success', 'Social Link created successfully');
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SocialIcon $social)
    {
        PageHeader::set()->title('Edit Social Link')->buttons(
            [
                [
                    'title' => 'Back',
                    'url' => route('admin.social.index'),
                    'icon' => 'heroicons:chevron-left',
                ],
            ]
        );

        return Inertia::render('Admin/SocialLink/Edit', compact('social'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SL\UpdateSocialIconRequest $request, SocialIcon $social)
    {
        $social->update($request->validated());

        if ($request->icon) {
            if ($social->icon) {
                $this->delete($social->icon);
            }
            $social->icon = $this->upload($request->icon, 'social_icons');
            $social->save();
        }

        return to_route('admin.social.index')->with('success', 'Social Link updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SocialIcon $social)
    {
        if ($social->icon) {
            $this->delete($social->icon);
        }
        $social->delete();

        return to_route('admin.social.index')->with('success', 'Social Link deleted successfully');
    }
}
