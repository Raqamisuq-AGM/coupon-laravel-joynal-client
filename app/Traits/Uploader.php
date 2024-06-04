<?php

namespace App\Traits;
use Illuminate\Support\Facades\Storage;

trait Uploader
{

    /**
     * Upload file
     *
     * @param $file
     * @param $path
     * @param $filename
     * @return string
     */
    public function upload($file, $path = 'uploads', $filename = null)
    {
        $filename = $filename ?? $file->getClientOriginalName();
        $filename = time() . '_'  . rand(5000, 5555555) . rand(9999, 99999). $filename;
        $file = Storage::disk('public')->putFileAs($path, $file, $filename); //Storage
        return "storage/$file";
    }


    /**
     * Delete file
     *
     * @param $path
     * @return bool
     */
    public function delete($path)
    {
        return Storage::disk('public')->delete($path);
    }
}
