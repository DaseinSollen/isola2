<?php

namespace App\Console\Commands;

use App\Models\Device;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Process;

class CheckDevicesStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'devices:check-status';
    protected $aliases = 'dev:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check if each device is online';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        foreach (Device::all() as $device){
            Process::run('ping -c 2 '.$device->ip_address)->successful() ? $device->update(['status' => 'Online']) : $device->update(['status' => 'Offline']);
        }

    }
}
