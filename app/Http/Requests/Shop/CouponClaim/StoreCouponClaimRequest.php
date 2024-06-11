<?php

namespace App\Http\Requests\Shop\CouponClaim;

use Illuminate\Foundation\Http\FormRequest;

class StoreCouponClaimRequest extends FormRequest
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
            'coupon_code' => ['required', 'exists:coupons,code'],
            'phone' => ['required', 'exists:users,phone'],
        ];
    }
}
