<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:5'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле не должно быть пустым',
            'email.required' => 'Поле не должно быть пустым',
            'email.email' => 'Поле не является адресом электронной почты',
            'email.unique' => 'Пользователь с таким email уже зарегистрирован',
            'password.required' => 'Поле не должно быть пустым',
            'password.min' => 'Поле должно содержать 5 и более символов',
            'password.confirmed' => 'Пароли не совпадают'
        ];
    }
}
