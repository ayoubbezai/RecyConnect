<?php

use App\Http\Controllers\AttachmentController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\LikeController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'currentUser']);
    Route::get('/items', [ItemController::class, 'index']);
    Route::apiResources(['/items' => ItemController::class,]);
    Route::apiResources(['/comments' => CommentController::class,]);
    Route::put('/like/{id}', [LikeController::class, 'update']);
    Route::post('/attachments/{id}', [AttachmentController::class, 'store']);
    
});
