<?php

namespace Database\Factories;

use App\Models\BusinessModule;
use App\Models\CarPlate;
use App\Models\QRcode;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class AccessFactory extends Factory
{
    public function definition(): array
    {
        $data = [];
        if (fake()->boolean){
            $user = User::all()->random();
            $data['user_id'] = $user->id;
            $data['tax_code'] = $user->tax_code;
        }else{
            $module = BusinessModule::all()->random();
            $data['module_id'] = $module->id;
            $data['qr_code'] = $module->qr_code;
        }
        return array_merge($data,[
            'car_plate' => CarPlate::all()->random()->car_plate,
            'date' => Carbon::now(),
            'entry_time' => Carbon::now(),
            'exit_time' => Carbon::now(),
            'income_waste' => fake()->randomFloat(2,0,1000),
            'waste_at_cost' => fake()->randomFloat(2,0,1000),
            'anomaly' => $this->faker->boolean(),
            'note' => $this->faker->word(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
