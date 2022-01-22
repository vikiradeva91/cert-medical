<script context="module">
	export async function load({ session }) {
		console.log({ session });

		const { user: auth } = session;

		if (auth && auth.role === 'administrator') {
			return {
				props: { auth }
			};
		}

		return {
			status: 301,
			redirect: '/sign-in'
		};
	}
</script>

<script>
	import '../../admin.css';
	import { user } from '../../store';

	export let auth;

	$user = auth;
</script>

<div class="grid">
	<header>
		<a class="logo" href="/admin"><img src="/img/cert_medical_logo.png" alt="" /></a>
	</header>
	<aside>
		<ul>
			<li>
				<a href="/">Homepage</a>
			</li>
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
			<li>
				<a href="/">Logout</a>
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
		min-height: 100vh;
	}

	header {
		background-color: #f0f0f5;
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
