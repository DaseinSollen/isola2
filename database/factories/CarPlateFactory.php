<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class CarPlateFactory extends Factory
{
    public function definition(): array
    {
        return [
            'car_plate' => fake()->unique()->word,
            'length' => $this->faker->word(),
            'blacklist' => $this->faker->boolean(),
            'user_id' => User::all()->random()->id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
