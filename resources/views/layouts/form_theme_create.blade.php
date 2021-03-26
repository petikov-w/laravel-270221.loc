<?php
    use App\Models\Theme;
    $title_theme  = Theme::get(['id', 'title'])->toArray();
//$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>
<!--========================== ФОРМА ИЗМЕНЕНИЯ ТЕМ ===========================-->
<div class="z-section">
    <h2>Создание новой темы</h2>
</div>


{{--Заготовка формы    --}}

     <form method="post" action="{{ route('theme.store') }}" class="form-dsg">
        @csrf
        <label for="theme" class="form-label mtop0">Название темы</label>
        <input name="theme" id="theme" type="text" class="form-input @error('theme') @enderror"
               value="{{ old('theme') }}" placeholder="Введите название темы">
        @error('theme')
              <div class="invalid-feedback">{{ $message }}</div>
        @enderror
        <button type="submit" class="form-submit" >Создать</button>
    </form>

