<script>
	export let name,
		label,
		placeholder,
		options = {},
		value,
		error;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}

<select {name} id={name} bind:value>
	{#if placeholder}
		<option value selected disabled>{placeholder}</option>
	{/if}
	{#each Object.entries(options) as [value, name]}
		<option {value}>{name}</option>
	{/each}
</select>

{#if error}
	<div class="field-error">
		{error}
	</div>
{/if}
