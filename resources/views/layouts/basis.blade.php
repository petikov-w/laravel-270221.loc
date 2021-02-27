<!doctype html>
<html lang="en">
<head>
    @include('layouts.meta')
    <title>@section('title-page')Laravel-270221 - @show</title>
    @include('layouts.styles')
</head>
<body>
    <div class="container">
        @include('layouts.header')
        @yield('content')
    </div>
    @include('layouts.scripts')
</body>
</html>
