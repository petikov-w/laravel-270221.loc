<?php
use App\Models\Menu;
use App\Facades;
use Illuminate\Support\Facades\Auth;
$current_item_menu = substr(url()->current(), strrpos(url()->current(),'/')+1);
?>
<div class="footer">

@section('logo-footer')
<div class="logo-footer">
        @if (PetikovService::isHomePage())

            <div class="logo-footer-1s"><span class="st-f">P</span>etikov<span class="logo-footer-2s">
                                 <span class="st-f">S</span>tudio</span></div>
        @else
            <a href="{{'/'}}">
                <div class="logo-footer-1s"><span class="st-f">P</span>etikov<span class="logo-footer-2s">
                                <span class="st-f">S</span>tudio</span></div>
            </a>
        @endif
</div>
@show

<auth>
<div class="footer-auth-box">

    @if (Auth::check() && Auth::user()->is_admin==1)
        @if ($current_item_menu=='catalog')
            <div class="i1 ops link-add">Добавить ссылки</div>
        @endif
        <span class="i1 ops"><a href="{{ route('admin') }}">Панель администратора</a></span>
    @elseif (Auth::check())
        @if ($current_item_menu=='catalog')
            <input type="file" id="file-input" accept=".url" class="inputfile" multiple/>
            <label for="file-input" class="input-button">
                <span class="i1 ops if-button link-add">Добавить ссылки</span>
            </label>
            <span class="info-button hidden"></span>
        @endif

    @endif
    <span class="i1"><a href="#">Copyright &copy; Petikov Studio 2020-2021</a></span>
</div>
</auth>

</div>

