<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use ProtoneMedia\Splade\Facades\Splade;

class NewCar implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public string $message;
    public string $image;

    /**
     * Create a new event instance.
     */
    public function __construct($message,$image = '')
    {
        $this->message = $message;
        $this->image = $image;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('sensors'),
        ];
    }

    public function broadcastWith(): array
    {
        return [
            Splade::toastOnEvent('è in arrivo una nuova auto alla sbarra con targa ['.$this->message.']')
                    ->title('Auto in arrivo')
                    ->autoDismiss(8)
                    ->info(),
            'image' => $this->image
        ];
    }
}
