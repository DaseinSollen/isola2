<?php

namespace Database\Factories;

use App\Models\QRcode;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class BusinessModuleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'business_id' => User::where('private',false)->get()->random()->id,
            'VAT_number' => fake()->word(),
            'driver_full_name' => fake()->name(),
            'car_plate' => fake()->word(),
            'length' => fake()->word(),
            'date' => fake()->date,
            'confirmed' => fake()->boolean(),
            'qr_code' => QRcode::all()->random()->id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
