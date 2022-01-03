<script>
	import Editor from 'cl-editor/src/Editor.svelte';

	export let name, label, html, error;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<button on:click={() => (html = 'reset')}>TEST</button>

<Editor {html} on:change={(e) => (html = e.detail)} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}

<div id="editor" />
