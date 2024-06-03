<?php

namespace App\Helpers;

use Illuminate\Support\Facades\App;

class TranslationHelper
{
    public static function getTranslations($locale = null)
    {
        $locale = $locale ?: App::getLocale();
        $files = glob(resource_path("lang/{$locale}/*.php"));
        $translations = [];
        foreach ($files as $file) {
            $key = basename($file, '.php');
            $translations[$key] = require $file;
        }

        return $translations;
    }
}
