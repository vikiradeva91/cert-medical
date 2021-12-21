<script>
	import Editor from 'cl-editor/src/Editor.svelte';

	export let name, label, html, error;

	let editor;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<Editor {html} on:change={(evt) => (html = evt.detail)} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
