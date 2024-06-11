<?php

namespace App\Http\Requests\Admin\Coupon;

use App\Traits\Uploader;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class StoreCouponRequest extends FormRequest
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
        return [
            'title' => ['required', 'string', 'max:255'],
            'short_description' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'image' => ['required', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
            'code' => ['required', 'string', 'max:255', 'unique:coupons,code'],
            'discount_type' => ['required', 'in:fixed,percentage'],
            'discount' => ['required', 'numeric'],
            'daily_limit' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
            'usage_limit' => ['required', 'numeric'],
            'valid_from' => ['required', 'date'],
            'valid_to' => ['required', 'date'],
            'shop_id' => ['required', 'exists:shops,id'],
            'status' => ['required', 'boolean'],
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated();
        // create timestamp value
        $data['valid_from'] = Carbon::parse($data['valid_from']);
        $data['valid_to'] = Carbon::parse($data['valid_to']);

        if (isset($data['image'])) {
            $data['image'] = $this->upload($data['image'], 'coupons');
        }

        return $data;
    }
}
