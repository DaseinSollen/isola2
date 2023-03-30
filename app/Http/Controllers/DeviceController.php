<?php

namespace App\Http\Controllers;

use App\Events\CardFound;
use App\Events\CardNotFound;
use App\Events\CarPlateFound;
use App\Events\CarPlateNotFound;
use App\Events\NewCar;
use App\Events\NewCard;
use App\Models\CarPlate;
use App\Models\Device;
use App\Models\User;
use App\Tables\DevicesTable;
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('devices.index',[
            'devices' => Device::all()->sortBy('type'),
            'devices_table' => DevicesTable::class
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Device $device)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Device $device)
    {
        return view('devices.edit',[
            'device' => $device
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Device $device)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Device $device)
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

    public function new_card(Request $request)
    {
        event(new NewCard(message: $request['codice_fiscale']));

        if ($user = User::firstWhere('tax_code',$request['codice_fiscale'])) event(new CardFound($user));
        else event(new CardNotFound($request['codice_fiscale']));

        return response()->json([
            'message' => 'Card recognized successfully'
        ]);
    }
}
