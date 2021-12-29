<script context="module">
	import axios from 'axios';
	import { api } from '/src/config';

	export async function load({ page }) {
		const { id, key } = page.params;

		let item = {};

		try {
			const response = await axios.get(`${api.url}/page/${id}`);
			item = response.data;

			console.log('item', item);
		} catch (error) {
			console.log(error);
		}

		return {
			props: { id, key, block: item.blocks[key] }
		};
	}
</script>

<script>
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';

	export let id, key, block;

	let errors = {};

	const handleUpdate = async () => {
		try {
			const response = await axios.patch(`${api.url}/page/${id}`, {
				$set: { [`blocks.${key}`]: block }
			});

			block = response.data.blocks[key];
		} catch (error) {
			console.log(error);
			errors = error.response.data.errors;
		}
	};
</script>

<div class="form">
	<div>
		<TextField
			label="Title"
			name="title"
			bind:value={block.name}
			error={errors[`blocks.${key}.name`] && errors[`blocks.${key}.name`].message}
		/>
	</div>
	<div>
		<RichTextareaField
			label="Body"
			name="body"
			bind:html={block.body}
			error={errors[`blocks.${key}.body`] && errors[`blocks.${key}.body`].message}
		/>
	</div>
	<div>
		<button on:click={handleUpdate}>Save</button>
	</div>
	<a href="/admin/pages/update/{id}">Cancel</a>
</div>
