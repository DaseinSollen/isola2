<?php

namespace App\Http\Controllers;

use App\Events\CarPlateFound;
use App\Events\CarPlateNotFound;
use App\Events\NewCar;
use App\Models\CarPlate;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class ApiCameraController extends Controller
{
    public function index()
    {
    }

    public function new_car(Request $request)
    {
        Log::info(json_encode($request->all()));
        $uuid = $request->get('device',['uuid' => null])['uuid'];
        if (Device::firstWhere('uuid',$uuid)){
            event(new NewCar(message: $request['carplate']['value'],image: $request['image_data']));
            if ($car_plate = CarPlate::firstWhere('car_plate',$request['carplate']['value'])){
                event(new CarPlateFound($car_plate));
            }else {
                event(new CarPlateNotFound($request['carplate']['value']));
            }
            return response('Car recognized successfully');
        }else return response('Unable to analyze sent data',500);
    }
}
