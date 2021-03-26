<?php
    use App\Models\Theme;
    $title_theme  = Theme::get(['id', 'title'])->toArray();
?>
<!--========================== ФОРМА ИЗМЕНЕНИЯ ТЕМ ===========================-->
<div class="z-section">
    <h2>Работа с темами</h2>
</div>

<ul class="list-i">
    @foreach ($title_theme as $value)
        <li class="item-ts">
            {{$value['title']}}
            <div class="box-buttons">
                <div>
                    <form action="{{route('theme.destroy',['theme'=>$value['id']])}}" method="post" class="bth">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="button-delete">Удалить</button>
                    </form>
                </div>
                <div>
                    <form action="{{route('theme.edit',['theme'=>$value['id']])}}" method="get" class="bth">
                        @csrf
                        <button type="submit" class="button-edit">Изменить</button>
                    </form>
                </div>

            </div>
        </li>
    @endforeach
</ul>
<div class="new-theme"><a href="{{route('theme.create')}}">Создать новую тему</a></div>



