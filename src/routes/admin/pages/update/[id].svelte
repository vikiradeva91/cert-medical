<script context="module">
	import { api } from '../../../../config';
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
	import axios from 'axios';

	//
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

	const handleCreateBlock = async () => {
		try {
			const response = await axios.patch(`${api.url}/page/${page._id}`, {
				$addToSet: { blocks: block }
			});
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
			label="Title"
			name="title"
			value={page.title}
			error={errors.title && errors.title.message}
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
			label="Path"
			name="path"
			value={page.path}
			error={errors.path && errors.path.message}
		/>
	</div>
	<div>
		{#each page.blocks as block, i}
			<h4>{block.name}</h4>
		{/each}
		{#if !block}
			<button on:click={() => (block = {})}>Create new block</button>
		{/if}
	</div>
	{#if block}
		<div class="block-container">
			<div>
				<TextField
					label="Title"
					name="title"
					bind:value={block.name}
					error={errors.blocks && errors.blocks.name && errors.blocks.name.message}
				/>
			</div>
			<div>
				<RichTextareaField
					label="Body"
					name="body"
					bind:html={block.body}
					error={errors.blocks && errors.blocks.body && errors.blocks.body.message}
				/>
			</div>
			<div>
				<button on:click={handleCreateBlock}>Update block</button>
			</div>
			<button on:click={() => (block = undefined)}>Close</button>
		</div>
	{/if}
	<div>
		<button on:click={handleUpdate}>Update</button>
	</div>
</div>

<style>
	.block-container {
		border: 1px solid salmon;
		padding: 1em;
		margin: 1em;
	}
</style>
