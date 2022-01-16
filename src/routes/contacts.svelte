<script>
	import { api } from '$lib/api';

	let inputs = {};

	const handleSubmit = async () => {
		try {
			const response = await api.post('inquiry', inputs);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="green">
	<section class="green-width">
		<h1>Contact with us</h1>
		<div class="c-3">
			<form class="contacts">
				<fieldset>
					<div class="w100">
						<div class="p1">
							<label for="name">Name</label>
							<input
								class="w100"
								type="text"
								name="Name"
								id="name"
								bind:value={inputs.name}
							/>
						</div>
						<div class="p1">
							<label for="email">e-mail</label>
							<input
								class="w100"
								type="text"
								name="EMail"
								id="email"
								bind:value={inputs.email}
							/>
						</div>
						<div class="p1">
							<label for="phone">Phone</label>
							<input
								class="w100"
								type="text"
								name="Phone"
								id="phone"
								bind:value={inputs.phone}
							/>
						</div>
						<div class="p1">
							<label for="body">Message</label>
							<textarea name="body" id="body" bind:value={inputs.body} />
						</div>
					</div>

					<div style="display: flex; justify-content: space-between;" class="p1">
						<div>
							<label class="checkbox">
								<input type="checkbox" bind:checked={inputs.terms} />
								<span></span>	Yes! Send me regular email spam 
							</label>
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
		</div><div class="c3 pdg">
			<h2>Cert Medical</h2>
			<h3>Head Office</h3>
			<p>
				Sofia p.k. 1618, <br />
				168 Tsar Boris III Blvd.,<br />
				Andromeda Business Center,<br />
				3rd floor, office 31
			</p>
			<p>
				<b>
					<a href="mailto:petar.emilov.petrov@gmail.com"
						>petar.emilov.petrov@gmail.com
					</a> <br />
				</b>
				<a href="tel:+359877122777" itemprop="telephone">0877 122 777 </a>
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
