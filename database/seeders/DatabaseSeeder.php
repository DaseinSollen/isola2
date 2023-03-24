<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\CarPlate;
use App\Models\Device;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

         User::factory()->withPersonalTeam()->create([
             'name' => 'Dennis',
             'email' => 'dennispirotta@gmail.com',
             'private' => true,
             'surname' => 'Pirotta',
             'approved' => true,
             'document_type' => 'Carta di Identità',
             'document_number' => 'IX7394AV',
             'tax_code' => 'PRTDNS03E20C933U'
         ]);
         Device::factory()->create([
             'uuid' => 'd1857a80-d8e1-33db-82bb-cad2885d5e55',
             'serial' => '000798006008',
             'ip_address' => '192.168.100.50',
             'name' => 'Camera'
         ]);
         User::factory(5)->create();
         CarPlate::factory(10)->create();
    }
}
