<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function create() {
        $array_arg = ['message' => 'Это страница регистрации нового пользователя',
                      'title' => 'Страница регистрации'];
        return view('users.signup', $array_arg);
    }

    public function store(Request $request) {

    }
}
