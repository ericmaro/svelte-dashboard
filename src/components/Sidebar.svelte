<script lang="typescript">
	import { logoutAction, currentUser, getLoggedInUserAction } from '@/stores/user/userStore';
	import Icon from '@/components/Icon/index.svelte';
	import LogoutIcon from '@/components/icons/LogoutIcon.svelte';
	import LogoIcon from '@/components/icons/LogoIcon.svelte';
	import Logo from '@/components/icons/Logo.svelte';
	import type { MenuSection } from '@/shared/types/menuItem';
	import { onMount } from 'svelte';
	let usersPermissions: string[] = [];
	export let useMini: boolean = false;
	export let navigation: MenuSection[] = [];
	let permitedNavigation: MenuSection[] = [];
	const logout = () => logoutAction();
	onMount(() => {
		getLoggedInUserAction();
	});

	currentUser.subscribe((cu) => {
		usersPermissions = cu?.user?.permissions?.map((p) => p.name);

		permitedNavigation = navigation.map((nav) => {
			const _nav = Object.assign({}, nav);

			_nav.items = nav.items
				.map((item) => {
					const status: boolean = usersPermissions?.some?.((p) =>
						item.permissions?.some?.((up) => up === p)
					);
					if (status && item) return item;
				})
				.filter((x) => x !== undefined);
			return _nav;
		});
	});
</script>

{#if useMini}
	<div class="flex flex-col justify-center h-full">
		<div>
			<a href="/app" class="block py-2 rounded-lg font-black">
			<LogoIcon/>
			</a>
		</div>
		<div class="flex-1 flex flex-col justify-center py-6">
			{#each permitedNavigation as section}
				{#each section.items as item}
					<a href={item?.route} class="block p-5 rounded-lg hover:bg-gray-600">
						<Icon name={item?.icon} size="18" />
					</a>
				{/each}
			{/each}
		</div>
		<div>
			<button	on:click={logout} class="block p-5 rounded-lg border-solid hover:bg-gray-600">
				<LogoutIcon />
			</button>
		</div>
	</div>
{:else}
	<div
		class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"
	>
		<div class="fixed  top-0 left-0 w-64 bg-white h-full border-r">
			<div class="flex items-center justify-center h-15 py-2.5 border-b">
				<span><Logo /> </span>
			</div>
			<div class="overflow-y-auto overflow-x-hidden flex-grow">
				<ul class="flex flex-col py-4 space-y-1">
					{#each permitedNavigation as section}
						{#if section.items.length > 0}
							<li class="px-5">
								<div class="flex flex-row items-center h-8">
									<div class="text-sm font-light tracking-wide text-gray-500">{section.title}</div>
								</div>
							</li>
						{/if}

						{#each section.items as item}
							<li>
								<a
									href={item?.route}
									class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-skin-base pr-6"
								>
									<span class="inline-flex justify-center items-center ml-4">
										<Icon name={item?.icon} size="18" />
									</span>
									<span class="ml-2 text-sm tracking-wide truncate">{item?.title}</span>
								</a>
							</li>
						{/each}
					{/each}

					<li>
						<button
							on:click={logout}
							class="relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-skin-base pr-6"
						>
							<span class="inline-flex justify-center items-center ml-4">
								<Icon name="logout-outline" size="18" />
							</span>
							<span class="ml-2 text-sm tracking-wide truncate">Logout</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
{/if}
