<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let status, error;
</script>

<div class="flex center align" style="min-height: 40vh;">
	<div style="text-align: center;">
		<h1>{status}</h1>

		<p>{error.message}</p>
	</div>
</div>
