<?php
use App\Models\Menu;
use App\Facades;
use Illuminate\Support\Facades\Auth;
//$menu = Menu:: query()->get(['title', 'url','parent'])->where('parent',0)->toArray();
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
        <div class="i1 ops">Добавить ссылки</div>
{{--        <a href="{{ route('upload_form') }}" class="i1 ops">Добавить ссылки</a>--}}
        <span class="i1 ops"><a href="{{ route('admin') }}">Панель администратора</a></span>
    @elseif (Auth::check())
        <input type="file" id="file-input" accept=".url" class="inputfile" multiple/>
        <label for="file-input" class="input-button">
            <span class="i1 ops if-button">Добавить ссылки 18+</span>
        </label>
        <span class="info-button hidden"></span>
{{--        <div class="i1 ops">Добавить ссылки</div>--}}
{{--        <a href="{{ route('upload_form') }}" class="i1 ops">Добавить ссылки</a>--}}
    @endif
    <span class="i1"><a href="#">Copyright &copy; Petikov Studio 2020-2021</a></span>
</div>
</auth>

</div>

@section('load-files')
    <input type="file" id="file-input" accept=".url" class="inputfile" multiple/>
    <label for="file-input" class="input-button">
        <span class="if-button">Добавить ссылки 18+</span>
    </label>
@endsection
