<x-admin-layout>
    <x-slot:header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Devices List') }}
        </h2>
    </x-slot:header>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 m-5 justify-items-center">
        @foreach($devices as $device)
            <x-device-card :device="$device"/>
        @endforeach
    </div>

{{--    <div class="max-w-7xl mt-3 p-5 mx-auto shadow bg-white rounded-lg">--}}
{{--        <x-splade-table :for="$devices_table">--}}
{{--            <x-slot:empty-state>--}}
{{--                <p>{{ __('No devices found') }}</p>--}}
{{--            </x-slot:empty-state>--}}
{{--            <x-splade-cell actions as="$device">--}}
{{--                <Link href="{{ route('devices.edit',['device' => $device->uuid]) }}"> Edit {{ $device->id }} </Link>--}}
{{--            </x-splade-cell>--}}
{{--        </x-splade-table>--}}
{{--    </div>--}}


</x-admin-layout>
