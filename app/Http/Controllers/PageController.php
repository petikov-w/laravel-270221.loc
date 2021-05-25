<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\Theme;

class PageController extends Controller
{
    public function showPoligonPage(){
        $array_arg = ['message' => 'Это страница для работы с полигоном',
            'title' => 'Страница "Полигон"'];
        return view('poligon', $array_arg);
    }

    public function showCatalogPage(){
        $message = 'Это страница c каталогом ссылок';
        $title = 'Страница c каталогом ссылок';
        $linkList = Link::paginate(15);
        return view('catalog', compact('linkList', 'title', 'message'));
    }

    public function showHomePage(){
        return  view('home', ['message' => 'Это главная страница сайта',
            'title' => 'Главная страница']);
    }

    public function ShowLinksPage($id) {
            $title_theme = Theme::query()->where('id',$id)->value('title');
            return  view("links", ['message' => 'Это страница темы ',
                'title' => 'Страница ссылок на тему "'.$title_theme.'"',
                'current_theme' => $title_theme,
                'id_current_theme' => $id]);
    }
}


