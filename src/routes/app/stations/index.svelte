<script lang="typescript">
	import { onDestroy } from 'svelte';
	import Navbar from '@/components/Navbar.svelte';
	import RadioCard from '@/components/app/RadioCard.svelte';

	import { stationsList } from '@/stores/station/stationStore';
	import type { StationConnection } from '@/stores/station/types/stationConnection';

	let stationConnection: StationConnection;
	const unsubscribeStation = stationsList.subscribe((value) => (stationConnection = value));
	onDestroy(() => {
		unsubscribeStation;
	});
</script>

<Navbar title="Stations">
	<span slot="button">
		</span
	>
</Navbar>

<div class="mb-12">
	{#if stationConnection}
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
			{#each stationConnection.edges as edge}
				<div>
					<RadioCard station={edge.node} />
				</div>
			{/each}
		</div>
	{/if}
</div>
