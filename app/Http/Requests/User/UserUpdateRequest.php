<?php

namespace App\Http\Requests\User;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends UserStoreRequest
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

        $rules['email'] = ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$this->user->id];
        $rules['phone'] = ['required', 'regex:/^([0-9\s\-\+\(\)]*)$/', 'min:10', 'unique:users,phone,'.$this->user->id];

        $rules['status'] = ['required', 'boolean'];

        $rules['password'] = ['nullable', 'string', 'min:8', 'max:30'];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Email is required',
            'phone.required' => 'Phone is required',
            'phone.min' => 'Phone must be at least 10 characters',
            'phone.regex' => 'Phone must be a valid phone number',
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated();
        $data['password'] = Hash::make($data['password']);
        return $data;
    }
}
