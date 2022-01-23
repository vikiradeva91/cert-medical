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

<div class="blog-title ">
	<h1 class="content-title" style="color: #fff;">Blog</h1>
</div>
<div class="bg">
	<section class="blog flex">
		{#each posts as post}
			<div class="blog-img c43 m1">
				<a href={`/blog/${post.slug}`}>
					<img src="/img/blog1.jpg" alt="" title={post.title} />
				</a>
				<a class="tag" href={`/blog/${post.slug}`}
					>{moment(post.created).format('MMMM DD, YYYY')}</a
				>
				<div>
					<h2>
						<a href={`/blog/${post.slug}`} title={post.title}>{post.title}</a>
					</h2>
					<p>
						{post.body
							.replace(/<[^>]+>/g, '')
							.split(' ')
							.splice(0, 20)
							.join(' ') + ' ...'}
					</p>
				</div>
			</div>
		{/each}
	</section>
</div>
