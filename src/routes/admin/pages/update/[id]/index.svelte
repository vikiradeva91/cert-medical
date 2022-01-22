<script context="module">
	import { getAuthClient } from '$lib/api';

	export async function load({ params }) {
		const { id } = params;

		let item = {};

		const client = getAuthClient();

		try {
			const response = await client.get(`page/${id}`);
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

	let created, edited;

	let errors = {};

	const handleUpdate = async () => {
		try {
			console.log('page', page);
			const response = await client.patch(`page/${page._id}`, { $set: page });
			page = response.data;
		} catch (error) {
			errors = error.response.data.errors;
			console.log(error.response.data);
		}
	};

	const handleBlockUpdate = async () => {
		console.log(edited);
		console.log('page', page);
		try {
			const response = await client.patch(`page/${page._id}`, {
				$set: { [`blocks.${edited.key}`]: edited }
			});

			edited = response.data.blocks[edited.key];
		} catch (error) {
			console.log(error);
			errors = error.response.data.errors;
		}
	};
</script>

<div class="form">
	<TextField
		label="Name"
		name="name"
		value={page.name}
		error={errors.name && errors.name.message}
	/>
	<TextField
		label="Slug"
		name="slug"
		value={page.slug}
		error={errors.slug && errors.slug.message}
	/>
	<TextField
		label="Title"
		name="title"
		value={page.title}
		error={errors.title && errors.title.message}
	/>
	<TextField
		label="Title"
		name="title"
		value={page.title}
		error={errors.title && errors.title.message}
	/>
	<TextField
		label="Path"
		name="path"
		value={page.path}
		error={errors.path && errors.path.message}
	/>
	<div>
		<button on:click={handleUpdate}>Save</button>
	</div>
	<hr />
	<div class="blocks">
		<ul>
			{#each page.blocks as block, i}
				<li>
					<button on:click={() => (edited = { key: i, ...block })}>
						{block.name}
					</button>
				</li>
			{:else}
				<h5>No blocks</h5>
			{/each}
		</ul>
		<hr />
		<div>
			{#if edited}
				<TextField
					label="Name"
					name="block-name"
					value={edited.name}
					error={errors.name && errors.name.message}
				/>
				<div>
					<RichTextareaField
						label="Body"
						name="block-nody"
						bind:html={edited.body}
						error={errors.body && errors.body.message}
					/>
				</div>
				<div>
					<button on:click={handleBlockUpdate}>Save</button>
				</div>
			{/if}
		</div>

		{#if created}
			<TextField
				label="Name"
				name="block-name"
				value={created.name}
				error={errors.name && errors.name.message}
			/>
			<div>
				<RichTextareaField
					label="Body"
					name="block-nody"
					bind:html={created.body}
					error={errors.body && errors.body.message}
				/>
			</div>
			<button on:click={handleUpdate}>Save</button>
		{:else}
			<button on:click={() => (created = {})}>Create new block</button>
		{/if}
	</div>
</div>
