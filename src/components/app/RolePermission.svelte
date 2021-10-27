<script lang="typescript">
	import type { Permission } from '@/stores/permission/types/permission';
	import type { Role } from '@/stores/role/types/role';
	import type { RoleEdge } from '@/stores/role/types/roleEdge';
	import { createEventDispatcher } from 'svelte';

	export let roles: RoleEdge[];
	export let permissions: Permission[];

	const dispatch = createEventDispatcher();

	const onCheck = (event, permission: Permission, role: Role) => {
		const value: boolean = event.target.checked;
		dispatch('check', { value, permission, role });
	};
</script>

<div class="overflow-x-auto shadow-md rounded-md">
	{#if roles.length > 0 && permissions.length > 0}
		<table class="w-full divide-y divide-gray-200 bg-white">
			<thead class="bg-gray-200">
				<tr class="text-left text-xs font-medium uppercase">
					<th class="p-4 text-left">Permisions</th>
					{#each roles as role}
						<th class="p-4 tracking-wider">{role.node.name}</th>
					{/each}
				</tr>
			</thead>
			<tbody class="text-xs divide-y divide-gray-200">
				{#each permissions as permission}
					<tr>
						<td>
							<div class="m-5">
								<div class="leading-none uppercase mt-3">{permission.name}</div>
							</div>
						</td>
						{#each roles as role}
							<td>
								<div class="form-check">
									<input
										id="checkbox-switch-7"
										on:change={(event) => onCheck(event, permission, role.node)}
										checked={role.node.permissions.some((perm) => perm.id === permission.id)}
										class="toggle form-check-switch m-5"
										type="checkbox"
									/>
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
