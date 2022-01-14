<script context="module">
	import { dashboard } from '$lib/api';

	export async function load({ params }) {
		const page = +params.page || 1;

		const $limit = page * 10;
		const $skip = (page - 1) * 10;

		let data = [];

		try {
			const response = await dashboard.post('query/page', {
				$limit,
				$skip
			});

			data = response.data;

			console.log('data', data);
		} catch (error) {
			console.log('error', error);
		}

		return {
			props: { data, page }
		};
	}
</script>

<script>
	import moment from 'moment';
	import PaginationNav from '$lib/components/admin/list/PaginationNav.svelte';

	export let data, page;

	const handleDelete = (id) => {
		console.log('delete', id);
	};
</script>

<div class="card">
	<div class="card-header flex align spread">
		<h3>Pages</h3>
		<div><a href="/admin/pages/create">Create new page</a></div>
	</div>
	<div class="card-body">
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
				<page>No items!</page>
			{/each}
		</table>
	</div>

	<PaginationNav currentPage={page} path="pages" total={Math.ceil(data.total / 10)} />
</div>
