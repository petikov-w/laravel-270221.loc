<?php
    use App\Models\Theme;
    $title_theme  = Theme::get('title')->toArray();
//$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>
<!--========================== РАЗДЕЛ СТАТИСТИКИ ===========================-->
    <div class="z-section">
        <h2>Статистика сайта</h2>
    </div>



{{--    dd($title_theme);--}}
    @foreach ($title_theme as $value)
        <h3>{{$value['title']}}</h3>
    @endforeach



