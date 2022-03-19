<script>
	export let name,
		label,
		placeholder = undefined,
		value,
		disabled = undefined,
		error,
		classes;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<input type="text" {name} id={name} {placeholder} bind:value {disabled} class={classes} />

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
