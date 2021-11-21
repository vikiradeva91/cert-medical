<script>
	export let name, label, placeholder, value;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}
<input type="email" {name} id={name} {placeholder} bind:value />
