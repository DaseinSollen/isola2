<div {{ $attributes->class(['flex justify-center w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer']) }}>
    <div class="mr-8">
        @switch($device->type)
            @case('camera')
                <img src="{{ asset('assets/images/prod/cctv-camera.svg') }}" class="w-28">
                @break
            @case('pesa')
                <img src="{{ asset('assets/images/prod/balance.svg') }}" class="w-28">
                @break
            @case('scanner')
                <img src="{{ asset('assets/images/prod/barcode-scanner.svg') }}" class="w-28">
                @break
            @case('traffic-light')
                <img src="{{ asset('assets/images/prod/traffic-light.svg') }}" class="w-28">
                @break
            @case('barrier')
                <img src="{{ asset('assets/images/prod/road-barrier.svg') }}" class="w-28">
                @break
            @case('phone')
                <img src="{{ asset('assets/images/prod/video-doorbell.svg') }}" class="w-28">
                @break
        @endswitch
    </div>
    <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ $device->name }}</h5>
        <p class="font-normal text-gray-700">
        <div>
            <small class="text-gray-400 font-bold mr-2">ip</small>
            <a class="">{{ $device->ip_address }}</a>
        </div>

        <div class="flex items-center">
            <span>
                <small class="text-gray-400 font-bold mr-2">stato</small>
                <a>{{ $device->status }}</a>
            </span>
            @if($device->status === 'Online')
                <span class="relative flex h-3 w-3 ml-1">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            @else
                <span class="relative flex h-3 w-3 ml-1">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            @endif
        </div>
        <div>
            <small class="text-gray-400 font-bold mr-2">tipo</small>
            <a class="">{{ $device->type }}</a>
        </div>
        </p>
    </div>
</div>
