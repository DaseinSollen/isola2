<x-banner />

<div class="min-h-screen bg-gray-100">
    <x-admin-navigation />

    <!-- Page Heading -->
    @isset($header)
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {{ $header }}
            </div>
        </header>
    @endif

    <!-- Page Content -->
    <main>
        {{ $slot }}
    </main>

    <x-splade-event channel="sensors" listen="NewCar,NewCard" />
{{--        <img :src="events[events.length -1]?.data?.image" class="h-80 w-80 bg-gray-200" alt=""/>--}}
    <x-splade-event channel="car-plate-status" listen="CarPlateFound, CarPlateNotFound" />
    <x-splade-event channel="card-status" listen="CardFound, CardNotFound" />
</div>
