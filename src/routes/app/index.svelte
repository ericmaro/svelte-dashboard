<script lang="typescript">
	import Title from '@/components/Titlebar.svelte';

	import { onDestroy } from 'svelte';
	import Card from '@/components/Card.svelte';
	import RadioCard from '@/components/app/RadioCard.svelte';

	import { stationsList } from '@/stores/station/stationStore';
	import { matchesList } from '@/stores/match/matchStore';
	import { todayMatchesList } from '@/stores/match/matchStore';

	import type { StationConnection } from '@/stores/station/types/stationConnection';
	import type { MatchConnection } from '@/stores/match/types/matchConnection';
	
	let stationConnection: StationConnection;
	let matchConnection: MatchConnection;
	let todayMatchConnection: MatchConnection;

	const unsubscribeStation = stationsList.subscribe((value) => (stationConnection = value));
	const unsubscribeMatch = matchesList.subscribe((value) => (matchConnection = value));
	const unsubscribeTodayMatch = todayMatchesList.subscribe((value) => (todayMatchConnection = value));
	onDestroy(()=>{
		unsubscribeStation
		unsubscribeMatch
		unsubscribeTodayMatch
	});

</script>

<Title title="Dashboard">
	<span slot="button">
		<button
			class="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 "
			>Button
		</button></span
	>
</Title>

<div class="mb-12">
	{#if matchConnection && todayMatchConnection}
	<h1 class="mb-4">Quick Stats</h1>
	
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
		<Card type="horizontal">
			<span slot="title">
				<h2
					class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
				>
				Matches
				</h2>
			</span>
			<span slot="description">
				<p class="text-base leading-relaxed text-blueGray-500">
					{matchConnection.totalCount}
				</p>
			</span>
			<span slot="right">
				<img
					src="https://dummyimage.com/200x200/F3F4F7/8693ac"
					alt="placeholder"
					class="rounded-lg w-8"
				/>
			</span>
		</Card>
		<Card type="horizontal">
			<span slot="title">
				<h2
					class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
				>
				Radio monitoring
				</h2>
			</span>
			<span slot="description">
				<p class="text-base leading-relaxed text-blueGray-500">
					3
				</p>
			</span>
			<span slot="right">
				<img
					src="https://dummyimage.com/200x200/F3F4F7/8693ac"
					alt="placeholder"
					class="rounded-lg w-8"
				/>
			</span>
		</Card>
		<Card type="horizontal">
			<span slot="title">
				<h2
					class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
				>
				Today's Matches
				</h2>
			</span>
			<span slot="description">
				<p class="text-base leading-relaxed text-blueGray-500">
					{todayMatchConnection.totalCount}
				</p>
			</span>
			<span slot="right">
				<img
					src="https://dummyimage.com/200x200/F3F4F7/8693ac"
					alt="placeholder"
					class="rounded-lg w-8"
				/>
			</span>
		</Card>
		<Card type="horizontal">
			<span slot="title">
				<h2
					class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
				>
				Top station
				</h2>
			</span>
			<span slot="description">
				<p class="text-base leading-relaxed text-blueGray-500">
					Clouds FM
				</p>
			</span>
			<span slot="right">
				<p class="lg:text-lg font-semibold mb-2">5</p>
				<h2
					class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
				>
				Matches
				</h2>
			</span>
		</Card>
	</div>
	{/if}
</div>

<div class="mb-12">
	{#if stationConnection}
		<h1 class="mb-4">Radios</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
			{#each stationConnection.edges as edge}
				<div>
					<RadioCard station={edge.node} />
				</div>
			{/each}
		</div>
	{/if}
</div>
