<script context="module">
	import axios from 'axios';
	import config from '../../../config';

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

	export let data, p;

	const totalPages = -~(data.total / 10);

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

	<nav>
		<ul class="pagination">
			{#if totalPages > 1}
				<a href="/admin/posts" class:current={p === 1}>First</a>
				<a href="/admin/posts?page={p - 1}" class:current={p <= 1}>Previous</a>
			{/if}

			{#each new Array(totalPages) as _, i}
				<a href="/admin/posts?page={i + 1}" class:current={p === i + 1}>{i + 1}</a>
			{/each}

			{#if totalPages > 1}
				<a href="/admin/posts?page={p + 1}" class:current={p >= totalPages}>Next</a>
				<a href="/admin/posts?page={totalPages}">Last</a>
			{/if}
		</ul>
	</nav>
</div>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		table-layout: auto;
	}

	table td,
	table th {
		border: 1px solid #ddd;
		padding: 8px;
	}

	table tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	table tr:hover {
		background-color: #ddd;
	}

	table th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #04aa6d;
		color: white;
	}

	button {
		cursor: pointer;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	.pagination {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.pagination li {
		margin: 0 1px;
	}

	.pagination {
		display: flex;
		padding: 10px 0;
	}

	.pagination a {
		display: block;
		padding: 0.5em;
		margin-right: 5px;
		border: 1px solid salmon;
	}

	.pagination a.current {
		pointer-events: none;
		cursor: default;
		border: 1px solid gainsboro;
	}
</style>
