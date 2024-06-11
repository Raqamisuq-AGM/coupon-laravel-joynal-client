<?php

namespace App\Http\Requests\Admin\SocialLink;

use Illuminate\Foundation\Http\FormRequest;

class StoreSocialIconRequest extends FormRequest
{
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
        return [
            "name"=> "required|string|max:255",
            "icon"=> "required|image|mimes:png,jpg,jpeg|max:2048",
            "link"=> "required|string|max:255",
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated();
        unset($data['icon']);
        return $data;
    }
}
