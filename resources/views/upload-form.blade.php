@extends('layouts.basis')

@section('title-page')@parent @endsection

@section('content')
    <form method="post" action="{{ route('upload_file') }}" enctype="multipart/form-data">
        <input name="_token" type="hidden" value="{{ csrf_token() }}">
        <input type="file" id="input__file" multiple name="file[]" class="hidden">
        <label for="input__file">Выберите файлы ссылок</label><br>
        <button type="submit">Загрузить</button>
    </form>
    <?php
//    $counter = 0;
//    foreach($_FILES as $value){
//        if (strlen($value['name'])){
//            $counter++;
//        }
//    }
//
//    echo $counter;
    ?>
@endsection




