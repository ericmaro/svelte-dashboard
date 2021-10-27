<script lang="typescript">
	import Card from '@/components/Card.svelte';
	import PlayIcon from '@/components/icons/PlayIcon.svelte';
	import StopIcon from '@/components/icons/StopIcon.svelte';
	import type { Station } from '@/stores/station/types/station';
	import { Howl, Howler } from 'howler';
	export let station: Station;
	let playingId: number;
	var sound = new Howl({
		html5: true,
		src: [station.streamUrl]
	});
	const play = () => {
		playingId = sound.play();
	};
	const stop = () => {
		sound.stop(playingId);
		playingId = null;
	};

</script>

<Card type="vertical">
	<span slot="header">
		<div class="flex justify-between items-center mb-4">
			<h4
				class="text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "
			>
				{station.name}
			</h4>
			<div class={station.isListening ? 'badge-success' : 'badge-warning'}>
				{station.isListening ? 'Online' : 'Offline'}
			</div>
		</div>
	</span>
	<span slot="content">
		<p>
			If any Environment Variables values are changed between Deployments, deduplication will always
			be bypassed. So you know.
		</p>
	</span>
	<span slot="footer">
		<button on:click={() => (sound.playing(playingId) ? stop() : play())}>
			{#if playingId}
				<StopIcon />
			{:else}
				<PlayIcon />
			{/if}
		</button>
	</span>
</Card>
