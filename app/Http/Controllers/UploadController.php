<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Link;
use App\Models\Theme;

class UploadController extends Controller
{
    public function getForm()
    {
        return view('upload-form');
    }

    public function getThemes()
    {
        $themes = Theme::all();
        return response()->json($themes);
    }

    public function getTheme($id)
    {
        $theme = Theme::find($id);
        if (!$theme) {
            return response()->json(['status' => false, 'message' => 'Тема не найдена'])
                ->setStatusCode(404, 'Theme Not Found');
        }
        return response()->json($theme);
    }

    public function upload(Request $request)
    {

            //$request_data = $request->only(['name','url']);
            $request_data = $request->all();
            dd($request_data['name']);
//        if ($request->name) {
//            $createLink = Link::firstOrCreate(['url' => $request->url],
//                ['title' => $request->name]);
//        }
//     dd($request);
//        return view('home', ['message' => 'Это главная страница сайта',
//            'title' => 'Главная страница']);
    }
}
