<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use ProtoneMedia\Splade\Facades\Splade;

class CarPlateNotFound implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public string $car_plate;

    /**
     * Create a new event instance.
     */
    public function __construct($car_plate)
    {
        $this->car_plate = $car_plate;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('car-plate-status'),
        ];
    }


    public function broadcastWith(): array
    {
        return [
            Splade::toastOnEvent("La targa {$this->car_plate} non è stata riconosciuta")
                ->title('Targa non riconosciuta')
                ->autoDismiss(8)
                ->danger(),
        ];
    }
}
