<script lang="typescript">
	import { page } from '$app/stores';
	import { navigation } from '@/routes/navigation';
	import { options } from '@/routes/app/settings/options';
	import { getLoggedInUserAction, currentUser, updateUserPasswordAction, logoutAction } from "@/stores/user/userStore";
import { onMount } from 'svelte';
const logout = () => logoutAction();
onMount(()=>{
        getLoggedInUserAction();
    })
	let title: string = 'Unkown Page';
	page.subscribe((p) => {
		const { path } = p;
		console.log(path)
		var splits = path.split('/');
		navigation.forEach((section) =>
			section.items.forEach((item) => {
				if (splits && splits.length > 2) {
					const route = splits[2];
					if (item.name === route) {
						title = item.title;
					}
				}
				if (splits && splits.length === 2) title = 'Dashboard';
			})

		
		);
		options.forEach((item) => {
				if (splits && splits.length > 2) {
					const route = splits[2];
					if (item.name === route) {
						title = item.title;
					}
				}
				if (splits && splits.length === 2) title = 'Dashboard';
			})
	});
</script>

<div class="navbar shadow-md bg-skin-inverted z-10 px-5 h-25 ">
	<div class="flex-1 hidden px-2 mx-2 lg:flex">
		<span class="text-lg font-light">
			{title}
		</span>
	</div>

	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				/>
			</svg>
		</button>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<div tabindex="0" class="avatar placeholder btn-circle btn-ghost btn link">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
					<span>{$currentUser?.user?.firstName?.charAt(0)}{$currentUser?.user?.lastName?.charAt(0)}</span>
				</div>
			</div>
			<ul tabindex="0" class="shadow menu dropdown-content bg-base-100 rounded-box w-72">
				<li>
					<div class="rounded-tl-md p-2 side bg-skin-primary text-skin-inverted">
						<div class="flex-row items-center p-3 card-body">
							<div class="mr-5">
								<div tabindex="0" class="avatar placeholder">
									<div class="bg-neutral-focus text-neutral-content rounded-full w-14 h-14">
										<span>{$currentUser?.user?.firstName?.charAt(0)}{$currentUser?.user?.lastName?.charAt(0)}</span>
									</div>
								</div>
							</div>
							<div>
								<h4 class="card-title mb-0">{$currentUser?.user?.firstName} {$currentUser?.user?.lastName}</h4>
								<p class="text-opacity-40">{$currentUser?.user?.role?.name?$currentUser?.user?.role?.name:''}</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/app/profile?tab=secutity">Change password</a>
				</li>
				<li>
					<a href="/" class="" on:click={logout}>Logout</a>
				</li>
			</ul>
		</div>
	</div>
</div>
