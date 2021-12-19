<script>
	export let name, label, placeholder, value;
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}
<textarea {name} id={name} {placeholder} cols="30" rows="10" bind:value />
