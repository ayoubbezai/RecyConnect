<?php
return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Ensure Sanctum CSRF route is included

    'allowed_methods' => ['*'], // Allow all HTTP methods

    'allowed_origins' => ['*'], // Only allow requests from this origin

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // You can specify specific headers here, like ['Content-Type', 'Authorization']

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Set to true if you're using cookies or authentication tokens
];
