<?php

namespace App\Providers;

use App\Helpers\TranslationHelper;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'translations' => TranslationHelper::getTranslations(),
            'locale' => App::getLocale(),
        ]);
    }
}
