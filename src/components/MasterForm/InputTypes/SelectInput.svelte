<script lang="typescript">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let name: string;
	export let value: string;
	export let numericValue: boolean = false;
	export let disabled: boolean;
	export let options: {
		value: string | number | boolean;
		label: string;
	}[];
	const dispatch = createEventDispatcher();
	const onChange = (event) => {
		dispatch('change', {
			field: name,
			value: numericValue ? Number(event.target.value) : event.target.value
		});
	};
</script>

<div class="text-left mb-5">
	{#if label}
		<label for={name} class="w-full form-label text-left">
			{label}
		</label>
	{/if}

	{#if options}
		<select
			{disabled}
			id={name}
			class="w-full form-control px-4 py-2 transition duration-300 select select-bordered"
			{value}
			placeholder={label}
			on:change={onChange}
			aria-label="Default select"
		>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	{/if}
</div>
