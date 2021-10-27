<script lang="typescript">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let name: string;
	export let value: string;
	export let masked: boolean;
	export let disabled: boolean;
	const dispatch = createEventDispatcher();

	const onChange = (event) => {
		dispatch('change', {
			field: name,
			value: event.target.value
		});
	};
</script>

<div class="text-left mb-0">
	{#if label}
		<label for={name} class="w-full form-label text-left">
			{ label }
		</label>
	{/if}
	<input
		{disabled}
		id={name}
		type={masked ? 'password' : 'text'}
		class="w-full form-control px-4 py-2 transition duration-300 input input-bordered"
		{value}
		placeholder={label}
		on:input={onChange}
	/>
</div>
