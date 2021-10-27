<script lang="typescript">
	import { onMount } from 'svelte';
	import {
		getRoleAction,
		createOneRoleAction,
		updateOneRoleAction,
		rolesList,
		isLoading as roleLoading,
		deleteOneRoleAction
	} from '@/stores/role/roleStore';

	import MasterTable from '@/components/MasterTable/index.svelte';
	import MasterForm from '@/components/MasterForm/MasterForm.svelte';
	import { dataColumns, sortOptions } from './table';
	import type { MenuItem } from '@/shared/types/menuItem';
	import type { Role } from '@/stores/role/types/role';
	import Modal from '@/components/Modal.svelte';
	import { createRole } from './forms/create';
	import { editRole } from './forms/edit';
	import type { RoleEdge } from '@/stores/role/types/roleEdge';
	import type { CreateOneRoleInput } from '@/stores/role/types/createOneRoleInput';
	import type { UpdateOneRoleInput } from '@/stores/role/types/updateOneRoleInput';
	import type { Sort } from '@/shared/types/sort';
	import type { DeleteOneInput } from '@/shared/types/DeleteOneInput';
	let formModal: boolean = false;
	let updatePasswordFormModal: boolean = false;
	let selectedRole: Role = null;
	let createForm = { ...createRole };
	let editForm = { ...editRole };
	let formData;
	let isLoading: boolean = false;

	roleLoading.subscribe((value) => (isLoading = value));
	roleLoading.subscribe((value) => (isLoading = value));

	onMount(() => {
		getRoleAction();
	});

	const showFormModal = () => {
		formModal = true;
	};

	const hideFormModal = () => {
		console.log('cancel');
		formModal = false;
		selectedRole = null;
	};

	const showEditForm = (event) => {
		selectedRole = event.detail;
		formModal = true;
	};
	const showProfile = () => {
		formModal = true;
	};

	const onMore = (event) => {
		console.log(event);
		//   { item: MenuItem; node: Role }
		const values = event.detail;
		if (values.item.name === 'password') {
			//show change password modal
			// resetErrors();
			selectedRole = values.node;
			updatePasswordFormModal = true;
		}
	};


	const onFormChange = (event) => {
		formData = event.detail;
		console.log(formData);
	};
	const _createRole = () => {
		const input: CreateOneRoleInput = { role: formData };
		createOneRoleAction(input);
		hideFormModal();
	};

	const _updateRole = () => {
		const input: UpdateOneRoleInput = { id: selectedRole.id, update: formData };
		updateOneRoleAction(input);
		hideFormModal();
	};

	const _deleteRole = (event) => {
		console.log(event.detail);
		const input: DeleteOneInput = { id: event.detail.id };
		deleteOneRoleAction(input);
	};

	const _navigate = (event)=> {

		getRoleAction({ paging:event.detail });
	}

	const _sort = (event)=>{
		const sort: Sort[] = [{ field: event.detail, direction: 'ASC' }];
		getRoleAction({ sorting: sort });
	}

	const _search = (event)=> {

		getRoleAction({filter:event.detail });
	}
</script>

<Modal
	on:cancel={() => hideFormModal()}
	on:confirm={selectedRole ? _updateRole : _createRole}
	title={selectedRole ? 'Edit role' : 'Create role'}
	{isLoading}
	visible={formModal}
>
	<span slot="content">
		<MasterForm
			on:change={onFormChange}
			loading={isLoading}
			data={selectedRole ? selectedRole : {}}
			on:onSubmit={() => null}
			form={selectedRole ? editForm : createForm}
		/>
	</span>
</Modal>

{#if $rolesList !== null}
	<MasterTable
		columns={dataColumns}
		data={$rolesList.edges}
		pageInfo={$rolesList?.pageInfo}
		editAction={true}
		viewAction={true}
		deleteAction={true}
		selectButtonText="select"
		newAction={true}
		moreAction={false}
		sortOptions={sortOptions}
		loading={isLoading}
		newButtonText="Add Role"
		searchColumns={['name', 'type']}
		on:onSearch={_search}
		on:onNew={showFormModal}
		on:sort={_sort}
		on:onEdit={showEditForm}
		on:onView={showProfile}
		on:onMore={onMore}
		on:onDelete={_deleteRole}
		on:onNavigate={_navigate}
	/>
{/if}
