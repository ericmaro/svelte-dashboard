<script lang="typescript">
	import Card from '@/components/Card.svelte';
    import  PlayIcon from "@/components/icons/PlayIcon.svelte";
    import  StopIcon from "@/components/icons/StopIcon.svelte";
	import { Howl, Howler } from 'howler';
	import type { Audio } from '@/stores/audio/types/audio';
	export let audio: Audio;
	let playingId:number;
    let pos:number;
	var sound = new Howl({
        html5:true,
		src: [audio.location]
	});
	const play = () => {
		playingId = sound.play();
	};
	const stop = () => {
		sound.stop(playingId);
		playingId = null;
	};

    setInterval(() => {
  pos = sound.playing()?((sound.seek() as number)/sound.duration()):0
},60);


</script>

<Card type="horizontal">
	<span slot="title">
		<h2
			class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
		>
			{audio.name}
		</h2>
	</span>
	<span slot="description">
        <div class="relative pt-1 pr-5">
            <div class="overflow-hidden h-0.5 mb-4 text-xs flex rounded bg-gray-200">
              <div style={'width:'+pos*100+'%'} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-900"></div>
            </div>
          </div>
         
		
	</span>
	<span slot="right">
		<button on:click={() => (sound.playing(playingId) ? stop() : play())}
			>
            {#if sound.playing(playingId) }
            <StopIcon/>
           
            {:else}
            <PlayIcon/>
            {/if}
            </button>
	</span>
</Card>
