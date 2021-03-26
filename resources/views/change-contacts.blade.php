@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')



    <!--========================== ФОРМА ИЗМЕНЕНИЯ КОНТАКТНЫХ ДАННЫХ ===========================-->
<div class="form-contact">
    <div class="s-header"><p>{{$message}}</p></div>
    <form method="post" action="{{ route('Admin.store') }}" class="form-dsg">
        @csrf
        <label for="telefon" class="form-label">Телефон</label>
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
        <button type="submit" class="form-submit" >Изменить</button>
    </form>
</div>
    <!--=======================================================================================-->
@endsection
