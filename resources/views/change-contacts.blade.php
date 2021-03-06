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
    <!--========================== ФОРМА ИЗМЕНЕНИЯ КОНТАКТНЫХ ДАННЫХ ===========================-->
<div class="form-contact">
    <form method="post" action="{{ route('admin.store') }}" class="form-dsg">
        @csrf
        <label for="telefon" class="form-label">Телефон</label>
        <input name="telefon" id="telefon" type="text" class="form-input"
               value="{{$telefon}}" placeholder="Введите телефон">
        <label for="email" class="form-label">Адрес электронной почты</label>
        <input name="email" id="email" type="text" class="form-input @error('email') is-invalid @enderror"
               value="" placeholder="Введите email">
        @error('email')
             <div class="invalid-feedback">{{ $message }}</div>
        @enderror
        <button type="submit" class="form-submit" >Изменить</button>
    </form>
</div>
    <!--=======================================================================================-->
@endsection
