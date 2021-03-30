<?php

use Illuminate\Support\Facades\Route;

// ======================= Админка ===============================================================
//Route::get('Admin', 'App\Http\Controllers\ContactController@create')->name('Admin.create');
//Route::post('Admin', 'App\Http\Controllers\ContactController@store')->name('Admin.store');


// ======================= Главное меню =========================================================
Route::group(['namespace'=>'App\Http\Controllers'], function (){
    Route::get('/', 'PageController@showHomePage')->name('home');;
    Route::get('catalog', 'PageController@showCatalogPage');
    Route::get('about', 'PageController@showAboutPage');
    Route::get('contact', 'ContactController@index')->name('contacts');
});
//================================================================================================


//======================= Блок регистации и авторизации пользователей ============================
Route::group(['middleware'=>'guest'], function (){
// ======================= Регистрация пользователей =============================================
    Route::get('users/signup', 'App\Http\Controllers\RegisterController@create')->name('signup.create');
    Route::post('users/signup', 'App\Http\Controllers\RegisterController@store')->name('signup.store');
// ======================= Авторизация пользователей =============================================
    Route::get('users/login', 'App\Http\Controllers\LoginController@create')->name('login.create');
    Route::post('users/login', 'App\Http\Controllers\LoginController@store')->name('login.store');
});

Route::get('users/logout', 'App\Http\Controllers\LoginController@logout')->name('login.logout')->middleware('auth');
// ===============================================================================================



// ======================= Администратор =============================================
Route::group(['middleware'=>'Admin', 'namespace'=>'App\Http\Controllers\Admin'], function (){
    Route::get('admin', 'MainController@index')->name('admin');
    Route::get('admin/contact', 'MainController@create')->name('admin.contact.create');
    Route::post('admin/contact', 'MainController@store')->name('admin.contact.store');

    Route::resource('admin/theme','AdminThemeController');
    Route::resource('admin/users','AdminUsersController');
    Route::get('admin/statistic', 'SainController@statistic')->name('admin.statistic');
//    Route::post('Admin/theme', 'SainController@store')->name('Admin.theme.store');
});

//Route::get('links', 'App\Http\Controllers\LinksController@index')->name('links');

Route::get('upload',['as' => 'upload_form', 'uses' => 'App\Http\Controllers\UploadController@getForm']);
Route::post('upload',['as' => 'upload_file','uses' => 'App\Http\Controllers\UploadController@upload']);
//========================= Макросы ==============================================================

Route::get('clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return "Кэш очищен.";
});
