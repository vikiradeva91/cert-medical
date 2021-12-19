<script>
	export let name, label, placeholder, value;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}
<input type="text" {name} id={name} {placeholder} bind:value />
