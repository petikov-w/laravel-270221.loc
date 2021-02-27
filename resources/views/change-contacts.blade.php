@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')

    <div class="s-header">{{$message}}</div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="alert">
                @foreach($errors->all() as $error)
                    <li class="alert">{{$error}}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <!--========================== ФОРМА ИЗМЕНЕНИЯ КОНТАКТНЫХ ДАННЫХ ===========================-->

           <form method="post" action="{{ route('admin.store') }}" class="form-dsg">
               @csrf
               <label for="telefon" class="form-label">Телефон</label>
{{--               <input name="telefon" id="telefon" type="text" class="form-input" value="" placeholder="Введите телефон">--}}
               <input name="telefon" id="telefon" type="text" class="form-input" value="{{$telefon}}" placeholder="Введите телефон">
               <label for="email" class="form-label">Адрес электронной почты</label>
{{--               <input name="email" id="email" type="text" class="form-input" value="" placeholder="Введите email">--}}
               <input name="email" id="email" type="text" class="form-input" value="{{$email}}" placeholder="Введите email">
               <button type="submit" class="form-submit" >Изменить</button>
            </form>

    <!--=======================================================================================-->
@endsection
