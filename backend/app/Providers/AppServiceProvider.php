<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // API Rate Limiting: 60 requests per minute
    RateLimiter::for('api', function (Request $request) {
        return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
    });

    // Login Rate Limit: 5 attempts per minute
    RateLimiter::for('login', function (Request $request) {
        return Limit::perMinute(5)->by($request->ip());
    });

    // Admin API Rate Limit: 200 requests per minute
    RateLimiter::for('admin_api', function (Request $request) {
        return Limit::perMinute(200)->by($request->user()?->id ?: $request->ip());
    });
    }
}