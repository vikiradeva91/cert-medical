<script>
	export let total, currentPage, path;
</script>

{#if total > 1}
	<nav>
		<ul class="pagination">
			<a href="/admin/{path}" class:current={currentPage === 1}>First</a>
			<a href="/admin/{path}?page={currentPage - 1}" class:current={currentPage <= 1}
				>Previous</a
			>

			{#each new Array(total) as _, i}
				<a href="/admin/{path}?page={i + 1}" class:current={currentPage === i + 1}
					>{i + 1}</a
				>
			{/each}

			<a href="/admin/{path}?page={currentPage + 1}" class:current={currentPage >= total}
				>Next</a
			>
			<a href="/admin/{path}?page={total}" class:current={currentPage >= total}>Last</a>
		</ul>
	</nav>
{/if}
