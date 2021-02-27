@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    @php
       use App\Models\Theme;
        $list_themes = Theme:: get(['id', 'title', 'parent'])->where('parent',0)->toArray();
    @endphp

        <div class="s-header">{{$message}}</div>
        <div class="theme-list">
                @foreach($list_themes as $theme)
                    <div class="theme" data-attr={{$theme['id']}}>{{$theme['title']}}</div>
                @endforeach
        </div>
@endsection
