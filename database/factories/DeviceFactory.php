<?php

namespace Database\Factories;

use App\Models\Device;
use Hash;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Process;

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
        $ip = fake()->ipv4;
        return [
            'uuid' => fake()->uuid,
            'serial' => fake()->numberBetween(10000,99999),
            'ip_address' => $ip,
            'name' => fake()->firstName,
            'auth_key' => Hash::make(fake()->password),
            'status' =>  Process::run('ping -c 2 '.$ip)->successful() ? 'Online' : 'Offline',
            'type' => collect(['camera','pesa','scanner','phone','barrier','traffic-light'])->random()
        ];
    }
}
