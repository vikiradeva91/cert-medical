<script context="module">
	import { preloadClient, getAuthClient } from '$lib/api';

	export async function load({ params, session }) {
		const { slug } = params;

		let items = [];

		try {
			const response = await preloadClient(session.token).post('query/page', {
				$match: { slug }
			});

			items = response.data.items;

			console.log('items', items);
		} catch (error) {
			console.log(error);
		}

		return {
			props: { page: items[0] }
		};
	}
</script>

<script>
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';
	import TextareaField from '$lib/components/admin/fields/TextareaField.svelte';
	import SelectField from '$lib/components/admin/fields/SelectField.svelte';

	export let page;

	const components = {
		text: TextField,
		textarea: TextareaField,
		rte: RichTextareaField
	};

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

	const handleBlockUpdate = async (index) => {
		try {
			const response = await client.patch(`page/${page._id}`, {
				$set: { [`blocks.${index}`]: page.blocks[index] }
			});

			page = response.data;
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

	const handleBlockDelete = async (index) => {
		edited = undefined;

		try {
			const response = await client.patch(`page/${page._id}`, {
				$pull: { blocks: { key: page.blocks[index].key } }
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
			<div>
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
				<SelectField
					label="Status"
					name="status"
					bind:value={page.status}
					options={{
						published: 'Published',
						unpublished: 'Unpublished',
						draft: 'Draft'
					}}
					error={errors.status && errors.status.message}
				/>
			</div>
			<button on:click={handleUpdate}>Save page</button>
			<hr />
			<div class="card-header">
				<div class="split aside">
					<h3>Page blocks</h3>
					{#if !created}
						<button
							on:click={() => {
								created = {};
							}}>Create new block</button
						>
					{/if}
				</div>
				<div>
					{#if created}
						<TextField label="Name" name="name" bind:value={created.name} />
						<TextField label="Key" name="key" bind:value={created.key} />
						<SelectField
							label="Input type"
							name="inputType"
							placeholder="Select input type"
							options={{ text: 'Text', rte: 'Rich text' }}
							bind:value={created.inputType}
						/>
						{#if created.inputType}
							<svelte:component
								this={components[created.inputType]}
								label={created.name}
								bind:value={created.value}
								name={created.key}
							/>
						{/if}
						<button on:click={handleBlockCreate}>Save new block</button>
						<button on:click={() => (created = undefined)}>Close</button>
					{/if}
				</div>
				{#if page.data}
					<div class="blocks">
						<ul>
							{#each Object.entries(page.data) as [key, { title }], i}
								<li>
									<a href="/admin/pages/{page.slug}/blocks/{key}/edit"
										>{title.value}</a
									>
								</li>
								<!-- <div>
								<a href={`/admin/pages/${page._id}/blocks/${block._id}/edit`}
									>{block.name}</a
								>
							</div>
							<div>
								<textarea name="test" id="test" cols="30" rows="10">
									{JSON.stringify(value)}
								</textarea>
							</div>
							<div class="tab">
								<input id={block.key} type="checkbox" />
								<label for={block.key}>{block.name}</label>
								<div class="tab-content">
									<TextField label="Name" name="name" bind:value={block.name} />
									<TextField label="Key" name="key" bind:value={block.key} />
									<TextField
										label="Type"
										name="inputType"
										bind:value={block.inputType}
										disabled
									/>
	
									<svelte:component
										this={components[block.inputType]}
										label={block.name}
										bind:value={block.value}
										name={block.key}
									/>
	
									<div>
										<button on:click={() => handleBlockUpdate(i)}>Save block</button
										>
									</div>
	
									<div>
										<button on:click={() => handleBlockDelete(i)}>Delete</button>
									</div>
								</div>
							</div> -->
							{:else}
								<h5>No blocks</h5>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
