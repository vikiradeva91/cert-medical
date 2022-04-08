<script context="module">
	import { preloadClient, getAuthClient } from '$lib/api';

	export async function load({ params, session }) {
		const { slug, key } = params;

		let items = [];

		try {
			const response = await preloadClient(session.token).post('query/page', {
				$match: { slug }
			});

			items = response.data.items;

			console.log('items', items);
		} catch (error) {
			console.log(error);
		}

		return {
			props: { page: items[0], key }
		};
	}
</script>

<script>
	import TextField from '$lib/components/admin/fields/TextField.svelte';
	import RichTextareaField from '$lib/components/admin/fields/RichTextareaField.svelte';
	import TextareaField from '$lib/components/admin/fields/TextareaField.svelte';
	import SelectField from '$lib/components/admin/fields/SelectField.svelte';

	export let page, key;

	const components = {
		text: TextField,
		textarea: TextareaField,
		rte: RichTextareaField
	};

	const client = getAuthClient();

	let errors = {};
	let update = {};

	let block = page.data[key];

	const handleUpdate = async () => {
		update[key] = block;

		try {
			const response = await client.patch(`page/${page._id}`, {
				$set: {
					data: { [key]: block }
				}
			});

			page = response.data;
		} catch (error) {
			errors = error.response.data.errors;
			console.log(error.response.data);
		}
	};
</script>

<div>
	<a href="/admin/pages/{page.slug}/edit">Back to page</a>
</div>
<h3>Block edit</h3>

<div class="blocks">
	<ul>
		{#each Object.entries(block) as [key, { input, value }], i}
			<div>
				<svelte:component this={components[input]} label={key} bind:value name={key} />
			</div>
		{:else}
			<h5>No fields</h5>
		{/each}
	</ul>
</div>

<div>
	<button on:click={handleUpdate}>Update</button>
</div>
