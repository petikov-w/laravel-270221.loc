<?php
use App\Models\Menu;
use App\Facades;
$menu = Menu:: query()->get(['title', 'url','parent'])->where('parent',0)->toArray();
?>
<div class="header">

@section('logo')
    <div class="logo">
        @if (PetikovService::isHomePage())
            <div class="logo-1s">Petikov<span class="logo-2s">Studio</span></div>
        @else
            <a href="{{'/'}}">
                <div class="logo-1s">Petikov<span class="logo-2s">Studio</span></div>
            </a>
        @endif
</div>
@show

    <nav>
        <ul class="main-menu">

            @foreach($menu as $item_menu)

                @if ($item_menu['url']=='/')
                    @if (PetikovService::isHomePage())
                        <li class="menu-item">{{$item_menu['title']}}</li>
                    @else
                        <li class="menu-item"><a href={{$item_menu['url']}}>{{$item_menu['title']}}</a></li>
{{--                        <a href={{$item_menu['url']}}><li class="menu-item">{{$item_menu['title']}}</li></a>--}}
                    @endif
                @else

                  <?php

                        $id_parent = Menu::query()->where('url', $item_menu['url'])->value('id');
                        $smenu = Menu:: query()->get(['title', 'url','parent'])->where('parent', $id_parent)->toArray();
                  ?>



{{--                    <a href="{{$item_menu['url']}}"><li class="menu-item">{{$item_menu['title']}}</li></a>--}}
                    <li class="menu-item"><a href="{{$item_menu['url']}}">{{$item_menu['title']}}</a>
                            <ul class="w2">
                                @foreach($smenu as $mi)
                                    <li class="w2i"><a href="{{$mi['url']}}">{{$mi['title']}}</a></li>
{{--                                    <li class="w2i">{{$mi['title']}}</li>--}}
                                @endforeach
                            </ul>
                    </li>
                @endif
            @endforeach

       </ul>
    </nav>
</div>


