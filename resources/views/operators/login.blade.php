@seoTitle(__('Log in'))

<x-authentication-card>
    <x-slot:logo>
        <div class="flex">
            <div class="flex justify-center p-3 pr-6">
                <x-authentication-card-logo/>
            </div>
            <div class="flex justify-start p-3 border-gray-200 border-l-2">
                <img src="{{ asset('assets/images/prod/settings.svg') }}" class="w-16 h-16 object-cover ml-3" alt="Admin Panel">
            </div>


        </div>
    </x-slot:logo>

    @if($status = session('status'))
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ $status }}
        </div>
    @endif

    <x-splade-form class="space-y-4" action="{{ route('admin.login') }}">
        <x-splade-input id="email" name="email" type="email" :label="__('Admin Email')" required autofocus />
        <x-splade-input id="password" name="password" type="password" :label="__('Password')" required autocomplete="current-password" />
        <x-splade-checkbox name="remember">{{ __('Remember me') }}</x-splade-checkbox>

        <div class="flex items-center justify-end mt-4">
            <Link href="{{ route('home') }}" class="mr-auto underline text-sm text-gray-600 hover:text-gray-900">
                {{ __('Back to Home') }}
            </Link>
            <x-splade-submit :label="__('Log in')" class="ml-4" />
        </div>
    </x-splade-form>
</x-authentication-card>
