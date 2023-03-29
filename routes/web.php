<?php

use App\Http\Controllers\OperatorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['splade'])->group(function () {

    // Registers routes to support the interactive components...
    Route::spladeWithVueBridge();

    // Registers routes to support password confirmation in Form and Link components...
    Route::spladePasswordConfirmation();

    // Registers routes to support Table Bulk Actions and Exports...
    Route::spladeTable();

    // Registers routes to support async File Uploads with Filepond...
    Route::spladeUploads();


    // Gruppo di route web per gli utenti ordinari
    Route::middleware(['auth:sanctum', config('jetstream.auth_session'),  'verified'])->group(function () {
        Route::view('/dashboard', 'dashboard')->name('dashboard');
    });

    // Gruppo di route admin per l'autenticazione degli amministratori
    Route::group(['prefix' => 'admin' ,'middleware'=> ['admin:admin']], function() {
        Route::get('/login', [OperatorController::class, 'loginform'])->name('admin.login.show');
        Route::post('/login', [OperatorController::class, 'store'])->name('admin.login');
    });

    // Gruppo di route admin per gli operatori
    Route::group(['middleware' => ['auth.admin:admin', 'verified'],'prefix' => 'admin'],function () {
        Route::post('/logout', [OperatorController::class, 'destroy'])->name('admin.logout');
        Route::view('/dashboard', 'operators.dashboard')->name('admin.dashboard');
    });

    Route::get('/',fn() => Splade::redirectAway(\route('welcome')))->name('home');

});

Route::view('/home', 'welcome')->name('welcome');
