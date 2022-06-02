<script context="module">
	import createClient from '$lib/prismicClient';
	import * as prismicH from '@prismicio/helpers';

	export async function load({ fetch, params }) {
		const client = createClient(fetch);

		const document = await client.getByUID('post', params.slug);

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
	import moment from 'moment';

	export let document;

	const { title, body, first_publication_date } = document.data;
</script>

<svelte:head>
	<title>Blog - {title}</title>
</svelte:head>

<div class="blog-title">
	<h1 class="blog-in-title">BLOG ARTICLE</h1>
</div>

<!-- <h1 class="content-title mrg-top">
	<i>― {post.title} ―</i>
</h1> -->
<div style="background-color: #f0f0f0;" class="p1">
	<section class="blog-in">
		<div class="grouplabel">
			<em> {moment(first_publication_date).format('MMMM DD, YYYY')}</em>
		</div>
		<div class="p2">
			<h1>{title}</h1>
			{@html prismicH.asHTML(body)}
		</div>
	</section>
</div>
