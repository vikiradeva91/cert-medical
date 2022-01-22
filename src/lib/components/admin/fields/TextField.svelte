<script>
	export let name,
		label,
		placeholder = undefined,
		value,
		error;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<input type="text" {name} id={name} {placeholder} bind:value />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
