<script context="module">
	import { client } from '$lib/api';

	export async function load() {
		let page = {},
			blocks = {};

		try {
			const response = await client.post('query/page/', {
				$match: { path: '/about' }
			});

			page = response.data.items[0];

			page.blocks.map(({ key, value }) => {
				blocks[key] = value;
			});
		} catch (error) {
			console.log(error);
			return {};
		}

		return {
			props: { page, blocks }
		};
	}
</script>

<script>
	export let page, blocks;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<div class="about-title ">
	<h1 class="content-title" style="color: #fff;">About us</h1>
</div>
<div class="about-main">
	{#if blocks.who}
		<div class="split">
			<div class="c2 p2">
				<h1>Who we are</h1>
				<br />
				{@html blocks.who}
				<br /><br />
				<p style="font-weight: bold; font-size: 20px;">We make the future safe.</p>
				<br />
				<a href="contacts" class="submit">Learn more about us</a>
			</div>

			<div class="c2 ">
				<img src="/img/aboutus_1.jpg" alt="" />
			</div>
		</div>
	{/if}

	{#if blocks.what}
		<div class="split">
			<div class="c2 hidden">
				<img src="/img/aboutus_2.jpg" alt="" />
			</div>
			<div class="c2 p2">
				<h1>What we do</h1>
				<br />
				{@html blocks.what}
			</div>
		</div>
	{/if}
</div>
