<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/upload', [App\Http\Controllers\UploadController::class, "upload"]);
Route::delete('/link/{id}', [App\Http\Controllers\UploadController::class, "deleteLink"]);
Route::get('/links', [App\Http\Controllers\UploadController::class, "getLinks"]);
//Route::get('/getlinks/{id}', [App\Http\Controllers\UploadController::class, "getLinks"]);
Route::get('/getthemes', [App\Http\Controllers\UploadController::class, "getThemes"]);
Route::get('/getthemes/{id}', [App\Http\Controllers\UploadController::class, "getTheme"]);
