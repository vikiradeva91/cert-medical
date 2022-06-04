<script context="module">
	import createClient from '$lib/prismicClient';
	import * as prismicH from '@prismicio/helpers';

	export async function load({ fetch }) {
		const client = createClient(fetch);
		const document = await client.getByUID('page', 'services');

		if (document) {
			return {
				props: { document }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	export let document;

	const services = document.data.body;
</script>

<div class="services-in-title">
	<h1 class="content-title" style="color: #1F2040;">Services</h1>
</div>

<div class="services-container">
	<div class="services-container-width">
		<h1>
			CERT MEDICAL LTD. is the leading competence centre for CE marking of medical devices in
			Bulgaria.
		</h1>

		<h2>
			Our experts team knows the complex regulatory framework and to guarantee European market
			access. Since 2005 we learn and develop constantly to be your strong competitive
			advantage!
		</h2>
		<br />
		<p>
			<strong
				>CERT MEDICAL offers full expert support throughout the overall process of ensuring
				compliance of your company and medical devices with the EU MDR 745 requirements,
				including:
			</strong>
		</p>
	</div>
	<div class="accordion-services">
		{#each services as service, i}
			<div class="accordion">
				<h2>
					{i + 1}. {service.primary.service_short}
				</h2>
				<div class="p">
					{@html prismicH.asHTML(service.primary.service_description)}
				</div>
			</div>
		{/each}
	</div>
</div>
