@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection


@section('content')
        <div class="s-header">{{$message}}</div>
{{--        <div class="file-h"></div>--}}
        @include('layouts.alerts')
@endsection
