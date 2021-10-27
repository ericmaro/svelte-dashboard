<script lang="typescript">
	import { onDestroy } from 'svelte';
	import Navbar from '@/components/Navbar.svelte';
	import Modal from '@/components/Modal.svelte';
	import AudioCard from '@/components/app/AudioCard.svelte';
	import Card from '@/components/Card.svelte';

	import { audiosList } from '@/stores/audio/audioStore';
	import type { AudioConnection } from '@/stores/audio/types/audioConnection';

	let audioConnection: AudioConnection;
	const unsubscribeAudio = audiosList.subscribe((value) => (audioConnection = value));
	onDestroy(() => {
		unsubscribeAudio;
	});
</script>

<Navbar title="Audios">
	<span slot="button">
		<button
			class="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 "
			>Button
		</button></span>
</Navbar>

<Modal title="Upload your audio" visible={true}>
<span slot="content">
	<div class="flex">

		<div class="w-2/3 bg-white pt-14 px-5 space-y-10">
		
			<div class="flex flex-col items-center border border-dashed border-gray-300 text-xs 2xl:text-sm py-5 2xl:py-10 space-y-2">

				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
				</svg>

				<p>.MP3</p>
				<p class="text-gray-500">You can also upload files by</p>
				<a href="/" class="text-indigo-800 underline">clicking here</a>
			</div>
			<div class="mb-10">
				<p class="text-base 2xl:text-xl font-semibold mb-1">Selected stations</p>
				<div class="my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5">
				<Card type="horizontal">
					<span slot="title">
						<h2
							class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
						>
							Clounds FM
						</h2>
					</span>
					<span slot="description">
						88.5 FM	
					</span>
					<span slot="right">
						<button class="rounded-full p-2 focus:outline-none hover:bg-indigo-800 hover:text-white text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</span>
				</Card>
				<Card type="horizontal">
					<span slot="title">
						<h2
							class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
						>
							Clounds FM
						</h2>
					</span>
					<span slot="description">
						88.5 FM	
					</span>
					<span slot="right">
						<button class="rounded-full p-2 focus:outline-none hover:bg-indigo-800 hover:text-white text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</span>
				</Card>
				<Card type="horizontal">
					<span slot="title">
						<h2
							class="mt-4 mb-1 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"
						>
							Clounds FM
						</h2>
					</span>
					<span slot="description">
						88.5 FM		
					</span>
					<span slot="right">
						<button class="rounded-full p-2 focus:outline-none hover:bg-indigo-800 hover:text-white text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</span>
				</Card>
				</div>

				
			</div>

		</div>

		<div class="w-1/3 bg-blueGray-50">
			<div class="space-y-5 px-5 py-3 pb-10">
				<p class="text-sm 2xl:text-base font-medium">Add Station to Monitor</p>

				<div class="relative">
					<input type="text" class="appearance-none block focus:outline-none w-full border rounded-2xl pl-8 pr-2 py-2 text-xs bg-white" placeholder="Search keyword">

					<svg xmlns="http://www.w3.org/2000/svg" class="absolute top-2.5 left-2 h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>

				<!-- Radio List -->
				<ul>
					<li class="flex justify-between items-center py-2 2xl:py-4 border-b border-gray-100">

						<div class="inline-flex space-x-4 items-center">

							<div class="bg-indigo-50 rounded-2xl py-2 px-4">
								<span class="text-base 2xl:text-xl">E</span>
							</div>
							<div>
								<p class="text-xs 2xl:text-sm font-semibold mb-1">East Africa Radio</p>
								<p class="text-xs">88.1 FM</p>
							</div>
						</div>

						<div class="cursor-pointer rounded-md text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</li>

					<li class="flex justify-between items-center py-2 2xl:py-4 border-b border-gray-100">

						<div class="inline-flex space-x-4 items-center">

							<div class="bg-green-50 rounded-2xl py-2 px-4">
								<span class="text-base 2xl:text-xl">C</span>
							</div>
							<div>
								<p class="text-xs 2xl:text-sm font-semibold mb-1">Clouds FM</p>
								<p class="text-xs">88.5 FM</p>
							</div>
						</div>

						<div class="cursor-pointer rounded-md text-gray-500 border-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</li>

					<li class="flex justify-between items-center py-2 2xl:py-4 border-b border-gray-100">

						<div class="inline-flex space-x-4 items-center">

							<div class="bg-red-50 rounded-2xl py-2 px-4">
								<span class="text-base 2xl:text-xl">R</span>
							</div>
							<div>
								<p class="text-xs 2xl:text-sm font-semibold mb-1">RFA</p>
								<p class="text-xs">89.8 FM</p>
							</div>
						</div>

						<div class="cursor-pointer rounded-md text-gray-500 border-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</li>
				</ul>
				<!-- End Radio List -->

			
			</div>

		</div>

	</div>
</span>
</Modal>

<div class="mb-12">
	{#if audioConnection}
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
			{#each audioConnection.edges as edge}
				<div>
					<AudioCard audio={edge.node} />
				</div>
			{/each}
		</div>
	{/if}
</div>
