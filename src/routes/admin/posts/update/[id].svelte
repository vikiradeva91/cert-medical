<script context="module">
	export async function load({ url, params }) {
		const { id } = params;

		let post = {};

		try {
			const response = await dashboard.get(`/post/${id}`);
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
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';
	import { dashboard } from '$lib/api';

	export let post;

	let errors = {};

	const handleUpdate = async () => {
		try {
			const response = await dashboard.patch(`/post/${post._id}`, { $set: post });
			post = response.data;
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
			value={post.title}
			error={errors.title && errors.title.message}
		/>
	</div>
	<div>
		<TextField
			label="Slug"
			name="slug"
			value={post.slug}
			error={errors.slug && errors.slug.message}
		/>
	</div>
	<div>
		<RichTextareaField
			label="Body"
			name="body"
			bind:html={post.body}
			error={errors.body && errors.body.message}
		/>
	</div>
	<div>
		<button on:click={handleUpdate}>Update</button>
	</div>
</div>
