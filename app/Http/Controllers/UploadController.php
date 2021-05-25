<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Link;
use App\Models\Theme;

class UploadController extends Controller
{

    public function getLinks() {
        $links = Link::paginate(10);
        return response()->json($links);
    }

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
    //============================================
    //============= Удаление ссылки ==============
    //============================================

    public function deleteLink($id) {
        $link = Link::destroy($id);

        if (!$link) {
            return response()->json([
                "status" => false,
                "message" => "Link not found"
            ])->setStatusCode(404,"Link not found");
        } else {
            return response()->json([
                "status" => true,
                "message" => "Link is delete"
            ])->setStatusCode(200,"Link is delete");
        }

        //session()->flash('success', 'Ссылка успешно удалена');
       // return redirect()->back();
    }
    //============================================
    //=========== Добавление новых ссылок ========
    //============================================
    public function upload(Request $request)
    {
       $west = json_decode($request->getContent(), true);
       $pest = $west['linksInfo'];


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
