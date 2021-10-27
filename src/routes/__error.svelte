<script>
	import '../app.postcss';
	import Error404 from '@/components/states/404.svelte';
	import Button from '@/components/Button.svelte';
	import { goto } from '$app/navigation';
	const getBack = () => {
		goto('/');
	};
</script>

<div class="h-screen bg-gray-100 flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
		<div class="max-w-md">
			<div class="text-5xl font-dark font-bold">404</div>
			<p class="text-2xl md:text-3xl font-light leading-normal">
				Sorry we couldn't find this page.
			</p>
			<p class="mb-8">But dont worry, you can find plenty of other things on our app.</p>

			<Button fullWidth={true} isLoading={false} on:click={getBack}>Get back</Button>
		</div>
		<div class="max-w-lg">
			<Error404 size={600} />
		</div>
	</div>
</div>
