@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    <div class="form-auth">
        <div class="s-header">{{$message}}</div>

{{--        <div class="errors-box">--}}
{{--            @if ($errors->any())--}}
{{--                <div class="alert alert-danger">--}}
{{--                    <ul>--}}
{{--                        @foreach($errors->all() as $error)--}}
{{--                            <li>{{$error}}</li>--}}
{{--                        @endforeach--}}
{{--                    </ul>--}}
{{--                </div>--}}
{{--            @endif--}}
{{--        </div>--}}
        <!--========================== ФОРМА АВТОРИЗАЦИИ ПОЛЬЗОВАТЕЛЕЙ ===========================-->
        <div class="form">
            <form method="post" action="{{ route('login.store') }}" class="form-dsg">
                @csrf
                <label for="email" class="form-label">Адрес электронной почты</label>
                <input name="email" id="email" type="text" class="form-input"
                       @error('email') is-invalid  @enderror value="{{ old('email') }}" placeholder="Введите email">
                @error('email')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
                <label for="password" class="form-label">Пароль</label>
                <input name="password" id="password" type="password" class="form-input"
                       value="" placeholder="Введите пароль">
                <button type="submit" class="form-submit" >Войти</button>
            </form>
            <p>У Вас ещё нет учетной записи?<br>
               <span class="reg"><a href="{{ route('signup.create') }}">Зарегистрируйтесь</a></span>
            </p>

        </div>
        <!--=======================================================================================-->
    </div>
@endsection

