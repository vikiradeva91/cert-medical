<script>
	import { client } from '$lib/api';
	import PasswordField from '../lib/components/admin/fields/PasswordField.svelte';
	import EmailField from '../lib/components/admin/fields/EmailField.svelte';
	import { setCookie } from '$lib/cookies';

	let inputs = {};
	let errors = {};

	const signIn = async () => {
		try {
			const response = await client.post('auth', inputs);

			setCookie({
				name: 'token',
				value: response.data.token,
				daysToExpire: 1
			});

			window.location.href = '/';
		} catch (err) {
			errors = err.response.data;
			console.log(err);
		}
	};
</script>

<svelte:head>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="container flex center">
	<div class="flex stack">
		<EmailField
			name="email"
			placeholder="Your email here"
			label="E-mail"
			bind:value={inputs.email}
		/>
		<PasswordField
			name="password"
			placeholder="Your password"
			label="Password"
			bind:value={inputs.password}
		/>

		<div>
			<button on:click={signIn}>Sign in</button>
		</div>

		{#if errors.message}
			<div>{errors.message}</div>
		{/if}
	</div>
</div>

<style>
	button {
		cursor: pointer;
	}
</style>
