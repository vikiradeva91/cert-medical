<script context="module">
	import faker from 'faker';
	import moment from 'moment';
	export async function load() {
		let posts = new Array(20).fill().map(() => {
			const title = faker.lorem.sentence();
			return {
				title,
				slug: faker.helpers.slugify(title).toLowerCase(),
				body: faker.lorem.sentences(20),
				created: faker.date.past()
			};
		});

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
				<a href="/">
					<img src="img/blog1.jpg" alt="" />
				</a>
				<a class="tag" href="/">{moment(post.created).format('MMMM DD, YYYY')}</a>
				<div>
					<h2>
						<a href={`/blog/${post.slug}`}>{post.title}</a>
					</h2>
					<p>
						{post.body.split(' ').splice(0, 20).join(' ') + ' ...'}
					</p>
				</div>
			</div>
		{/each}
	</section>
</div>
