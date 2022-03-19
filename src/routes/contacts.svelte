<script>
	import { client } from '$lib/api';
	import CheckboxField from '$lib/components/admin/fields/CheckboxField.svelte';
	import EmailField from '$lib/components/admin/fields/EmailField.svelte';
	import TextareaField from '$lib/components/admin/fields/TextareaField.svelte';
	import TextField from '$lib/components/admin/fields/TextField.svelte';

	let inputs = {};
	let errors = {};
	let success = false;

	const handleSubmit = async () => {
		try {
			await client.post('inquiry', inputs);
			success = true;
		} catch (err) {
			errors = err.response.data.errors;
			console.log(error);
		}
	};
</script>

<svelte:head>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="green">
	<section class="green-width">
		<h1>Contact with us</h1>
		<div class="c-3">
			{#if !success}
				<form class="contacts">
					<fieldset>
						<div class="w100">
							<div class="p1">
								<TextField
									name="Name"
									id="name"
									classes="w100"
									label="Name"
									bind:value={inputs.name}
									error={errors.name && errors.name.message}
								/>
							</div>
							<div class="p1">
								<EmailField
									classes="w100"
									name="email"
									id="email"
									label="E-mail"
									bind:value={inputs.email}
									error={errors.email && errors.email.message}
								/>
							</div>
							<div class="p1">
								<TextField
									name="Name"
									id="name"
									classes="w100"
									label="Phone"
									bind:value={inputs.phone}
									error={errors.phone && errors.phone.message}
								/>
							</div>
							<div class="p1">
								<TextareaField
									name="body"
									id="body"
									label="Message"
									bind:value={inputs.body}
									error={errors.body && errors.body.message}
								/>
							</div>
						</div>

						<div style="display: flex; justify-content: space-between;" class="p1">
							<div>
								<CheckboxField
									error={errors.terms && errors.terms.message}
									bind:value={inputs.terms}
								>
									<span /> I`ve read and accept
									<a href="/terms">the Terms &amp; Conditions</a>
								</CheckboxField>
							</div>
							<!-- <div>
							<label for="terms" class="checkbox">
								<input type="checkbox" name="terms" id="terms" />
								<span /> I`ve read and accept
								<a href="/terms">the Terms &amp; Conditions</a>
							</label>
						</div> -->
							<div>
								<button type="submit" on:click|preventDefault={handleSubmit}
									>Send</button
								>
							</div>
						</div>
					</fieldset>
				</form>
			{:else}
				<p>Success</p>
			{/if}
		</div>
		<div class="c3 pdg">
			<h2>Cert Medical</h2>
			<h3>Head Office</h3>
			<p>
				Sofia p.k. 1618, <br />
				168 Tsar Boris III Blvd.,<br />
				Andromeda Business Center,<br />
				3rd floor, office 31
			</p>
			<br />
			<p>
				<b>Petar Petrov</b><br />
				<a href="tel:+359877122777" itemprop="telephone">0877 122 777 </a>
				<b>
					<a href="mailto:petar.emilov.petrov@gmail.com"
						>petar.emilov.petrov@gmail.com
					</a>
				</b>
			</p>
		</div>
	</section>
</div>

<iframe
	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.7814547743214!2d23.25880521515909!3d42.6659864237197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84b56d494005%3A0x6041c316e84c821c!2z0LHRg9C7LiDigJ7QptCw0YAg0JHQvtGA0LjRgSBJSUnigJwgMTY4LCAxNjE4INC60LIuINCe0LLRh9CwINC60YPQv9C10LssINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1632812113467!5m2!1sbg!2sbg"
	width="100%"
	height="450"
	style="border:0; float: left; line-height: 0;"
	allowfullscreen=""
	loading="lazy"
/>
