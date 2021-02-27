@php
    //  Стили расположены в папке /public/css
        $source_dir = 'css/';
@endphp

<?php
    $list_styles = ['style.css'];
    foreach ($list_styles as $style) {
?>
    <link href="{{ asset($source_dir.$style) }}" rel="stylesheet" >
<?php
    }
?>
