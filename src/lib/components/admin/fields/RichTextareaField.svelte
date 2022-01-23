<script>
	import Editor from '@tinymce/tinymce-svelte';

	export let name,
		label,
		value = '',
		error;

	let conf = {
		plugins: 'code',
		menubar: false,
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table paste code help wordcount'
		],
		toolbar:
			'undo redo code searchreplace fullscreen | formatselect | ' +
			'bold italic backcolor | alignleft aligncenter ' +
			'alignright alignjustify | bullist numlist outdent indent | ' +
			'removeformat | help',
		resize: 'both'
	};
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<Editor apiKey="fm8u5bpl9el05gktfaf5umq2jl07zwi3dvkpfdbxmvflopgm" bind:value {conf} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
