<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait Uploader
{
    /**
     * Upload file
     *
     * @return string
     */
    public function upload($file, $path = 'shop', $filename = null)
    {
        $filename = $filename ?? $file->getClientOriginalName();
        $filename = time().'_'.rand(5000, 5555555).rand(9999, 99999).$filename;
        // check upload folder exists
        $disk = Storage::disk('public');

        if (! $disk->exists($path)) {
            $disk->makeDirectory($path);
        }

        $disk->putFileAs($path, $file, $filename);

        return "/uploads/$path/$filename";
    }

    /**
     * Delete file
     *
     * @return bool
     */
    public function delete($path)
    {
        return Storage::disk('public')->delete($path);
    }
}
