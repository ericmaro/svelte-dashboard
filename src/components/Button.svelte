<script lang="typescript">
	import { createEventDispatcher } from 'svelte';

	import { BarLoader } from 'svelte-loading-spinners';
	export let isLoading: boolean;
	export let fullWidth: boolean;
	const dispatch = createEventDispatcher();

	const onClick = () => {
		dispatch('click');
	};
</script>

<button
	on:click={onClick}
	disabled={isLoading}
	type="submit"
	class="{fullWidth?
		'w-full':''} flex items-center justify-center  px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-skin-primary rounded-md shadow hover:bg-skin-primary-muted focus:outline-none focus:ring-blue-200 focus:ring-4"
>
	{#if isLoading}
		<div class="self-center my-3"><BarLoader size="60" color="#e3e3e3" unit="px" /></div>
	{:else}
		<span><slot /></span>
	{/if}
</button>
