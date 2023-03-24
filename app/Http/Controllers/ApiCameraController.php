<?php

namespace App\Http\Controllers;

use App\Events\NewCar;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;


class ApiCameraController extends Controller
{
    public function index()
    {
    }

    public function new_car(Request $request)
    {
        $uuid = $request->get('device',['uuid' => null])['uuid'];
        $camera = Device::firstWhere('uuid',$uuid);
        if ($camera){
            event(new NewCar($request['carplate']['value']));
            return response('Car recognized successfully');
        }else return response('Unable to analyze sent data',500);
    }
}
