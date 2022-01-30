<script context="module">
	import { client } from '$lib/api';

	export async function load() {
		let page = {};

		try {
			const response = await client.post('query/page/', {
				$match: { path: '/about' }
			});

			page = response.data.items.length && response.data.items[0];
		} catch (error) {
			console.log(error);
		}

		return {
			props: { page }
		};
	}
</script>

<script>
	export let page;

	let { who, what } = page.data;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<div class="about-title ">
	<h1 class="content-title" style="color: #fff;">About us</h1>
</div>
<div class="about-main">
	{#if who}
		<div class="split">
			<div class="c2 p2">
				<h1>{who.title.value}</h1>
				<br />
				{@html who.body.value}
				<br /><br />
				<p style="font-weight: bold; font-size: 20px;">We make the future safe.</p>
				<br />
				<a href="contacts" class="submit">Learn more about us</a>
			</div>

			<div class="c2 ">
				<img src="/img/{who.feature.value}" alt={who.title.value} />
			</div>
		</div>
	{/if}

	{#if what}
		<div class="split">
			<div class="c2 hidden">
				<img src="/img/{what.feature.value}" alt={what.title.value} />
			</div>
			<div class="c2 p2">
				<h1>{what.title.value}</h1>
				<br />
				{@html what.body.value}
			</div>
		</div>
	{/if}
</div>
