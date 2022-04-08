<script context="module">
	export async function load({ url, session }) {
		const { user: auth } = session;

		if (auth && url.pathname === '/sign-in') {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {
			props: { auth: session.user }
		};
	}
</script>

<script>
	import '../app.css';
	import { removeCookie } from '$lib/cookies';
	import { user } from '../store';
	export let auth;

	$user = auth;

	const handleLogout = () => {
		removeCookie('token');
		window.location.reload();
	};
</script>

<header>
	<section>
		<a class="logo" href="/"
			><img src="/img/cert_medical_logo.png" alt="" />
			<i>Trusted partner of medical devices industry</i></a
		>
		<div class="mgE">
			<hr />
			<hr />
			<hr />
			<hr />
		</div>
		<div style="clear: both" />
		<nav class="nav-mobile">
			<a href="/services" class="fadein hover">SERVICES</a>
			<a href="/about" class="fadein hover">ABOUT US</a>
			<a href="/blog" class="fadein hover">BLOG</a>
			<a href="/contacts" class="fadein hover">CONTACTS</a>
			{#if auth && auth.role === 'administrator'}
				<a href="/admin" class="fadein hover">Admin</a>
			{/if}
			{#if auth}
				<a href="/" class="fadein hover" on:click|preventDefault={handleLogout}>Logout</a>
			{/if}
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
		<div class="footer-pdg split">
			<div class="c3 p1">
				<h3>Cert Medical</h3>
				<a href="/services">Services</a><br />
				<a href="/about">About us</a><br />
				<a href="/blog">Blog</a><br />
				<a href="/contacts">Contacts</a><br />
				<a href="/terms">Terms & Conditions</a>
			</div>
			<div class="c3 p1">
				<h3>Services</h3>
				<a href="/">Quality Management Systems</a><br />
				<a href="/">Technical File</a><br />
				<a href="/">Clinical evaluation</a><br />
				<a href="/">Conformity assessment</a>
			</div>
			<div class="c3 p1">
				<h3>Contacts</h3>
				<a href="https://goo.gl/maps/UcmhCLRKwB9hua2c7" target="_blank">
					168 Tsar Boris III Blvd.,<br />
					Andromeda Business Center,<br />
					3-rd floor, office 31<br />
					1618 Sofia - Bulgaria <br />
					European Union
				</a><br />
				<a href="mailto:contact@cert-medical.eu">
					email:
					<span>contact(at)cert-medical.eu</span>
				</a><br />
				<a href="/">
					<span itemprop="telephone">+359 877122777</span>
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
