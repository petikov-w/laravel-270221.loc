<?php

use Illuminate\Support\Facades\Route;

// ======================= Админка ===============================================================
//Route::get('admin', 'App\Http\Controllers\ContactController@create')->name('admin.create');
//Route::post('admin', 'App\Http\Controllers\ContactController@store')->name('admin.store');


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
Route::group(['middleware'=>'admin', 'prefix'=>'admin', 'namespace'=>'App\Http\Controllers\admin'], function (){
//    Route::get('/', 'App\Http\Controllers\admin\MainController@index')->middleware('admin');
//    Route::get('/', 'MainController@index');
    Route::get('admin', 'MainController@create')->name('admin.contact-create');
    Route::post('admin', 'MainController@store')->name('admin.contact-store');
});



//========================= Макросы ==============================================================

Route::get('clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return "Кэш очищен.";
});
