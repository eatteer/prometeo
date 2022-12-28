<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\BoardListController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\InvitationStateController;
use App\Http\Controllers\TaskController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
});

Route::prefix('/boards')->group(function () {
    Route::get('/', [BoardController::class, 'index']);
    Route::get('/{id}', [BoardController::class, 'show']);
});

Route::prefix('/board-lists')->group(function () {
    Route::get('/', [BoardListController::class, 'index']);
    Route::get('/{id}', [BoardListController::class, 'show']);
});

Route::prefix('/invitations')->group(function () {
    Route::get('/', [InvitationController::class, 'index']);
    Route::get('/{id}', [InvitationController::class, 'show']);
});

Route::prefix('/invitation-states')->group(function () {
    Route::get('/', [InvitationStateController::class, 'index']);
    Route::get('/{id}', [InvitationStateController::class, 'show']);
});

Route::prefix('/tasks')->group(function () {
    Route::get('/', [TaskController::class, 'index']);
    Route::get('/{id}', [TaskController::class, 'show']);
});
