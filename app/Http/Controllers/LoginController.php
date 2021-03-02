<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function create() {
        $array_arg = ['message' => 'Это страница авторизации пользователей',
                      'title' => 'Страница авторизации пользователей'];
        return view('users.login', $array_arg);
    }

    public function store(Request $request) {

    }

}
