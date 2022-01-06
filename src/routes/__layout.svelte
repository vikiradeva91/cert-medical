<script context="module">
	export async function load({ url, params }) {
		return {};
	}
</script>

<script>
	import '../app.css';
</script>

<header>
	<section>
		<a class="logo" href="/"><img src="/img/cert_medical_logo.png" alt="" /></a>
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
			<!-- <div class="social">
				<a class="fb" href="/" target="_blank"><span></span></a>
			</div> -->
		</nav>
	</section>
</header>

<main>
	<slot />
</main>

<footer>
	<section class="footer-info">
		<div class="footer-pdg">
			<div class="c3 p1">
				<h3>Cert Medical</h3>
				<a href="/about">About us</a><br />
				<a href="/blog">Blog</a><br />
				<a href="/contacts">Contacts</a><br />
				<a href="/terms">Terms & Conditions</a>
			</div>
			<div class="c3 p1">
				<h3>Services</h3>
				<a href="/">CE Marking process</a><br />
				<a href="/">Technical File review</a><br />
				<a href="/">Medical Device testing</a><br />
				<a href="/">EC Declaration of Conformity</a><br />
				<a href="/">User manual and Labelling</a><br />
				<a href="/">ISO:13485 Implementation</a>
			</div>
			<div class="c3 p1">
				<h3>Contacts</h3>
				<a href="https://goo.gl/maps/UcmhCLRKwB9hua2c7" target="_blank">
					Sofia p.k. 1618,<br />
					168 Tsar Boris III Blvd.,<br />
					Andromeda Business Center,<br />
					3rd floor, office 31
				</a><br />
				<a href="mailto:petar.emilov.petrov@gmail.com">
					email:
					<span>petar.emilov.petrov@gmail.com</span>
				</a><br />
				<a href="/">
					<span itemprop="telephone">0877 122 777</span>
				</a>
			</div>
		</div>
		<section class="copyright">
			<div>Copyright © 2021 Cert Medical LTD</div>
			<div class="copy-mails">
				Development of a company website - <a href="mailto:viki.radeva91@gmail.com"
					>Viktoriya Radeva
				</a>
				&
				<a href="mailto:chavdar84@gmail.com">Chavdar Angelov</a>
			</div>
		</section>
	</section>
</footer>
