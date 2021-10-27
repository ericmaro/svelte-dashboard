<script lang="typescript">
	import { createEventDispatcher, onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import type { MenuItem } from '@/shared/types/menuItem';
	const dispatch = createEventDispatcher();
	let show = false; // menu state
	let menu = null;
	export let items: MenuItem[] = [];
	const onSelect = (item: MenuItem) => dispatch('select', item);

	onMount(() => {
		const handleOutsideClick = (event) => {
			if (show && !menu.contains(event.target)) {
				show = false;
			}
		};

		const handleEscape = (event) => {
			if (show && event.key === 'Escape') {
				show = false;
			}
		};

		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});
</script>


<div class="dropdown dropdown-end">
	<div tabindex="0" class="m-1 p-0 btn btn-ghost">
		<slot />
	</div> 
	<ul tabindex="0" class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
		{#each items as item}
		<li>
			<button 
			on:click={() => onSelect(item)}
			class="btn btn-ghost">{item.title}</button>

	  </li> 
	  {/each}
	</ul>
  </div>

