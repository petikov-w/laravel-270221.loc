<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;


class ConController extends Controller
{
    public function create() {
        return view('admins');
    }

//    public function store(\Illuminate\Http\Request $req){
//        $req->validate([
//            'telefon' => 'required',
//            'email' => 'required|email'
//        ]);
//        $this->validate($req,[
//            'telefon' => 'required',
//            'email' => 'required|email'
//        ]);
//        $f1 =Contact::find(1);
//        $f1->telefon = $req->input('telefon');
//        $f1->email = $req->input('email');
//        $f1->save();
//              $validation = $req->validate([
//            'telefon' => 'required|match:/[0-9]+/' ,
//            'email' => 'required|email'
//        ]);


        //return redirect()->route('contacts');

//     return view()->make('contact', $this->array_arg);
//    }

    //============================================================================================


    public function store(\Illuminate\Http\Request $req){
        $req->validate([
            'telefon' => 'required'
        ]);

//        return $req->input();
        return redirect()->route('home');

    }

    //============================================================================================
}

