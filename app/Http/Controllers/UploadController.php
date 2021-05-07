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
           if ($pest[$i]['name']) {
               $links = Link::firstOrCreate(['url' => $pest[$i]['url']],['title' => $pest[$i]['name']]);
           }
       }
       return response()->json([
           "status" => true,
           "links" => $links,
       ])->setStatusCode(201,"Links is created");

//        return view('home', ['message' => 'Это главная страница сайта',
//            'title' => 'Главная страница']);
    }
}
