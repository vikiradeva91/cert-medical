<script>
	import Editor from 'cl-editor/src/Editor.svelte';

	export let name, label, value, error;

	let html, editor;

	$: editor && value && editor.setHtml(value);
	$: editor && console.log(html);
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<button on:click={() => (html = 'reset')}>TEST</button>

<Editor {value} on:change={(e) => (html = e.detail)} bind:this={editor} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}

<div id="editor" />
