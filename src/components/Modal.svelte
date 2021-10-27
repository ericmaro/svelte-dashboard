<script lang="typescript">
	import { createEventDispatcher } from 'svelte';
    import Button from "@/components/Button.svelte";

	export let visible: boolean;
	export let title: string;
    export let isLoading: boolean = false;
	export let isBig:boolean = true;
	export let confirmButtonText:string = 'Save';

	const dispatch = createEventDispatcher();

	const onCancel = () => {
		dispatch('cancel');
	};

	const onConfirm = () => {
		dispatch('confirm');
	};
</script>

{#if visible}
	<div
		class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
	>
		<div class="flex flex-col min-h-0 {isBig?'w-full xl:w-3/4 2xl:w-1/2':'w-1/4 xl:w-1/4 2xl:w-1/4'}  rounded-lg  shadow-xl">
			<div
				class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
			>
				<p class="font-semibold text-gray-800">{title}</p>
                <button on:click={() => onCancel()}>
                    <svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
                </button>
				
			</div>
			<div class="flex flex-col bg-gray-50">
				<slot name="content" />
			</div>
			<div
				class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
			>
				<button on:click={() => onCancel()} class="font-semibold text-gray-600">Cancel</button>
				<Button
				fullWidth={false}
					on:click={() => onConfirm()}
				isLoading={isLoading}
				>
					{confirmButtonText}
				</Button>
			</div>
		</div>
	</div>
	<div class="opacity-25 fixed inset-0 z-40 bg-black" />
{/if}
