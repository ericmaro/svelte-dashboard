<script lang="typescript">
	import { pathSwitcher } from './switcher';
	export let color = '#4A5568';
	export let stroke = color;
	export let filled = false;
	export let fill = filled ? color : 'none';
	export let size = '1em'; // default 1em match the parent element
	// default heart icon
	export let name;
</script>

<svg
	class="icon"
	viewBox="0 0 22 22"
	{fill}
	width={size}
	height={size}
	xmlns="http://www.w3.org/2000/svg"
>
	{#each pathSwitcher(name) as path}
		<path d={path} {stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	{/each}
</svg>

