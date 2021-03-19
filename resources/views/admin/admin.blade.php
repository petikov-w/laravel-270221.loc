<?php
use App\Models\Menu;
$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','admin')->where('parent',0)->toArray();
?>

@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    <div class="admin-panel">
        <div class="sidebar-left">
            <ul class="admin-menu">
                @foreach($menu as $item_menu)
                    <li class="admin-menu-item"><a href={{$item_menu['url']}}>{{$item_menu['title']}}</a></li>
                @endforeach
            </ul>
        </div>

        <div class="content-area">
            <!--========================== ФОРМА ИЗМЕНЕНИЯ КОНТАКТНЫХ ДАННЫХ ===========================-->
            <div class="form-contact">
{{--                <div class="s-header">{{$message}}</div>--}}
                <form method="post" action="{{ route('admin.store') }}" class="form-dsg">
                    @csrf
                    <label for="telefon" class="form-label mtop0">Телефон</label>
                    <input name="telefon" id="telefon" type="text" class="form-input @error('telefon') @enderror"
                           value="{{ old('telefon') }}" placeholder="Введите телефон">
                    @error('telefon')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                    <label for="email" class="form-label">Адрес электронной почты</label>
                    <input name="email" id="email" type="text" class="form-input @error('email') is-invalid @enderror"
                           value="{{ old('email') }}" placeholder="Введите email">
                    @error('email')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                    <button type="submit" class="form-submit" >Сохранить</button>
                </form>
            </div>
            <!--=======================================================================================-->
        </div>
    </div>
@endsection

