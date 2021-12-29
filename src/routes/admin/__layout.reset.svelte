<div class="grid">
	<header>
		<h2>Header</h2>
	</header>
	<aside>
		<ul>
			<li>
				<a href="/admin">Dashboard</a>
			</li>
			<li>
				<a href="/admin/pages">Pages</a>
			</li>
			<li>
				<a href="/admin/posts">Posts</a>
			</li>
			<li>
				<a href="/admin/inquiries">Inquries</a>
			</li>
			<li>
				<a href="/">Users</a>
			</li>
			<li>
				<a href="/">Settings</a>
			</li>
		</ul>
	</aside>
	<main>
		<slot />
	</main>
</div>

<style>
	.grid {
		display: grid;

		grid-template-rows: 0.2fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

		/* gap: 0.5em; */
		height: 100vh;
	}

	header {
		background-color: #56ab75;
		grid-row-start: 1;
		grid-column-start: 1;

		grid-row-end: 2;
		grid-column-end: 6;
	}

	aside {
		background-color: #8dea9f;
		grid-row-start: 2;
		grid-column-start: 1;

		grid-row-end: 4;
		grid-column-end: 2;
	}

	main {
		/* background-color: #59b67d; */
		background-color: #f0f0f5;
		grid-row-start: 2;
		grid-column-start: 2;

		grid-row-end: 4;
		grid-column-end: 6;
		padding: 1em;
	}
</style>
