<script lang="typescript">
	import Icon from '@/components/Icon/index.svelte';
	import { currentUser } from '@/stores/user/userStore';
	import type { MenuItem, MenuSection } from '@/shared/types/menuItem';
	import { options } from './options';
	let usersPermissions: string[] = [];
	let permitedNavigation: MenuItem[] = [];

	currentUser.subscribe((cu) => {
		usersPermissions = cu?.user?.permissions?.map((p) => p.name);

		permitedNavigation = options
			.map((item) => {
				const status: boolean = usersPermissions?.some?.((p) =>
					item.permissions?.some?.((up) => up === p)
				);
				if (status && item) return item;
			})
			.filter((x) => x !== undefined);
	});
</script>

<div class="space-y-10">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
		{#each permitedNavigation as item}
			<a
				href={item?.route}
				class="flex flex-col items-center focus:outline-none p-5 bg-skin-inverted  rounded-md shadow-md transform hover:scale-110 duration-100 ease-linear"
			>
				<Icon name={item?.icon} size="80" />

				<span class="mt-5 text-sm font-normal">{item?.title}</span>
			</a>
		{/each}
	</div>
</div>
