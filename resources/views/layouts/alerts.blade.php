
{{-- Вывод сообщения об удачном выполнении--}}
@if (session('success'))
    <div class="alert-success">{{ session('success') }}</div>
@endif

{{-- Вывод предупреждающего сообщения--}}
@if (session('warning'))
    <div class="alert-warning">{{ session('warning') }}</div>
@endif

{{-- Вывод сообщения об ошибке--}}
@if (session('error'))
    <div class="alert-error">{{ session('error') }}</div>
@endif
