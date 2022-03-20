<script>
	export let name, label, placeholder, value, error, classes;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}
<input type="email" {name} id={name} {placeholder} bind:value class={classes} />
{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
