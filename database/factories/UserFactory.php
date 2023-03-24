<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Laravel\Jetstream\Features;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $private = fake()->boolean;
        $data = [];
        if ($private){
            $data['name'] = fake()->firstName;
            $data['surname'] = fake()->lastName;
            $data['document_type'] = collect(['Carta di identità','Passaporto','Patente'])->random();
            $data['document_number'] = fake()->randomNumber(6,true);
            $data['tax_code'] = fake()->text(16);
        }else{
            $data['company_name'] = fake()->company;
            $data['VAT_number'] = fake()->randomNumber(9,true);
            $data['contact_name'] = fake()->firstName;
            $data['contact_surname'] = fake()->lastName;
        }
        return array_merge([
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'ip_address' => fake()->ipv4(),
            'private' => $private,
            'house_number' => fake()->buildingNumber,
            'address' => fake()->streetAddress,
            'zip_code' => fake()->postcode,
            'approved' => fake()->boolean,
            'note' => fake()->boolean ? fake()->text : null,
            'contract_confirm' => fake()->boolean,
            'phone' => fake()->phoneNumber,
            'privacy_confirm' => fake()->boolean,
            'two_factor_secret' => null,
            'two_factor_recovery_codes' => null,
            'profile_photo_path' => null,
            'current_team_id' => null,
        ],$data);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }

    /**
     * Indicate that the user should have a personal team.
     */
    public function withPersonalTeam(): static
    {
        if (! Features::hasTeamFeatures()) {
            return $this->state([]);
        }

        return $this->has(
            Team::factory()
                ->state(function (array $attributes, User $user) {
                    return ['name' => $user->name.'\'s Team', 'user_id' => $user->id, 'personal_team' => true];
                }),
            'ownedTeams'
        );
    }
}
