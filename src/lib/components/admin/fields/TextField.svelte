<script>
	export let name,
		label,
		placeholder = undefined,
		value,
		disabled = undefined,
		error;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<input type="text" {name} id={name} {placeholder} bind:value {disabled} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
