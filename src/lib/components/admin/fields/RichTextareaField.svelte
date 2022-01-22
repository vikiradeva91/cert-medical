<script>
	import Editor from '@tinymce/tinymce-svelte';

	export let name,
		label,
		html = '',
		error;

	let conf = {
		plugins: 'code',
		toolbar: 'undo redo code'
	};
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<Editor apiKey="fm8u5bpl9el05gktfaf5umq2jl07zwi3dvkpfdbxmvflopgm" bind:value={html} {conf} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
