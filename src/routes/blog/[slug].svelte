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
	<title>Blog - {post.title}</title>
</svelte:head>

<div class="blog-title">
	<h1 class="blog-in-title">BLOG ARTICLE </h1>
</div>

<!-- <h1 class="content-title mrg-top">
	<i>― {post.title} ―</i>
</h1> -->
<div style="background-color: #f0f0f0;" class="p1">
	<section class="blog-in">
		<div class="grouplabel"><em> January 30, 2022</em></div>
		<div class="p2">
			<h1>{post.title}</h1>
			{@html post.body}
		</div>
	</section>
</div>