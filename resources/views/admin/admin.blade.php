<?php
use App\Models\Menu;
$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])
                      ->where('menu_type','admin')
                      ->where('parent',0)->toArray();
?>

@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    <?php dump(Route::currentRouteName()) ?>
    <div class="admin-panel">
        <div class="sidebar-left">
            <ul class="admin-menu">
                @foreach($menu as $item_menu)
                    <li class="admin-menu-item"><a href={{ route($item_menu['url'])}}>{{$item_menu['title']}}</a></li>
                @endforeach
            </ul>
        </div>
        <div class="content-area">
            @if (Route::currentRouteName()=='admin.contact.create')
                @include('layouts.form_contact')
            @elseif(Route::currentRouteName()=='theme.index')
                @include('layouts.form_theme')
            @elseif(Route::currentRouteName()=='users.index')
                @include('layouts.form_users')
            @elseif(Route::currentRouteName()=='theme.create')
                @include('layouts.form_theme_create')
            @elseif(Route::currentRouteName()=='theme.edit')
                @include('layouts.form_theme_update')
            @elseif(Route::currentRouteName()=='admin.statistic')
                @include('layouts.staistic')
            @endif
            @include('layouts.alerts')
        </div>
    </div>
@endsection

