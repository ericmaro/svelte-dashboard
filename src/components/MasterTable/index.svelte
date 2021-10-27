<script lang="typescript">
	import type { PageInfo } from '@/shared/types/paging';
	import type { MenuItem } from '@/shared/types/menuItem';
	import type { TableColumn } from './types/list';
	import { createEventDispatcher } from 'svelte';
	import { combineWithAttributesOn, debounce } from '@/shared/lib/helpers';
	import DotsVerticalIcon from '@/components/icons/DotsVerticalIcon.svelte';
	import DropDown from '../DropDown.svelte';
	import Button from '@/components/Button.svelte'
	import Icon from '@/components/Icon/index.svelte'

	const dispatch = createEventDispatcher();

	export let data: any[];
	export let pageInfo: PageInfo;
	export let loading: boolean;
	export let columns: TableColumn[];
	export let sortOptions: TableColumn[] = [];
	export let searchColumns: string[];
	export let extractField: string = null;
	export let editAction: boolean;
	export let viewAction: boolean;
	export let deleteAction: boolean;
	export let moreAction: boolean;
	export let newAction: boolean;
	export let moreMenuItems: MenuItem[] = [];
	export let newButtonText: string;
	export let selectButtonText: string;

	let selectedItems: any[] = [];
	let seachValue: string = '';

	const onView = (node: any) => dispatch('onView', node);
	const onEdit = (node: any) => dispatch('onEdit', node);
	const onDelete = (node: any) => dispatch('onDelete', node);
	const onNew = (node: any) => dispatch('onNew', node);

	const onMoreItem = (event, node) =>
		{
			dispatch('onMore', { node: node, item: event.detail })
		};

	const onNextPage = () =>
		dispatch('onNavigate', {
			first: 10,
			after: pageInfo?.endCursor
		});
	const onPreviousPage = () =>
		dispatch('onNavigate', {
			last: 10,
			before: pageInfo?.startCursor
		});

	const setSearchValue = (event: Event) => {
		const target = event.target as HTMLInputElement;
		seachValue = target.value;

		const searchObject = {
			or: searchColumns.map((column: string) => {
				let obj: { [unit: string]: any } = {};
				obj[column] = { iLike: `%${target.value}%` };
				return obj;
			})
		};
		dispatch('onSearch', searchObject);
	};

	const onSort = (event)=>dispatch('sort', event.target.value);

	const onSearch = debounce(setSearchValue, 1000);

	const onSelectAction = () => {
		dispatch('onSelectAction', selectedItems);
	};

	const onCheckedAll = (value: any) => {
		console.log(value)
		if (value.target.checked) {
			selectedItems = data?.map((d: any) => d.node as any);
		
		} else {
			selectedItems = [];
		}
		dispatch('onSelectItems', selectedItems);
	};

	const stringComposer = (object: any, key: string) => {
		if (extractField) {
			return combineWithAttributesOn(object, extractField)[key];
		} else {
			return object[key];
		}
	};

	const onCheckedOne = (value: any, node: any) => {
	let selected = [...selectedItems]
		if (!selectedItems.includes(node)) {
			if (value.target.checked) {
				selected.push(node);
			} else {
				let index = selected.findIndex((d) => d === node);
				selected.splice(index, 1);
			}
		} else {
			if (!value.target.checked) {
				let index = selected.findIndex((d) => d === node);
				selected.splice(index, 1);
			}
		}


selectedItems = selected;
		dispatch('onSelectItems', selectedItems);
	};
</script>

<div class="space-y-2">
	<div class="flex justify-between my-5">
		<div class="flex items-center space-x-2">
			<select on:change={onSort} class="w-40 select select-bordered px-4 py-2.5 text-sm text-gray-500 focus:outline-none">
				<option>Order By</option>
				{#each sortOptions as  option}
				<option value={option.name}>{option.title}</option>
				{/each}
				
			</select>

			<input
				type="text"
				placeholder="Search"
				class="w-72 input input-bordered px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
				value={seachValue}
				on:input={onSearch}
			/>
		</div>

		<div class="flex justify-end space-x-4">
			{#if newAction}
			<Button
				fullWidth={false}
					on:click={onNew}
				isLoading={false}
				>
				{newButtonText ? newButtonText : 'Create new'}
				</Button>
				
			{/if}
			{#if selectedItems.length > 0}
				<button
					on:click={onSelectAction}
					class="bg-indigo-800 text-white text-xs lg:text-sm px-5 py-2 rounded-md"
				>
					{selectButtonText ? selectButtonText : 'Select'}
				</button>
			{/if}
		</div>
	</div>

	<div class="overflow-x-auto overflow-y-hidden shadow-md rounded-md bg-white">
		{#if loading}
			<div class="h-56 w-full flex justify-center items-center">
				<span class="ml-2">Loading</span>
			</div>
		{/if}
		{#if !loading && data != null}
			<table class="table table-zebra w-full divide-y divide-gray-200">
				<thead class="bg-gray-100 text-gray-500">
					<tr class="text-left text-xs font-medium uppercase">
						<th class="p-4 whitespace-nowrap"
							><input type="checkbox" on:change={onCheckedAll} class="checkbox" /></th
						>
						{#each columns as column}
							<th class="p-4 tracking-wider">{column.title}</th>
						{/each}
						{#if editAction || viewAction || deleteAction}
							<th class="p-4 text-right">Actions</th>
						{/if}
					</tr>
				</thead>
				<tbody class="text-xs divide-y divide-gray-200">
					{#each data as item, j}
						<tr>
							<td class="p-4 whitespace-nowrap"
								><input
									type="checkbox"
									on:change={(evt) => onCheckedOne(evt, item.node)}
									checked={selectedItems.includes(item.node)}
									class="checkbox"
								/></td
							>
							{#each columns as column, i}
								<td class="p-4 whitespace-nowrap">
									{#if column?.widget && column?.widget === 'audio'}
										<span>
											<audio src={item.node[column.name]} />
										</span>
									{:else}
										<span>
											{stringComposer(item.node, column.name)}
										</span>
									{/if}
								</td>
							{/each}
							{#if editAction || viewAction || deleteAction}
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<div class="flex item-right justify-end items-center space-x-2">
										{#if viewAction}
											<button
												on:click={() => onView(item.node)}
												class="btn btn-circle btn-sm btn-ghost p-0"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-4 w-4 text-indigo-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
													/>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
													/>
												</svg>
											</button>
										{/if}
										{#if editAction}
											<button
												on:click={() => onEdit(item.node)}
												class="btn btn-circle btn-sm btn-ghost p-0"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-4 w-4 text-blue-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
													/>
												</svg>
											</button>
										{/if}
										{#if deleteAction}
											<button
												on:click={() => onDelete(item.node)}
												class="btn btn-circle btn-sm btn-ghost p-0"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-4 w-4 text-red-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													/>
												</svg>
											</button>
										{/if}
										{#if moreAction && moreMenuItems}
											<DropDown items={moreMenuItems} on:select={(event)=>onMoreItem(event, item.node)}>
												<span>
													<Icon name='dots-vertical' size="18" />
												</span>
											</DropDown>
										{/if}
									</div>
								</td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
	<div class="flex justify-end">
		{#if pageInfo?.hasPreviousPage}
			<button on:click={onPreviousPage} class="btn btn-dark w-auto mr-1 mb-2 uppercase">back</button
			>
		{/if}
		{#if pageInfo?.hasNextPage}
			<button on:click={onNextPage} class="btn btn-dark w-auto mr-1 mb-2 uppercase">Next</button>
		{/if}
	</div>
</div>
