<?php
    use App\Models\Theme;
    $title_theme  = Theme::get('title')->toArray();
//$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>
<!--========================== ФОРМА ИЗМЕНЕНИЯ ТЕМ ===========================-->
<div class="z-section">
    <h2>Работа с темами</h2>
</div>


{{--    dd($title_theme);--}}
<ul class="list-themes">
    @foreach ($title_theme as $value)
        <li>{{$value['title']}}</li>
    @endforeach
</ul>



{{--Заготовка формы    --}}
{{--    <form method="post" action="{{ route('admin.contact-store') }}" class="form-dsg">--}}
{{--        @csrf--}}
{{--        <label for="telefon" class="form-label mtop0">Телефон</label>--}}
{{--        <input name="telefon" id="telefon" type="text" class="form-input @error('telefon') @enderror"--}}
{{--               value="{{ old('telefon') }}" placeholder="Введите телефон">--}}
{{--        @error('telefon')--}}
{{--        <div class="invalid-feedback">{{ $message }}</div>--}}
{{--        @enderror--}}
{{--        <label for="email" class="form-label">Адрес электронной почты</label>--}}
{{--        <input name="email" id="email" type="text" class="form-input @error('email') is-invalid @enderror"--}}
{{--               value="{{ old('email') }}" placeholder="Введите email">--}}
{{--        @error('email')--}}
{{--        <div class="invalid-feedback">{{ $message }}</div>--}}
{{--        @enderror--}}
{{--        <button type="submit" class="form-submit" >Сохранить</button>--}}
{{--    </form>--}}


