<script context="module">
	import { client } from '$lib/api';

	export async function load() {
		let page = {};

		try {
			const response = await client.post('query/page/', {
				$match: { path: '/about' }
			});

			page = response.data.items[0];

			console.log(page);
		} catch (error) {
			console.log(error);
			return {};
		}

		return {
			props: { page }
		};
	}
</script>

<script>
	export let page;
</script>

<div class="about-title ">
	<h1 class="content-title" style="color: #fff;">About us</h1>
</div>
<div class="about-main">
	<div class="c2 p2">
		<h1>{page.blocks[0].name}</h1>
		<br />
		{@html page.blocks[0].body}
		<br /><br />
		<p style="font-weight: bold; font-size: 20px;">We make the future safe.</p>
		<br />
		<a href="contacts" class="submit">Learn more about us</a>
	</div>

	<div class="c2 ">
		<img src="/img/aboutus_1.jpg" alt="" />
	</div>

	<div class="c2 hidden">
		<img src="/img/aboutus_2.jpg" alt="" />
	</div>
	<div class="c2 p2">
		<h1>{page.blocks[1].name}</h1>
		<br />
		{@html page.blocks[1].body}
	</div>
</div>
