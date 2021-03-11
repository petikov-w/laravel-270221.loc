<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function create() {
        $array_arg = ['message' => 'Это страница регистрации нового пользователя',
                      'title' => 'Страница регистрации'];
        return view('users.signup', $array_arg);
    }

    public function store(RegisterFormRequest $request) {
       $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
            ]);
            session()->flash('success', 'Регистрация прошла успешно!');
            Auth::login($user);

        return redirect()->route('home');
    }
}

