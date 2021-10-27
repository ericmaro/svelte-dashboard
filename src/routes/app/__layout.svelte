<script>
	import '../../app.postcss';
	import Navbar from '@/components/Navbar.svelte';
	import Sidebar from '@/components/Sidebar.svelte';
	import RightSide from '@/components/RightSide.svelte';
	import { navigation } from '@/routes/navigation';
	import { BarLoader } from 'svelte-loading-spinners';
	import { loginCheckAction } from '@/stores/user/userStore';
	import { isLoading } from '@/stores/appStore';
	import { onMount } from 'svelte';
	onMount(() => {
		loginCheckAction();
	});
</script>

<div class="flex flex-col h-screen bg-gray-100 ">
	<div class="flex flex-1 overflow-hidden">
		<div class="bg-gray-900  w-24 text-white p-4 text-center">
			<Sidebar {navigation} useMini={true} />
		</div>

		<div class="flex flex-1 flex-col">
			<Navbar />
			{#if $isLoading}
				<div class="fixed inset-0  w-full m-auto bg-black bg-opacity-25 flex-col  z-10 h-full">
					<div class="flex h-full w-full items-center justify-center">
						<div class="p-5 bg-skin-primary rounded-3xl drop-shadow-md">
							<BarLoader size="60" color="#e4e4e4" unit="px" />
						</div>
					</div>
				</div>
			{/if}
			<div class="px-10 pb-10 pt-5 overflow-y-auto text-skin-base">
				<slot />
			</div>
		</div>
		<div class="w-1/5 bg-white p-4">
			<RightSide />
		</div>
	</div>
</div>
