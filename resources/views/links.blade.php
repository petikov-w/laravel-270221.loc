@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    <div class="s-header">{{$message}} "{{$current_theme}}"</div>
@endsection

