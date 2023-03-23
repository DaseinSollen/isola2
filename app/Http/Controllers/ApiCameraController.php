<?php

namespace App\Http\Controllers;

use App\Events\NewCar;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use ProtoneMedia\Splade\Facades\Splade;

class ApiCameraController extends Controller
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        event(new NewCar($request->get('value','XX999XX')));
        Debugbar::info($request);
        return response()->json('Event Dispatched');
    }
}
