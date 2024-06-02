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

        $rules['role'] = ['nullable', 'in:admin,shop'];

        return $rules;
    }
}
