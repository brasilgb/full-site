<?php

use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ManufacturerController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('about', [AboutController::class, 'index'])->name('about');
    Route::resource('category', CategoryController::class);
    Route::get('manufacturer', [ManufacturerController::class, 'index'])->name('manufacturer');
    Route::get('product', [ProductController::class, 'index'])->name('product');
    Route::get('service', [ServiceController::class, 'index'])->name('service');
    Route::get('setting', [SettingController::class, 'index'])->name('setting');
    Route::get('slider', [SliderController::class, 'index'])->name('slider');
    Route::get('user', [UserController::class, 'index'])->name('user');
});

require __DIR__ . '/settings.php';
