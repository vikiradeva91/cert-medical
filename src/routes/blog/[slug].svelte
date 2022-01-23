<script context="module">
	import { client } from '$lib/api';
	// import moment from 'moment';

	export async function load({ params }) {
		let post = {};

		try {
			const response = await client.post('query/post/', {
				$match: { slug: params.slug }
			});

			if (response.data.items.length < 1) {
				throw Error('Post not found');
			}

			post = response.data.items[0];
		} catch (error) {
			console.log(error);
			return { status: 404, error };
		}

		return {
			props: { post }
		};
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>CE Marking for Medical Devices - Certification Experts</title>
</svelte:head>

<div class="homeimg">
	<h1 class="heading-primary-main">CE Marking for Medical Devices</h1>
</div>

<h1 class="content-title mrg-top">
	<i>― {post.title} ―</i>
</h1>

<section class="row p2">
	<div class="CE-content">
		{@html post.body}
	</div>
	<div class="CE-img">
		<img src="/img/operating-room-surgery.jpg" alt="" />
	</div>
</section>
