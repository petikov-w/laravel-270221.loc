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
       $west = json_decode($request->getContent(), true);
       $pest = $west['linksInfo'];

       $huh = [];
       for ($i=0; $i< count($pest); $i++) {
           array_push($huh,$pest[$i]['name']);
       }
       dd($huh);

//        if ($request->name) {
//            $createLink = Link::firstOrCreate(['url' => $request->url],
//                ['title' => $request->name]);
//        }

//        return view('home', ['message' => 'Это главная страница сайта',
//            'title' => 'Главная страница']);
    }
}
