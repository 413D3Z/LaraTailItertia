<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
            $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,

            ]);


                 // Define api middleware group
        $middleware->api(append: [
       
        ]);

               // Define alias middleware
        $middleware->alias([

         
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
