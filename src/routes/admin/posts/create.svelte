<script>
	import axios from 'axios';
	import { api } from '/src/config';
	import { goto } from '$app/navigation';

	//
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';

	let input = {};
	let errors = {};

	const handleSubmit = async () => {
		try {
			const response = await axios.post(`${api.url}/post`, input);
			goto(`/admin/posts/update/${response.data._id}`);
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
			bind:value={input.title}
			error={errors.title && errors.title.message}
		/>
	</div>
	<div>
		<TextField
			label="Slug"
			name="slug"
			bind:value={input.slug}
			error={errors.slug && errors.slug.message}
		/>
	</div>
	<div>
		<RichTextareaField
			label="Body"
			name="body"
			bind:html={input.body}
			error={errors.body && errors.body.message}
		/>
	</div>
	<div>
		<button on:click={handleSubmit}>Submit</button>
	</div>
</div>
