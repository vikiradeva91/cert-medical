<script context="module">
	import { preloadClient } from '$lib/api';

	export async function load({ params, session }) {
		const page = +params.page || 1;

		const $limit = page * 10;
		const $skip = (page - 1) * 10;

		let data = [];

		try {
			const response = await preloadClient(session.token).post('/query/inquiry', {
				$limit,
				$skip
			});
			data = response.data;
		} catch (error) {
			console.log(error);
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
	<div class="card-header">
		<h3>Inquiries</h3>
	</div>
	<div class="card-body">
		<table>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Email</th>
				<th>Created</th>
				<th>Actions</th>
			</tr>
			{#each data.items as item, i}
				<tr>
					<td>{item._id.slice(-7)}</td>
					<td>{item.name}</td>
					<td>{item.email}</td>
					<td>{moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
					<td>
						<a href="/admin/inquiries/update/{item._id}">Edit</a>
						<button on:click={() => handleDelete(item._id)}>Delete</button>
					</td>
				</tr>
			{/each}
		</table>
	</div>

	<PaginationNav currentPage={page} path="inquiries" total={Math.ceil(data.total / 10)} />
</div>
