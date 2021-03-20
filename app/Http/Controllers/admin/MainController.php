<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactInfoUpdateRequest;
use App\Models\Contact;
use Illuminate\Http\Request;


class MainController extends Controller
{
    public function index() {
        $array_arg = ['message' => 'Это панель админстратора',
            'title' => 'Панель администратора'];
        return view('admin.admin', $array_arg);
    }

    public function create_contact_form() {
        $array_arg = ['message' => 'Это панель админстратора',
            'title' => 'Панель администратора'];
        return view('admin.admin', $array_arg);
    }

    public function store_contact_form(ContactInfoUpdateRequest $request){
        $f1 = Contact::find(1);
        $f1->telefon = $request->input('telefon');
        $f1->email = $request->input('email');
        $f1->save();
        $request = session()->flash('success', 'Контактные данные успешно сохранены.');
        return redirect()->route('home');
    }

    public function create_theme_form() {
        $array_arg = ['message' => 'Это панель админстратора',
            'title' => 'Панель администратора'];
        return view('admin.admin', $array_arg);
    }

    public function store_theme_form(ContactInfoUpdateRequest $request){
//        $f1 = Contact::find(1);
//        $f1->telefon = $request->input('telefon');
//        $f1->email = $request->input('email');
//        $f1->save();
//        $request = session()->flash('success', 'Контактные данные успешно сохранены.');
        return redirect()->route('home');
    }

}


