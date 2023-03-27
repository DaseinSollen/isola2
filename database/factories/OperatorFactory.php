<?php

namespace Database\Factories;

use App\Models\Operator;
use Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Operator>
 */
class OperatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username' => fake()->userName,
            'password' => Hash::make('password')
        ];
    }
}
