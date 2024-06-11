<?php

namespace App\Http\Requests\Admin\Coupon;

class UpdateCouponRequest extends StoreCouponRequest
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

        $rules['code'] = ['required', 'string', 'max:255', 'unique:coupons,code,'.$this->coupon->id];

        return $rules;
    }
}
