<script context="module">
	import { client } from '$lib/api';
	import moment from 'moment';

	export async function load() {
		let posts = [];

		try {
			const response = await client.post('query/post/');

			console.log(response);

			posts = response.data.items;
		} catch (error) {
			console.log(error);
			return {};
		}

		return {
			props: { posts }
		};
	}
</script>

<script>
	export let posts;
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
				<a href={`/blog/${post.slug}`} title={post.title}>{post.title}</a>
			</h2>
			<p class="date">
				<i class="icon-calendar"></i>                    
				📅 <a class="tag" href={`/blog/${post.slug}`} >{moment(post.createdAt).format('MMMM DD, YYYY')}</a>
			</p>
			<p>
				{post.body
					.replace(/<[^>]+>/g, '')
					.split(' ')
					.splice(0, 20)
					.join(' ') + ' ...'}
			</p>
		</div>
		{/each}
	</section>
</div>
