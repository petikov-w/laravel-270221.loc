@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
        <div class="s-header">{{$message}}</div>
        @if ($errors->any())
{{--            dd({{$errors->any()}})--}}
            <div class="alert">
                <ul class="alert">
                    @foreach($errors->all() as $error)
                        <li class="alert">{{$error}}</li>
                    @endforeach
                </ul>
            </div>
        @endif

{{--        {{$errors}}--}}

        <form method="post" action="admins">
            @csrf
            <label>Телефон</label>
            <input name="telefon" id="telefon" type="text" placeholder="Введите телефон">
            <button type="submit">Изменить</button>
        </form>
@endsection

