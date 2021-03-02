<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactInfoUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Validator;
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

    public function store(ContactInfoUpdateRequest $req){
        $f1 = Contact::find(1);
        $f1 -> telefon = $req->input('telefon');
        $f1 -> email = $req->input('email');
        $f1 -> save();
        return redirect()->route('contacts');
    }


    private function changeArrItem(array $arr, $s1, string $s2) {
        foreach ($arr as $key => $a) {
            if ($key==$s1) {$arr[$key] = $s2;}
        }
        return $arr;
    }


}


