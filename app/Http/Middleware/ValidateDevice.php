<?php

namespace App\Http\Middleware;

use App\Models\Device;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class ValidateDevice
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        $request->validate([
            'device.uuid' => ['required','uuid'],
            'device.auth_key' => ['required','string'],
        ]);
        $device = Device::firstWhere('uuid',$request->get('device',['uuid' => null])['uuid']);
        if (! $device || ! Hash::check($request->input('device.auth_key'), $device->auth_key)) {
            Log::warning('Unauthorized request incoming',[
                'ip' => $request->ip(),
                'body' => $request->all(),
                'headers' => $request->headers->all()
            ]);
            return response()->json([
                'message' => 'Device not recognized'
            ],403);
        }
        $request->headers->set('Accept','application/json');
        $request->headers->set('Content-Type','application/json');
        return $next($request);
    }
}
