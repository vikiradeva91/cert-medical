<script context="module">
	export async function load({ page }) {
		const { id } = page.params;

		return {
			props: { id }
		};
	}
</script>

<script>
	import axios from 'axios';
	import { api } from '/src/config';
	import { goto } from '$app/navigation';

	//
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';

	export let id;

	let block = {};
	let errors = {};

	const handleCreate = async () => {
		try {
			const response = await axios.patch(`${api.url}/page/${id}`, {
				$addToSet: { blocks: block }
			});
			block = response.data;
			console.log(block);
			goto(`/admin/pages/${id}/blocks/update/${block._id}`);
		} catch (error) {
			errors = error.response.data.errors.blocks.errors;
			console.log(errors, error.response.data);
		}
	};
</script>

<div class="form">
	<div>
		<TextField
			label="Title"
			name="title"
			bind:value={block.name}
			error={errors.name && errors.name.message}
		/>
	</div>
	<div>
		<RichTextareaField
			label="Body"
			name="body"
			bind:html={block.body}
			error={errors.body && errors.body.message}
		/>
	</div>
	<div>
		<button on:click={handleCreate}>Create block</button>
	</div>
	<a href="/admin/pages/update/{id}">Cancel</a>
</div>
