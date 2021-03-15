<?php

use Illuminate\Support\Facades\Route;

// ======================= Главное меню =========================================================
Route::get('/', 'App\Http\Controllers\PageController@showHomePage')->name('home');;
Route::get('catalog', 'App\Http\Controllers\PageController@showCatalogPage');
Route::get('about', 'App\Http\Controllers\PageController@showAboutPage');
Route::get('contact', 'App\Http\Controllers\ContactController@index')->name('contacts');
// ======================= Админка ===============================================================
//Route::get('admin', 'App\Http\Controllers\ContactController@create')->name('admin.create');
//Route::post('admin', 'App\Http\Controllers\ContactController@store')->name('admin.store');
// ======================= Регистрация пользователей =============================================
Route::get('users/signup', 'App\Http\Controllers\RegisterController@create')->name('signup.create');
Route::post('users/signup', 'App\Http\Controllers\RegisterController@store')->name('signup.store');
// ======================= Авторизация пользователей =============================================
Route::get('users/login', 'App\Http\Controllers\LoginController@create')->name('login.create');
Route::post('users/login', 'App\Http\Controllers\LoginController@store')->name('login.store');
Route::get('users/logout', 'App\Http\Controllers\LoginController@logout')->name('login.logout');
// ======================= Администратор =============================================
Route::get('admin', 'App\Http\Controllers\admin\MainController@index')->middleware('admin');


//========================= Макросы ==============================================================

Route::get('clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return "Кэш очищен.";
});
