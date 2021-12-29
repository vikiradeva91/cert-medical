<script context="module">
	import axios from 'axios';
	import config from '/src/config';

	export async function load({ page }) {
		const p = +page.query.get('page') || 1;

		const $limit = p * 10;
		const $skip = (p - 1) * 10;

		let data = [];

		try {
			const response = await axios.post(`${config.api.url}/query/post`, { $limit, $skip });
			data = response.data;
		} catch (error) {
			console.log(error);
		}

		return {
			props: { data, p }
		};
	}
</script>

<script>
	import moment from 'moment';
	import PaginationNav from '$lib/components/admin/list/PaginationNav.svelte';

	export let data, p;

	const handleDelete = (id) => {
		console.log('delete', id);
	};
</script>

<div class="card">
	<div class="card-header flex align spread">
		<h3>Posts</h3>
		<div><a href="/admin/posts/create">Create new post</a></div>
	</div>
	<div class="card-body">
		<table>
			<tr>
				<th>#</th>
				<th>Title</th>
				<th>Created</th>
				<th>Actions</th>
			</tr>
			{#each data.items as post, i}
				<tr>
					<td>{post._id.slice(-7)}</td>
					<td>{post.title}</td>
					<td>{moment(post.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
					<td>
						<a href="/admin/posts/update/{post._id}">Edit</a>
						<button on:click={() => handleDelete(post._id)}>Delete</button>
					</td>
				</tr>
			{/each}
		</table>
	</div>
	<PaginationNav currentPage={p} path="posts" total={Math.ceil(data.total / 10)} />
</div>
