<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use ProtoneMedia\Splade\Facades\Splade;

class CardNotFound implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */

    public string $tax_code;
    public function __construct($tax_code)
    {
        $this->tax_code = $tax_code;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('card-status'),
        ];
    }

    public function broadcastWith(): array
    {
        return [
            Splade::toastOnEvent("La tessera [{$this->tax_code}] non è stata riconosciuta")
                ->title('Tessera non riconosciuta')
                ->autoDismiss(8)
                ->danger(),
        ];
    }
}
