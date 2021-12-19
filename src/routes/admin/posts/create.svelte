<script>
	import TextField from '$lib/components/fields/TextField.svelte';
	import TextareaField from '$lib/components/fields/TextareaField.svelte';

	const handleSubmit = () => {
		console.log('Submit');
	};
</script>

<div class="form">
	<div>
		<TextField label="Title" name="title" />
	</div>
	<div>
		<TextField label="Slug" name="slug" />
	</div>
	<div>
		<TextareaField label="Body" name="body" />
	</div>
	<div>
		<button on:click={handleSubmit}>Submit</button>
	</div>
</div>
