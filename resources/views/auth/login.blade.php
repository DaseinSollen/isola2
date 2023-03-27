@seoTitle(__('Log in'))

<x-authentication-card>
    <x-slot:logo>
        <x-authentication-card-logo />
    </x-slot:logo>

    @if($status = session('status'))
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ $status }}
        </div>
    @endif

    <x-splade-form class="space-y-4">
        <x-splade-input id="email" name="email" type="email" :label="__('Email')" required autofocus />
        <x-splade-input id="password" name="password" type="password" :label="__('Password')" required autocomplete="current-password" />
        <x-splade-checkbox name="remember">{{ __('Remember me') }}</x-splade-checkbox>

        <div class="flex items-center justify-end mt-4">
            <Link href="{{ route('admin.login') }}" class="mr-auto underline text-sm text-gray-600 hover:text-gray-900">
                {{ __('Operator?') }}
            </Link>
            <x-splade-submit :label="__('Log in')" class="ml-4" />
        </div>
    </x-splade-form>
</x-authentication-card>
