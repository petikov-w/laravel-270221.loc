@php
//  Скрипты расположены в папке /public/js
    $source_dir = 'js/'
@endphp

<?php
//    $list_scripts = ['jquery-3.6.0.min.js','app.js'];
    $list_scripts = ['app.js'];
    foreach ($list_scripts as $script) {
?>
    <script src="{{ asset($source_dir.$script)}}"></script>
<?php
    }
?>
