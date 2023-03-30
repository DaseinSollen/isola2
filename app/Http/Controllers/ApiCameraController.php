<?php

namespace App\Http\Controllers;

use App\Events\CarPlateFound;
use App\Events\CarPlateNotFound;
use App\Events\NewCar;
use App\Models\CarPlate;
use Illuminate\Http\Request;


class ApiCameraController extends Controller
{
    public function index()
    {
        //
    }

    public function new_car(Request $request)
    {
        event(new NewCar(message: $request['carplate']['value'],image: $request['image_data']));

        if ($car_plate = CarPlate::firstWhere('car_plate',$request['carplate']['value'])) event(new CarPlateFound($car_plate));
        else event(new CarPlateNotFound($request['carplate']['value']));

        return response()->json([
            'message' => 'Car recognized successfully'
        ]);
    }
}
