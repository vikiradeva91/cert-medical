<script>
	export let name,
		value,
		disabled = undefined,
		error,
		classes;
</script>

<label class="checkbox">
	<input type="checkbox" {name} id={name} {disabled} bind:checked={value} class={classes} />
	<slot />
</label>

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
