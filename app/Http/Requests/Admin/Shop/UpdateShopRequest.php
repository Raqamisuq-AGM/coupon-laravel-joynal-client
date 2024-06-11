<?php

namespace App\Http\Requests\Admin\Shop;

class UpdateShopRequest extends StoreShopRequest
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
        $rules = parent::rules();

        $rules['image'] = ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:2048'];

        return $rules;
    }
}
