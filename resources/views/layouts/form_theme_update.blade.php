<?php
//    use App\Models\Theme;
//    $title_theme  = Theme::get(['id', 'title'])->toArray();
//    $vvv = Theme::where('id', $id))->get('title');



//$menu = Menu:: query()->get(['title', 'url','parent','menu_type'])->where('menu_type','main')->where('parent',0)->toArray();
?>
<!--========================== ФОРМА ИЗМЕНЕНИЯ ТЕМ ===========================-->
<div class="z-section">
    <h2>Редактирование темы</h2>
</div>
     <form  action="{{ route('theme.update',['theme'=>$id]) }}" method="post" class="form-dsg">
        @csrf
        @method('PATCH')
        <label for="theme" class="form-label mtop0">Название темы</label>
        <input name="theme" id="theme" type="text" class="form-input @error('theme') @enderror"
               value="{{$title}}" placeholder="Введите название темы">
        @error('theme')
              <div class="invalid-feedback">{{ $message }}</div>
        @enderror
        <button type="submit" class="form-submit" >Изменить</button>
    </form>

{{--value="{{ old('theme') }}"--}}
