<?php

namespace Database\Factories;

use App\Models\Device;
use Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Device>
 */
class DeviceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'uuid' => fake()->uuid,
            'serial' => fake()->numberBetween(10000,99999),
            'ip_address' => fake()->ipv4,
            'name' => fake()->firstName,
            'auth_key' => Hash::make(fake()->password)
        ];
    }
}
