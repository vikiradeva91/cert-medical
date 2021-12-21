<script>
	export let name, label, placeholder, value, error;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}
<input type="email" {name} id={name} {placeholder} bind:value />
{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
