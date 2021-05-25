@extends('layouts.basis')

@section('title-page')@parent {{$title}}@endsection

@section('content')
    <!--============== Модальное окно разрешения удаления ссылки =============================-->
{{--    <div class="form-link-delete">--}}
{{--        <div class="content-wrapper">--}}
{{--            <h1 class="title">Удалить ссылку?</h1>--}}
{{--            <div class="link-info"><p></p><span></span></div>--}}
{{--            <div class="btn-box">--}}
{{--                <span class="btn-yes">Да</span>--}}
{{--                <span class="btn-no">Нет</span>--}}
{{--            </div>--}}

{{--        </div>--}}
{{--    </div>--}}
    <!--=======================================================================================-->
    <div class="s-header">{{$message}}</div>
        <div class="link-list2">
{{--                @foreach($links as $link)--}}
{{--                    <div class="link" data-id="{{$link['id']}}" data-title="{{$link['title']}}">--}}
{{--                        <a href="{{$link['url']}}">{{$link['title']}}</a>--}}
{{--                        <span class="link-delete" >X</span>--}}
{{--                    </div>--}}
{{--                @endforeach--}}
        </div>
    <div class="zzz">
{{--        {{ $links->links('vendor.pagination.default') }}--}}
    </div>
    <div class="pagination-list"></div>
    <div class="file-h"></div>
@endsection
