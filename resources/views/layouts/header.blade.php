<?php
use App\Models\Menu;
use App\Facades;
use Illuminate\Support\Facades\Auth;
$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>

<div class="header">

<nav>
{{--    Блок логотипа--}}
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

{{--    Блок главного меню--}}
        <ul class="main-menu">
            @foreach($menu as $item_menu)

                @if ($item_menu['url']=='/')
                    @if (PetikovService::isHomePage())
                        <li class="main-menu-item hidden">{{$item_menu['title']}}</li>
                    @else
                        <li class="main-menu-item"><a href={{$item_menu['url']}}>{{$item_menu['title']}}</a></li>
                    @endif
                @else
                    <li class="main-menu-item"><a href="{{$item_menu['url']}}">{{$item_menu['title']}}</a></li>
                @endif
            @endforeach
       </ul>
</nav>

{{--    Блок авторизации--}}
    <auth>
        <ul class="main-menu">
            @auth
                <div class="auth-box">
                    <li class="main-menu-item"><a href="{{ route('login.logout') }}">Выйти</a></li>
                    <li class="main-menu-item ssd">{{ auth()->user()->name}}</li>
                </div>
            @endauth

            @guest
                <li class="main-menu-item"><a href="{{ route('login.create') }}">Войти</a></li>
            @endguest

        </ul>
    </auth>
</div>


