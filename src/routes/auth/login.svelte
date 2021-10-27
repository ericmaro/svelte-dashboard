<script lang="typescript">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { loginAction, errorList } from '@/stores/user/userStore';
	import { isLoading } from '@/stores/appStore';
	import type { LoginRequestType } from '@/stores/user/types/loginRequestType';
	import  Button from "@/components/Button.svelte";
	import  Alert from "@/components/Alert.svelte";
import { AlertType } from '@/shared/types/RequestError';

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			password: '',
			email: ''
		},
		validationSchema: yup.object().shape({
			password: yup.string().required(),
			email: yup.string().email().required()
		}),
		onSubmit: (values) => {
			const data: LoginRequestType = { identifier: values.email, password: values.password };
			loginAction(data);
		}
	});
</script>

<h3 class="my-4 text-2xl font-semibold text-skin-base">Account Login</h3>
<div>
	{#each $errorList as error}
	<Alert type={AlertType.WARNING}>
		<h3 class="font-semibold">{error.message}</h3>
	</Alert>
	{/each}

</div>
<form on:submit={handleSubmit} class="flex flex-col space-y-5">
	<div class="flex flex-col space-y-1">
		<label for="email" class="text-sm font-semibold text-skin-base">Email address</label>
		<input
			type="email"
			id="email"
			on:change={handleChange}
			bind:value={$form.email}
			class="px-4 py-2 transition duration-300 border bg-skin-inverted text-skin-base border-skin-base rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-skin-base"
		/>
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}
	</div>

	<div class="flex flex-col space-y-1">
		<div class="flex items-center justify-between">
			<label for="password" class="text-sm font-semibold text-skin-base">Password</label>
			
		</div>
		<input
			type="password"
			id="password"
			on:change={handleChange}
			bind:value={$form.password}
			class="px-4 py-2 transition duration-300 border  text-skin-base text-skin-inverted border-skin-base rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-skin-base"
		/>
		{#if $errors.password}
			<small>{$errors.password}</small>
		{/if}
	</div>
	<div class="flex items-center space-x-2">
		<input
			type="checkbox"
			id="remember"
			class="w-4 h-4 transition duration-300 rounded text-skin-base text-skin-inverted focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-skin-base"
		/>
		<label for="remember" class="text-sm font-semibold text-skin-base">Remember me</label>
	</div>
	<div>
		<Button fullWidth={true} isLoading={$isLoading}>
			<span>Login</span>

		</Button>
	</div>
	<div class="flex flex-col space-y-5">
		<span class="flex items-center justify-center space-x-2">
			<span class="h-px bg-skin-inverted-muted w-14" />
			<span class="font-normal text-skin-base">Forgot password?</span>
			<span class="h-px bg-skin-inverted-muted w-14" />
		</span>
	
	</div>
</form>
