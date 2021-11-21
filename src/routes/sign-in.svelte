<script>
	import PasswordField from '../components/fields/PasswordField.svelte';
	import EmailField from '../components/fields/EmailField.svelte';
</script>

<div class="container flex center">
	<div class="flex stack">
		<EmailField name="email" placeholder="Your email here" label="E-mail" />
		<PasswordField name="password" placeholder="Your password" label="Password" />

		<div>
			<button on:click={() => console.log('Sign in')}>Sign in</button>
		</div>
	</div>
</div>

<style>
	button {
		cursor: pointer;
	}
</style>
