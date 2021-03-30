<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Validator;

class LinksController extends Controller
{

    public function index() {
        $array_arg = ['message' => 'Список ссылок',
            'title' => 'Страница ссылок'];

        return view('links', $array_arg);
    }


    public function create() {

    }

    public function store(Request $request){

    }


}


