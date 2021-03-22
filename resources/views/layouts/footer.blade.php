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

        <span class="i1 ops"><a href="{{ route('admin') }}">Панель администратора</a></span>
        <span class="i1"><a href="#">Copyright &copy; Petikov Studio 2020-2021</a></span>
    @else
        <span class="i1"><a href="#">Copyright &copy; Petikov Studio 2020-2021</a></span>
    @endif
</div>
</auth>

</div>
