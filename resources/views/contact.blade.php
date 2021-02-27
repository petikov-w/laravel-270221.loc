@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
        <div class="s-header">{{$message}}</div>
        <div class="contacts">
            <span class="sss">Телефон:</span>
            <a href="tel: {{$telefon}}"><span class="contact-info">{{$telefon}}</span></a>
        </div>
        <div class="contacts">
            <span class="sss">Email:</span>
            <a href="mailto: {{$email}}"><span class="contact-info">{{$email}}</span></a>
        </div>
@endsection
