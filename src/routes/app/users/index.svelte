<script lang="typescript">
	import { onMount } from 'svelte';
	import {
		getUserAction,
		createOneUserAction,
		updateOneUserAction,
		usersList,
		isLoading as userLoading,
		updateUserPasswordAction
	} from '@/stores/user/userStore';

	import { rolesList } from '@/stores/role/roleStore';

	import MasterTable from '@/components/MasterTable/index.svelte';
	import MasterForm from '@/components/MasterForm/MasterForm.svelte';
	import { submitForm } from '@/components/MasterForm/MasterForm.svelte';
	import { dataColumns } from './table';
	import type { MenuItem } from '@/shared/types/menuItem';
	import type { User } from '@/stores/user/types/user';
	import Modal from '@/components/Modal.svelte';
	import { createUser } from './forms/create';
	import { editUser } from './forms/edit';
	import type { RoleEdge } from '@/stores/role/types/roleEdge';

	import type { CreateOneUserInput } from '@/stores/user/types/createOneUserInput';
	import type { UpdateOneUserInput } from '@/stores/user/types/updateOneUserInput';
	import { updatePasswordForm } from '@/routes/app/users/forms/updatePassword';
	import type { UserUpdatePasswordInput } from '@/stores/user/types/userUpdatePasswordInput';
	let formModal: boolean = false;
	let updatePasswordFormModal: boolean = false;
	let selectedUser: User = null;
	let createForm = { ...createUser };
	let editForm = { ...editUser };
	let formData;
	let isLoading: boolean = false;

	userLoading.subscribe((value) => (isLoading = value));
	const moreMenu: MenuItem[] = [{ title: 'Change password', name: 'password' }];

	rolesList.subscribe((connection) => {
		createForm.groups.forEach((group) => {
			group.fields.forEach((field) => {
				if (field.name === 'roleId') {
					field.options = connection?.edges?.map((edge: RoleEdge) => {
						return {
							label: edge.node.name,
							value: edge.node.id
						} as { label: string; value: any };
					});
				}
			});
		});

		editForm.groups.forEach((group) => {
			group.fields.forEach((field) => {
				if (field.name === 'roleId') {
					field.options = connection?.edges?.map((edge: RoleEdge) => {
						return {
							label: edge.node.name,
							value: edge.node.id
						} as { label: string; value: any };
					});
				}
			});
		});
	});

	onMount(() => {
		getUserAction();
	});

	const onSearch = (filter: any) => {
		console.log(filter);
	};

	const showFormModal = () => {
		formModal = true;
	};

	const hideFormModal = () => {
		console.log('cancel');
		formModal = false;
		updatePasswordFormModal = false;
		selectedUser = null;
	};

	const showEditForm = (event) => {
		selectedUser = event.detail;
		formModal = true;
	};
	const showProfile = () => {
		formModal = true;
	};

	const onMore = (event) => {
		console.log(event);
		//   { item: MenuItem; node: User }
		const values = event.detail;
		if (values.item.name === 'password') {
			//show change password modal
			// resetErrors();
			selectedUser = values.node;
			updatePasswordFormModal = true;
		}
	};

	const onNavigate = (paging: any) => {};

	const onFormChange = (event) => {
		formData = event.detail;
		console.log(formData);
	};
	const createuser = () => {
		const input: CreateOneUserInput = { user: formData };
		createOneUserAction(input);
		hideFormModal();
	};

	const updateuser = () => {
		const input: UpdateOneUserInput = { id: selectedUser.id, update: formData };
		updateOneUserAction(input);
		hideFormModal();
	};
	const onChangePasswordFormSubmit = (event) => {
		const values: UserUpdatePasswordInput = event.detail;
		updateUserPasswordAction({ input: values, id: selectedUser.id });
		hideFormModal();
	};
</script>

<Modal
	on:cancel={() => hideFormModal()}
	on:confirm={selectedUser ? updateuser : createuser}
	title={selectedUser ? 'Edit user' : 'Create user'}
	{isLoading}
	visible={formModal}
>
	<span slot="content">
		<MasterForm
			on:change={onFormChange}
			loading={isLoading}
			showSubmit={false}
			data={selectedUser ? selectedUser : {}}
			on:onSubmit={() => null}
			form={selectedUser ? editForm : createForm}
		/>
	</span>
</Modal>
<Modal
	isBig={false}
	on:cancel={() => hideFormModal()}
	on:confirm={submitForm}
	title="Change user password"
	{isLoading}
	visible={updatePasswordFormModal}
>
	<span slot="content">
		<MasterForm
			on:change={onFormChange}
			loading={false}
			showSubmit={false}
			data={{}}
			on:submit={onChangePasswordFormSubmit}
			form={updatePasswordForm}
		/>
	</span>
</Modal>
{#if $usersList !== null}
	<MasterTable
		columns={dataColumns}
		data={$usersList?.edges}
		pageInfo={$usersList?.pageInfo}
		editAction={true}
		viewAction={true}
		deleteAction={true}
		selectButtonText="select"
		newAction={true}
		moreAction={true}
		moreMenuItems={moreMenu}
		loading={isLoading}
		newButtonText="Add User"
		searchColumns={['firstName', 'lastName', 'phone', 'email']}
		on:onSearch={(e) => onSearch(e)}
		on:onNew={showFormModal}
		on:onEdit={showEditForm}
		on:onView={showProfile}
		on:onMore={onMore}
		on:onNavigate={onNavigate}
	/>
{/if}
