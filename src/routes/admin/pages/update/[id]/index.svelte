<script context="module">
	import axios from 'axios';
	import { api } from '/src/config';

	export async function load({ page }) {
		const { id } = page.params;

		let item = {};

		try {
			const response = await axios.get(`${api.url}/page/${id}`);
			item = response.data;

			console.log('item', item);
		} catch (error) {
			console.log(error);
		}

		return {
			props: { page: item }
		};
	}
</script>

<script>
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';

	export let page;

	let block;

	let errors = {};

	const handleUpdate = async () => {
		try {
			const response = await axios.patch(`${api.url}/page/${page._id}`, { $set: page });
			page = response.data;
		} catch (error) {
			errors = error.response.data.errors;
			console.log(error.response.data);
		}
	};
</script>

<div class="form">
	<div>
		<TextField
			label="Name"
			name="name"
			value={page.name}
			error={errors.name && errors.name.message}
		/>
	</div>
	<div>
		<TextField
			label="Slug"
			name="slug"
			value={page.slug}
			error={errors.slug && errors.slug.message}
		/>
	</div>
	<div>
		<TextField
			label="Title"
			name="title"
			value={page.title}
			error={errors.title && errors.title.message}
		/>
	</div>
	<div>
		<TextField
			label="Title"
			name="title"
			value={page.title}
			error={errors.title && errors.title.message}
		/>
	</div>
	<div>
		<TextField
			label="Path"
			name="path"
			value={page.path}
			error={errors.path && errors.path.message}
		/>
	</div>
	<hr />
	<div class="blocks">
		<ul>
			{#each page.blocks as block, i}
				<li>
					<a href="/admin/pages/update/{page._id}/blocks/update/{i}">{block.name}</a>
				</li>
			{:else}
				<h5>No blocks</h5>
			{/each}
		</ul>
		<a href="/admin/pages/update/{page._id}/blocks/create">Add new block</a>
	</div>
	<div>
		<button on:click={handleUpdate}>Save</button>
	</div>
</div>
