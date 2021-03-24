<?php
    use App\Models\Theme;
    $title_theme  = Theme::get(['id', 'title'])->toArray();
//$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>
<!--========================== ФОРМА ИЗМЕНЕНИЯ ТЕМ ===========================-->
<div class="z-section">
    <h2>Работа с темами</h2>
</div>

<ul class="list-i">
    @foreach ($title_theme as $value)

        <li class="item-ts">
            {{$value['title']}} --- {{$value['id']}}
            <form action="" method="">
                @csrf
                @method('DELETE')
                <button type="submit" class="button-delete">Удалить</button>
            </form>
        </li>
    @endforeach
</ul>





{{--Заготовка формы    --}}

{{--     <formmethod="post" action="{{ route('admin.theme.store') }}" class="form-dsg">--}}
{{--        @csrf--}}
{{--        <label for="themes" class="form-label mtop0">Название темы</label>--}}
{{--        <select name="themes" id="themes" type="text" class="list-themes" @error('themes') @enderror>--}}
{{--            @foreach ($title_theme as $value)--}}
{{--                <option>{{$value['title']}}</option>--}}
{{--            @endforeach--}}
{{--        </select>--}}
{{--        @error('themes')--}}
{{--        <div class="invalid-feedback">{{ $message }}</div>--}}
{{--        @enderror--}}
{{--        <label>Добавить<input type="radio" name="time" value="yes" checked></label>--}}
{{--        <label>Изменить<input type="radio" name="time" value="no"></label>--}}
{{--        <label>Удалить<input type="radio" name="time" value="no"></label>--}}
{{--        <button type="submit" class="form-submit" >Сохранить</button>--}}
{{--    </form>--}}

