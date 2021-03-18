<?php
use App\Models\Menu;
use App\Facades;
use Illuminate\Support\Facades\Auth;
$menu = Menu:: query()->get(['title', 'url','parent'])->where('parent',0)->toArray();
?>
{{--<div class="header">--}}

@section('logo')
{{--    <div class="logo">--}}
        @if (PetikovService::isHomePage())

            <div class="logo-footer-1s"><span class="st-f">P</span>etikov<span class="logo-footer-2s">
                                 <span class="st-f">S</span>tudio</span></div>
        @else
            <a href="{{'/'}}">
                <div class="logo-footer-1s"><span class="st-f">P</span>etikov<span class="logo-footer-2s">
                                <span class="st-f">S</span>tudio</span></div>
            </a>
        @endif
{{--</div>--}}
@show

<auth>
    <ul class="main-menu">
    @auth
        <div class="auth-box">
            <li class="menu-item"><a href="#">Copyright &copy; Petikov Studio 2020-2021</a></li>
            <li class="menu-item"><a href="{{ route('admin.create') }}">Панель администратора</a></li>
        </div>
    @endauth

    @guest
            <li class="menu-item"><a href="#">Copyright &copy; Petikov Studio 2020-2021</a></li>
    @endguest
    </ul>
</auth>


{{--</div>--}}


