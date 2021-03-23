@php
//  Скрипты расположены в папке /public/js
    $source_dir = 'js/'
@endphp

<?php
    $list_scripts = ['app.js'];
    foreach ($list_scripts as $script) {
?>
    <script src="{{ asset($source_dir.$script)}}"></script>
<?php
    }
?>
