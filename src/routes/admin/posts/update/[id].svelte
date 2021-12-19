<script context="module">
	import axios from 'axios';
	import config from '../../../../config';

	export async function load({ page }) {
		const { id } = page.params;

		let post = {};

		try {
			const response = await axios.get(`${config.api.url}/post/${id}`);
			post = response.data;
		} catch (error) {
			console.log(error);
		}

		return {
			props: { post }
		};
	}
</script>

<script>
	import TextareaField from '$lib/components/fields/TextareaField.svelte';
	import TextField from '$lib/components/fields/TextField.svelte';

	export let post;

	const handleUpdate = () => {
		console.log('update');
	};
</script>

<div class="form">
	<div>
		<TextField label="Title" name="title" value={post.title} />
	</div>
	<div>
		<TextField label="Slug" name="slug" value={post.slug} />
	</div>
	<div>
		<TextareaField label="Body" name="body" value={post.body} />
	</div>
	<div>
		<button on:click={handleUpdate}>Update</button>
	</div>
</div>
