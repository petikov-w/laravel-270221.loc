<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewThemeFormRequest extends FormRequest
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
            'theme' => 'required|unique:themes,title',
        ];
    }

    public function messages()
    {
        return [
            'theme.required' => 'Поле не должно быть пустым',
            'theme.unique' => 'Такая тема уже существует',
        ];
    }
}
