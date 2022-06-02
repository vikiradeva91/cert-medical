<script context="module">
	import createClient from '$lib/prismicClient';
	import * as prismicH from '@prismicio/helpers';
	import moment from 'moment';

	export async function load({ fetch, params }) {
		const client = createClient(fetch);
		const posts = await client.getAllByType('post', {});

		console.log('posts', posts);

		if (posts) {
			return {
				props: { posts }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	export let posts;

	console.log(posts[0]);
</script>

<svelte:head>
	<title>CERT Medical - Blog</title>
</svelte:head>

<div class="blog-title ">
	<h1 class="content-title" style="color: #fff;">Blog</h1>
</div>
<div class="bg">
	<section class="blog flex">
		{#each posts as post}
			<div class="news-item">
				<h2>
					<a href={`/blog/${post.uid}`} title={post.data.title}>{post.data.title}</a>
				</h2>
				<p class="date">
					<i class="icon-calendar" />
					📅
					<a class="tag" href={`/blog/${post.slug}`}
						>{moment(post.first_publication_date).format('MMMM DD, YYYY')}</a
					>
				</p>
				<p>
					{post.data.excerpt}
				</p>
			</div>
		{/each}
	</section>
</div>
