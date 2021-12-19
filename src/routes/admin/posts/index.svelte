<script context="module">
	import axios from 'axios';
	import config from '../../../config';

	export async function load() {
		let posts = [];

		try {
			const response = await axios.post(`${config.api.url}/query/post`, {
				$limit: 10
			});
			posts = response.data;
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}

		return {
			props: { posts }
		};
	}
</script>

<script>
	import moment from 'moment';

	export let posts;

	const handleDelete = (id) => {
		console.log('delete', id);
	};
</script>

<div>
	<h3>Posts</h3>
	<div><a href="/admin/posts/create">Create new post</a></div>
	<table>
		<tr>
			<th>#</th>
			<th>Title</th>
			<th>Created</th>
			<th>Tools</th>
		</tr>
		{#each posts as post, i}
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

<style>
	table,
	th,
	td {
		border: 1px solid black;
	}
</style>
