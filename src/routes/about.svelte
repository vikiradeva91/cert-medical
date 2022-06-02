<script context="module">
	import createClient from '$lib/prismicClient';
	import * as prismicH from '@prismicio/helpers';

	export async function load({ fetch, params }) {
		const client = createClient(fetch);
		const document = await client.getByUID('page', 'about');

		console.log('document.data', document.data);

		if (document) {
			return {
				props: { body: document.data.body[0].items[0] }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	export let body;

	let {
		about_title,
		about_image,
		about_body,
		about_button_text,
		about_button_type,
		about_cta_link
	} = body;
</script>

<svelte:head>
	<title>{about_title || ''}</title>
</svelte:head>

<div class="about-title ">
	<h1 class="content-title" style="color: #fff;">About us</h1>
</div>
<div class="about-main">
	<div class="split">
		<div class="c2 ">
			<div class="p02">
				<h1>{about_title}</h1>
				<br />
				{@html prismicH.asHTML(about_body)}
				<br />
				<a href="contacts" class="submit">Contacts &nbsp;&nbsp;&nbsp;&nbsp;➤</a>
				<br />
			</div>
		</div>

		<div class="c2 ">
			<img class="respons-img" src={about_image.url} alt={about_image.alt} />
		</div>
	</div>

	<!-- {#if what}
		<div class="split">
			<div class="c2 hidden">
				<img src="/img/{what.feature.value}" alt={what.title.value} />
			</div>
			<div class="c2">
				<div class=" p02">
					<h1>{what.title.value}</h1>
					<br />
					{@html what.body.value}
				</div>
			</div>
		</div>
	{/if} -->
</div>
