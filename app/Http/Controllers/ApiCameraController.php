<?php

namespace App\Http\Controllers;

use App\Events\NewCar;
use Illuminate\Support\Facades\Event;
use ProtoneMedia\Splade\Facades\Splade;

class ApiCameraController extends Controller
{
    public function index()
    {

    }

    public function store()
    {
        event(new NewCar("00AAA00"));
        return "Event Dispatched";
    }
}
