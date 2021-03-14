<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginFormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function create() {
        $array_arg = ['message' => 'Это страница авторизации пользователей',
                      'title' => 'Страница авторизации пользователей'];
        return view('users.login', $array_arg);
    }

    public function store(LoginFormRequest $request) {
//        dd($request->all());
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password ]))
            {
                return redirect()->route('home');
            }
        else
            {
                return redirect()->back();
            }
    }


    public function logout() {
        Auth::logout();
        return redirect()->route('login.create');
    }
}
