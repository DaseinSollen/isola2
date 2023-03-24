<?php

namespace App\Events;

use App\Models\CarPlate;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use ProtoneMedia\Splade\Facades\Splade;

class CarPlateFound implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public CarPlate $car_plate;

    /**
     * Create a new event instance.
     */
    public function __construct(CarPlate $car_plate)
    {
        $this->car_plate = $car_plate;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('car-plate-found'),
        ];
    }

    public function broadcastWith(): array
    {
        $user = $this->car_plate->user;
        $user->private ? $name = $user->name . ' ' . $user->surname : $name = $user->company_name;
        $user->private ? $target = "all'utente" : $target = "all'azienda";
        return [
            Splade::toastOnEvent("La targa è stata riconosciuta {$target} {$name}")
                ->title('Targa riconosciuta')
                ->autoDismiss(8)
                ->info(),
        ];
    }
}
