<!doctype html>
<html lang="en">
<head>
    @include('layouts.meta')
    <title>@section('title-page')Laravel-270221 - @show</title>
    @include('layouts.styles')
</head>
<body>
    <div class="container">
        <div class="wrapper">
            <div class="header-m">
                @include('layouts.header')
            </div>
            <div class="content-m">
                @yield('content')
            </div>
            <div class="footer-m">
                @include('layouts.footer')
            </div>
        </div>
    </div>
    @include('layouts.scripts')
</body>
</html>
