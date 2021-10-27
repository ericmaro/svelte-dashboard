

<script context="module">
	let onExternalFormSubmit 
  export function submitForm() {
	onExternalFormSubmit() 
  }
</script>

<script  lang="typescript">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import TextInput from './InputTypes/TextInput.svelte';
	import SelectInput from './InputTypes/SelectInput.svelte';
	import NumberInput from './InputTypes/NumberInput.svelte';
	import CheckBoxInput from './InputTypes/CheckBoxInput.svelte';
	import TextAreaInput from './InputTypes/TextAreaInput.svelte';
	import * as yup from 'yup';
	import type { Field } from './types/field';
	import type { FieldGroup } from './types/field.group';
	import type { Form as Sform } from './types/form';
	const dispatch = createEventDispatcher();
	export let form: Sform;
	export let loading: boolean = false;
	export let showSubmit: boolean = true;
	export let data = {};
	let formData = {};
	let schema;
	let errors = {};
	// export let showConfirm: boolean = false;
	onExternalFormSubmit = ()=>{
		handleSubmit()
	}
	onMount(() => {
		const validationSchema = {};

		form?.groups?.forEach((group: FieldGroup) => {
			formData = Object.fromEntries(
				group.fields.map((field: Field) => {
					return [field.name, !(Object.keys(data).length > 0) ? field.value : data[field.name]];
				})
			);

			group.fields.map((field: Field) => {
				if (field.isRequired) {
					switch (field.type) {
						case 'text':
							validationSchema[field.name] = yup.string().required();
						case 'textArea':
							validationSchema[field.name] = yup.string().required();
						case 'select':
							validationSchema[field.name] = yup.string().required();
							break;
						case 'number':
							validationSchema[field.name] = yup.number().required();
							break;
						case 'password':
							if (field.confirmField&&field.confirmField.length>0) {
								validationSchema[field.name] = yup
									.string().oneOf([yup.ref(field.confirmField), null], 'Passwords must match');
							} else {
								validationSchema[field.name] = yup.string().required();
							}
							break;
						default:
							validationSchema[field.name] = yup.string().required();
							break;
					}
				}
			});
			schema = yup.object().shape(validationSchema);
		});
	});

	const onFieldChange = (event) => {
		formData[event.detail.field] = event.detail.value;
		dispatch('change', formData);
	};

	 const handleSubmit = async () => {
		try {
			const validationResult = await schema.validate(formData, { abortEarly: false });
			errors = {};
			if (validationResult) dispatch('submit', formData);
		} catch (err) {
			errors = err.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message };
			}, {});
			console.log(errors);
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	{#each form.groups as group}
		{#if !group.hidden}
			<div class="p-5">
				{#if group.title}
					<div class="text-left mb-0 text-2xl font-light">{group.title}</div>
				{/if}
				<div
					class:grid-cols-1={form.grid === 1}
					class:grid-cols-2={form.grid === 2}
					class:grid-cols-3={form.grid === 3}
					class:grid-cols-4={form.grid === 4}
					class:grid-cols-5={form.grid === 5}
					class:grid-cols-6={form.grid === 6}
					class:grid-cols-7={form.grid === 7}
					class:grid-cols-8={form.grid === 8}
					class:grid-cols-9={form.grid === 9}
					class:grid-cols-10={form.grid === 10}
					class:grid-cols-11={form.grid === 11}
					class:grid-cols-12={form.grid === 12}
					class={'grid auto-rows-max gap-4 mb-5'}
				>
					{#each group.fields as field}
						<div
							class:col-span-1={field.span === 1}
							class:col-span-2={field.span === 2}
							class:col-span-3={field.span === 3}
							class:col-span-4={field.span === 4}
							class:col-span-5={field.span === 5}
							class:col-span-6={field.span === 6}
							class:col-span-7={field.span === 7}
							class:col-span-8={field.span === 8}
							class:col-span-9={field.span === 9}
							class:col-span-10={field.span === 10}
							class:col-span-11={field.span === 11}
							class:col-span-12={field.span === 12}
						>
							{#if field.type === 'password'}
								<TextInput
									disabled={loading}
									masked={true}
									on:change={onFieldChange}
									value={formData[field.name]}
									name={field.name}
									label={field.label}
								/>
							{:else if field.type === 'text'}
								<TextInput
									disabled={loading}
									masked={false}
									on:change={onFieldChange}
									value={formData[field.name]}
									name={field.name}
									label={field.label}
								/>
							{:else if field.type === 'select'}
								<SelectInput
									disabled={loading}
									options={field.options}
									numericValue={field.numericValue ?? field.numericValue}
									on:change={onFieldChange}
									value={formData[field.name]}
									name={field.name}
									label={field.label}
								/>
							{:else if field.type === 'number'}
								<NumberInput
									disabled={loading}
									on:change={onFieldChange}
									value={formData[field.name]}
									name={field.name}
									label={field.label}
								/>
							{:else if field.type === 'textArea'}
								<TextAreaInput
									disabled={loading}
									on:change={onFieldChange}
									value={formData[field.name]}
									name={field.name}
									label={field.label}
								/>
							{:else if field.type === 'checkBox'}
								<CheckBoxInput
									disabled={loading}
									on:change={onFieldChange}
									value={formData[field.name]}
									name={field.name}
									label={field.label}
								/>
							{/if}
							{#if errors[field.name]}
								<span class="text-red-500 text-xs">{errors[field.name]}</span>
							{/if}
						</div>
					{/each}
				</div>
				{#if showSubmit&&form.submitButtonText.length > 1}
					<button class="btn btn-primary mr-1 mb-2"
						>{loading ? 'Loading..' : form.submitButtonText}</button
					>
				{/if}
			</div>
		{/if}
	{/each}
</form>
