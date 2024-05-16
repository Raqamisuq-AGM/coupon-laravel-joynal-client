<?php

namespace App\Http\Middleware\Dashboard;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // check user role and redirect to dashboard accordingly 

        $role = $request->user()->getRoleNames()->first();

        if ($role !== "admin") {
            throw new \Exception('Unauthorized');
        }
        
        return $next($request);
    }
}
