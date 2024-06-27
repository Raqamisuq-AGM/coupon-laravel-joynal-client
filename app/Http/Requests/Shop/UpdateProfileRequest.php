<?php

namespace App\Http\Requests\Shop;

use App\Traits\Uploader;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    use Uploader;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules['name'] = ['required', 'string', 'max:255'];
        $rules['image'] = ['nullable', 'sometimes', 'image', 'mimes:jpeg,jpg,png,gif', 'max:2048'];
        return $rules;
    }
}
