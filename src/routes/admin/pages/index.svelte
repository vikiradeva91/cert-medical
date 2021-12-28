<script context="module">
	import axios from 'axios';
	import config from '../../../config';

	export async function load({ page }) {
		const p = +page.query.get('page') || 1;

		const $limit = p * 10;
		const $skip = (p - 1) * 10;

		let data = [];

		try {
			const response = await axios.post(`${config.api.url}/query/page`, { $limit, $skip });
			data = response.data;

			console.log('data', data);
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

<div>
	<h3>Pages</h3>
	<div><a href="/admin/pages/create">Create new page</a></div>
	<table>
		<tr>
			<th>#</th>
			<th>Name</th>
			<th>Title</th>
			<th>Path</th>
			<th>Created</th>
			<th>Actions</th>
		</tr>
		{#each data.items as item, i}
			<tr>
				<td>{item._id.slice(-7)}</td>
				<td>{item.name}</td>
				<td>{item.title}</td>
				<td>{item.path}</td>
				<td>{moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
				<td>
					<a href="/admin/pages/update/{item._id}">Edit</a>
					<button on:click={() => handleDelete(item._id)}>Delete</button>
				</td>
			</tr>
		{:else}
			<p>No items!</p>
		{/each}
	</table>

	<PaginationNav currentPage={p} path="pages" total={Math.ceil(data.total / 10)} />
</div>
