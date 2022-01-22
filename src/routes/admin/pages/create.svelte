<script>
	import { goto } from '$app/navigation';
	import { getAuthClient } from '$lib/api';

	//
	import TextField from '$lib/components/admin/fields/TextField.svelte';

	let input = {};
	let errors = {};

	const client = getAuthClient();

	const handleSubmit = async () => {
		try {
			const response = await client.post('/page', input);
			goto(`/admin/pages/update/${response.data._id}`);
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
			bind:value={input.name}
			error={errors.name && errors.name.message}
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
		<TextField
			label="Title"
			name="title"
			bind:value={input.title}
			error={errors.title && errors.title.message}
		/>
	</div>
	<div>
		<TextField
			label="Path"
			name="path"
			bind:value={input.path}
			error={errors.path && errors.path.message}
		/>
	</div>
	<div>
		<button on:click={handleSubmit}>Create</button>
	</div>
</div>
