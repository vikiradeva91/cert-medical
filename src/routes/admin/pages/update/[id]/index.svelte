<script context="module">
	import { preloadClient, getAuthClient } from '$lib/api';

	export async function load({ params, session }) {
		const { id } = params;

		let item = {};

		try {
			const response = await preloadClient(session.token).get(`page/${id}`);
			item = response.data;
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

	const client = getAuthClient();

	const handleUpdate = async () => {
		try {
			const response = await client.patch(`page/${page._id}`, { $set: page });
			page = response.data;
		} catch (error) {
			errors = error.response.data.errors;
			console.log(error.response.data);
		}
	};

	const handleBlockUpdate = async () => {
		try {
			const response = await client.patch(`page/${page._id}`, {
				$set: { [`blocks.${edited.key}`]: edited }
			});

			page = response.data;

			edited = response.data.blocks[edited.key];
		} catch (error) {
			console.log(error);
			errors = error.response.data.errors;
		}
	};

	const handleBlockCreate = async () => {
		try {
			const response = await client.patch(`page/${page._id}`, {
				$addToSet: { blocks: created }
			});

			page = response.data;

			created = undefined;

			edited = page.blocks.slice(-1)[0];
		} catch (error) {
			console.log(error);
			errors = error.response.data.errors;
		}
	};

	const handleBlockDelete = async (id) => {
		edited = undefined;

		try {
			const response = await client.patch(`page/${page._id}`, {
				$pull: { blocks: { _id: id } }
			});

			page = response.data;
		} catch (error) {
			console.log(error);
			errors = error.response.data.errors;
		}
	};
</script>

<div class="form">
	<div class="card">
		<div class="card-header">
			<h3>Page</h3>
		</div>
		<div class="card-body">
			<TextField
				label="Name"
				name="name"
				bind:value={page.name}
				error={errors.name && errors.name.message}
			/>
			<TextField
				label="Slug"
				name="slug"
				bind:value={page.slug}
				error={errors.slug && errors.slug.message}
			/>
			<TextField
				label="Title"
				name="title"
				bind:value={page.title}
				error={errors.title && errors.title.message}
			/>
			<TextField
				label="Path"
				name="path"
				bind:value={page.path}
				error={errors.path && errors.path.message}
			/>
			<div>
				<button on:click={handleUpdate}>Save page</button>
			</div>
			<hr />
			<div class="card-header">
				<h3>Page blocks</h3>
			</div>
			<table>
				<tr>
					<th>Name</th>
					<th>Actions</th>
				</tr>
				{#each page.blocks as block, i}
					<tr>
						<td>{block.name}</td>
						<td>
							<a
								href="/"
								on:click|preventDefault={() => {
									edited = { key: i, ...block };
									created = undefined;
								}}>Edit</a
							>

							<button on:click={() => handleBlockDelete(block._id)}>Delete</button>
						</td>
					</tr>
				{:else}
					<h5>No blocks</h5>
				{/each}
			</table>
			<div class="blocks">
				<div>
					{#if edited}
						<TextField
							label="Name"
							name="block-name"
							bind:value={edited.name}
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
							<button on:click={handleBlockUpdate}>Save block</button>
						</div>
						<div>
							<button on:click={() => (edited = undefined)}>Close</button>
						</div>
					{/if}
				</div>

				{#if created}
					<TextField
						label="Name"
						name="block-name"
						bind:value={created.name}
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
					<button on:click={handleBlockCreate}>Save new block</button>
				{:else}
					<button
						on:click={() => {
							created = {};
							edited = undefined;
						}}>Create new block</button
					>
				{/if}
			</div>
		</div>
	</div>
</div>
