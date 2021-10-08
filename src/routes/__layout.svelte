<script>
	import '../app.css';
</script>

<header>
	<section>
		<a class="logo" href="/"><img src="img/cert_medical_logo.png" alt="" /></a>
		<div class="mgE">
			<hr />
			<hr />
			<hr />
			<hr />
		</div>
		<div style="clear: both" />
		<nav class="nav-mobile">
			<a href="/about" class="fadein hover">ABOUT US</a>
			<a href="/blog" class="fadein hover">BLOG</a>
			<a href="/contacts" class="fadein hover">CONTACTS</a>
			<div class="social">
				<a class="fb" href="#" target="_blank" />
			</div>
		</nav>
	</section>
</header>

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
