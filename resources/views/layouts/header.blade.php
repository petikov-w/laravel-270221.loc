<?php
use App\Models\Menu;
use App\Facades;
$menu = Menu:: query()->get(['title', 'url','parent'])->where('parent',0)->toArray();
?>
<div class="header">
    <nav>
@section('logo')
    <div class="logo">
        @if (PetikovService::isHomePage())
            <div class="logo-1s"><span class="st">P</span>etikov<span class="logo-2s">
                                 <span class="st">S</span>tudio</span></div>
        @else
            <a href="{{'/'}}">
                <div class="logo-1s"><span class="st">P</span>etikov<span class="logo-2s">
                                <span class="st">S</span>tudio</span></div>
            </a>
        @endif
</div>
@show


        <ul class="main-menu">

            @foreach($menu as $item_menu)

                @if ($item_menu['url']=='/')
                    @if (PetikovService::isHomePage())
                        <li class="menu-item hidden">{{$item_menu['title']}}</li>
                    @else
                        <li class="menu-item"><a href={{$item_menu['url']}}>{{$item_menu['title']}}</a></li>
                    @endif
                @else

                  <?php

                        $id_parent = Menu::query()->where('url', $item_menu['url'])->value('id');
                        $smenu = Menu:: query()->get(['title', 'url','parent'])
                                        ->where('parent', $id_parent)->toArray();
                  ?>

                    <li class="menu-item"><a href="{{$item_menu['url']}}">{{$item_menu['title']}}</a>
                            <ul class="w2">
                                @foreach($smenu as $mi)
                                    <li class="w2i"><a href="{{$mi['url']}}">{{$mi['title']}}</a></li>

                                @endforeach
                            </ul>
                    </li>
                @endif
            @endforeach

       </ul>
    </nav>

    <auth>
        <ul class="main-menu">
            <li class="menu-item"><a href="{{ route('login.create') }}">Войти</a></li>
        </ul>
    </auth>
</div>


