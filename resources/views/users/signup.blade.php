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
    <!--========================== ФОРМА РЕГИСТРАЦИИ НОВОГО ПОЛЬЗОВАТЕЛЯ ======================-->
    <div class="form">
        <form method="post" action="{{ route('signup.store') }}" class="form-dsg">
            @csrf
            <label for="name" class="form-label">Имя пользователя</label>
            <input name="name" id="name" type="text" class="form-input"
                   value="" placeholder="Введите имя пользователя">
            <label for="email" class="form-label">Адрес электронной почты</label>
            <input name="email" id="email" type="text" class="form-input"
                   value="" placeholder="Введите email">
            <label for="password" class="form-label">Пароль</label>
            <input name="password" id="password" type="password" class="form-input"
                   value="" placeholder="Введите пароль">
            <label for="password_confirmation" class="form-label">Подтвердите пароль</label>
            <input name="password_confirmation" id="password_confirmation" type="password" class="form-input"
                   value="" placeholder="Введите пароль ещё раз">
            <button type="submit" class="form-submit" >Регистрация</button>
        </form>
    </div>
    <!--=======================================================================================-->

@endsection

