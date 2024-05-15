<?php

namespace App\Http\Requests\Coupon;
use Carbon\Carbon;
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

        $rules['code'] = ['required', 'string', 'max:255', 'unique:coupons,code,'. $this->coupon->id];

        return array_merge($rules, [

        ]);
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated();
        // create timestamp value
        $data['valid_from'] = Carbon::parse($data['valid_from'])->timestamp;
        $data['valid_to'] = Carbon::parse($data['valid_to'])->timestamp;
        return $data;
    }
}
