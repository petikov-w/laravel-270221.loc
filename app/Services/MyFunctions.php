<?php


namespace App\Services;
use App\Models\Menu;

class MyFunctions
{
    public function isHomePage() {
        return (substr_count(substr(url()->current(), strpos(url()->current(),'//')+2),'/')==0) ? true : false ;
    }
    public function currentUrl() {
        return url()->current() ;
    }

    public function sds($s1) {
        $id_parent = Menu::query()->where('url', $s1)->value('id');
        $smenu = Menu:: query()->get(['title', 'url','parent'])->where('parent', $id_parent)->toArray();
        return $smenu;
    }

}
