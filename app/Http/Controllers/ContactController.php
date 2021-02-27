<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use App\Models\Contact;

class ContactController extends Controller
{

   private $scontacts;
   private $array_arg;

    public function __construct()
    {
        $this->scontacts = Contact:: query()->get(['id', 'telefon', 'email'])->where('id',1)->toArray();
        $this->array_arg = ['message' => 'Наши контакты: ',
            'telefon' => $this -> scontacts[0]['telefon'],
            'email' => $this -> scontacts[0]['email'],
            'title' => 'Страница контактов'];
    }


    public function index() {
        return view('contact', $this->array_arg);
    }


    public function create() {
        $this->array_arg = $this->changeArrItem($this->array_arg,'message','Это страница c формой для изменения контактной информации');
        $this->array_arg = $this->changeArrItem($this->array_arg,'title','Страница контактной информации');
        return view('change-contacts', $this->array_arg);
    }

    public function store(\Illuminate\Http\Request $req){
    //        $validation = $req->validate([
        $req->validate([
            'telefon' => 'required',
            'email' => 'required|email'
        ]);
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


        return redirect()->route('contacts');

     //return view()->make('contact', $this->array_arg);
    }

    //============================================================================================


    public function create2() {
        $this->array_arg = $this->changeArrItem($this->array_arg,'message','Это учебная страница c формой');
        $this->array_arg = $this->changeArrItem($this->array_arg,'title','Страница c формой');
        return view('admins', $this->array_arg);
    }

    public function store2(\Illuminate\Http\Request $req){
//        dd($req);

        $req->validate([
            'telefon' => 'required'
        ]);

        return $req->input();

    }

    //============================================================================================

    private function changeArrItem(array $arr, $s1, string $s2) {
        foreach ($arr as $key => $a) {
            if ($key==$s1) {$arr[$key] = $s2;}
        }
        return $arr;
    }


}


