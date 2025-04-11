<?php
<<<<<<< HEAD
=======

>>>>>>> 3ddf9550fda45355357e4577df497c9a5aee04d3
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
<<<<<<< HEAD
        api: __DIR__.'/../routes/api.php',
=======
>>>>>>> 3ddf9550fda45355357e4577df497c9a5aee04d3
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
<<<<<<< HEAD
        $middleware->api([
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Optional: customize error handling
    })
    ->create();
=======
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
>>>>>>> 3ddf9550fda45355357e4577df497c9a5aee04d3
