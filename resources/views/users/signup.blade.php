@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
<div class="form-auth">
    <div class="s-header">{{$message}}</div>

    <!--========================== ФОРМА РЕГИСТРАЦИИ НОВОГО ПОЛЬЗОВАТЕЛЯ ======================-->
    <div class="form">
        <form method="post" action="{{ route('signup.store') }}" class="form-dsg">
            @csrf
            <label for="name" class="form-label">Имя пользователя</label>
            <input name="name" id="name" type="text" class="form-input @error('name') is-invalid @enderror"
                   value="{{ old('name') }}" placeholder="Введите имя пользователя">
            @error('name')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
            <label for="email" class="form-label">Адрес электронной почты</label>
            <input name="email" id="email" type="text" class="form-input @error('email') is-invalid @enderror"
                   value="{{ old('email') }}" placeholder="Введите email">
            @error('email')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
            <label for="password" class="form-label">Пароль</label>
            <input name="password" id="password" type="password" class="form-input @error('password') is-invalid @enderror"
                   value="" placeholder="Введите пароль">
            @error('password')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
            <label for="password_confirmation" class="form-label">Подтвердите пароль</label>
            <input name="password_confirmation" id="password_confirmation" type="password" class="form-input"
                   value="" placeholder="Введите пароль ещё раз">
            <button type="submit" class="form-submit" >Регистрация</button>
        </form>
    </div>
    <!--=======================================================================================-->
</div>
@endsection

