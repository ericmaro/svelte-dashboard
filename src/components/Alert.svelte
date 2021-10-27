<script lang="typescript">
	import { AlertType } from '@/shared/types/RequestError';
	import ErrorIcon from './icons/ErrorIcon.svelte';
	import InfoIcon from './icons/InfoIcon.svelte';
	import SuccessIcon from './icons/SuccessIcon.svelte';

	export let type: AlertType;
</script>

<div class="bg-red-200 shadow-md rounded p-4 flex flex-row my-2 text-red-800" role="alertdialog">
	<div class="w-10">
		{#if type === AlertType.ERROR}
			<ErrorIcon size={64} />
		{:else if type === AlertType.SUCCESS}
			<SuccessIcon />
		{:else}
			<InfoIcon />
		{/if}
	</div>

	<div>
		<slot />
	</div>
</div>
