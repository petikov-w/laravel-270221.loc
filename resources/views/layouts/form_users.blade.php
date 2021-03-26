<?php
    use App\Models\User;
    $name_user  = User::get(['id', 'name', 'is_admin'])->toArray();
?>
<!--========================== ФОРМА ИЗМЕНЕНИЯ ТЕМ ===========================-->
<div class="z-section">
    <h2>Работа c пользователями</h2>
</div>

<ul class="list-i">
    @foreach ($name_user as $value)
        <li class="item-ts">
            {{$value['name']}}
            @if ($value['is_admin']!=1)
            <div class="box-buttons">
                <div>
                    <form action="{{route('users.destroy',['user'=>$value['id']])}}" method="post" class="bth">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="button-delete">Удалить</button>
                    </form>
                </div>
                @endif
{{--                <div>--}}
{{--                    <form action="{{route('theme.edit',['theme'=>$value['id']])}}" method="get" class="bth">--}}
{{--                        @csrf--}}
{{--                        <button type="submit" class="button-edit">Изменить</button>--}}
{{--                    </form>--}}
{{--                </div>--}}

            </div>
        </li>
    @endforeach
</ul>
{{--<div class="new-theme"><a href="{{route('theme.create')}}">Создать новую тему</a></div>--}}



