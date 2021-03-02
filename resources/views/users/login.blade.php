@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    <div class="s-header">{{$message}}</div>

    <div class="errors-box">
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{$error}}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    </div>
    <!--========================== ФОРМА АВТОРИЗАЦИИ ПОЛЬЗОВАТЕЛЕЙ ===========================-->
    <div class="form">
        <form method="post" action="{{ route('login.store') }}" class="form-dsg">
            @csrf
            <label for="email" class="form-label">Адрес электронной почты</label>
            <input name="email" id="email" type="text" class="form-input"
                   value="" placeholder="Введите email">
            <label for="password" class="form-label">Пароль</label>
            <input name="password" id="password" type="password" class="form-input"
                   value="" placeholder="Введите пароль">
            <button type="submit" class="form-submit" >Войти</button>
        </form>
    </div>
    <!--=======================================================================================-->


@endsection

