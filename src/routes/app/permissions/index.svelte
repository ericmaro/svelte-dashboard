<script lang="typescript">
	import { onMount } from 'svelte';
	import { getRoleAction, removePermissionsToRoleAction, addPermissionsToRoleAction, rolesList, isLoading as roleLoading } from '@/stores/role/roleStore';
	import {
		getPermissionAction,
		permissionsList,
		isLoading as permissionLoading
	} from '@/stores/permission/permissionStore';
	import RolePermission from '@/components/app/RolePermission.svelte';
import type { RelationsInput } from '@/shared/types/relationsInput';
import type { Permission } from '@/stores/permission/types/permission';
import type { Role } from '@/stores/role/types/role';
	let isLoading: boolean;

	onMount(() => {
		getPermissionAction();
		getRoleAction();
	});

	roleLoading.subscribe((loading) => (isLoading = loading));
	permissionLoading.subscribe((loading) => (isLoading = loading));

	const onCheck = (event) => {
		const value: {
      value: boolean;
      permission: Permission;
      role: Role;
    } = event.detail
		  const data: RelationsInput = {
		    id: value.role.id,
		    relationIds: [value.permission.id],
		  };
		  if (value.value) {
		    addPermissionsToRoleAction(data);
		  } else {
		    removePermissionsToRoleAction(data);
		  }
	};
</script>

<div>
	{#if $rolesList && $permissionsList}
		<RolePermission
			roles={$rolesList?.edges}
			permissions={$permissionsList}
			on:check={onCheck}
		/>
	{/if}
</div>
