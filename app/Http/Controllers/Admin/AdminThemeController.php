<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewThemeFormRequest;
use Illuminate\Http\Request;
use App\Models\Theme;


class AdminThemeController extends Controller
{

    public $array_arg = ['title' => 'Панель администратора +++'];

    /**
     * Отображение списка ресурсов.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.admin', $this->array_arg);
    }

    // ============= Создание ресурса =====================
    /**
     * Показать форму для создания нового ресурса.
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.admin', $this->array_arg);
    }

    /**
     * Храните вновь созданный ресурс в хранилище.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewThemeFormRequest $request)
    {
//      dd($request->input('theme'));
        $new_theme = new Theme();
        $new_theme->title = $request->theme;
        $new_theme->parent = 0;
        $new_theme->save();
        session()->flash('success', 'Тема успешно изменена');
        return redirect()->route('theme.index');
    }
    // ============= Создание ресурса (конец) ==================


    /**
     * Отображение указанного ресурса.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    // ============= Изменение ресурса =====================
    /**
     * Показать форму для редактирования указанного ресурса.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $title = Theme::where('id', $id)->pluck('title');
        return view('admin.admin', ['title' => 'Панель администратора +-+',
                                    'id' => $id,
                                    'title' => $title[0]]);
    }

    /**
     * Обновите указанный ресурс в хранилище
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $theme = Theme::find($id);
        $theme->title = $request->theme;
        $theme->save();
        session()->flash('success', 'Тема успешно изменена');
        return redirect()->route('theme.index');
    }
    // ============= Изменение ресурса (конец) ==================

    // ============= Удаление ресурса ===========================
    /**
     * Remove the specified resource from storage.
     * Удалите указанный ресурс из хранилища.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Theme::destroy($id);
        session()->flash('success', 'Тема успешно удалена');
        return redirect()->back();
    }
    // ============= Удаление ресурса (конец) ===================
}

//, ['title' => 'Панель администратора +++', 'id' => $id]
