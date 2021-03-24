<?php
    use App\Models\Theme;
    $title_theme  = Theme::get('title')->sort()->toArray();
//$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>
<!--========================== РАЗДЕЛ СТАТИСТИКИ ===========================-->
    <div class="z-section">
        <h2>Статистика сайта</h2>
    </div>

<ul class="list-i">
    @foreach ($title_theme as $value)
        <li>{{$value['title']}}</li>
    @endforeach
</ul>



