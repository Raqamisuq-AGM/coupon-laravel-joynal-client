<?php

namespace App\Http\Middleware\Dashboard;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyShop
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

        if ($role !== "shop") {
            throw new \Exception('Unauthorized');
        }
        
        return $next($request);
    }
}
