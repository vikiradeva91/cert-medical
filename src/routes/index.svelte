<script context="module">
	import createClient from '$lib/prismicClient';
	import * as prismicH from '@prismicio/helpers';

	export async function load({ fetch, params }) {
		const client = createClient(fetch);
		const document = await client.getByUID('page', 'homepage');

		if (document) {
			return {
				props: { document }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	export let document;

	const { title } = document.data;
	const { featured_image, featured_body } = document.data.body[0].items[0];
</script>

<svelte:head>
	<title>{title || ''}</title>
</svelte:head>

<div class="homeimg">
	<h1 class="heading-primary-main">CE Marking for Medical Devices</h1>
</div>

<section class="row p4">
	<div class="CE-content">
		{@html prismicH.asHTML(featured_body)}
	</div>
	<div class="CE-img">
		<img src={featured_image.url} alt={featured_image.alt} />
	</div>
</section>

<div class="calltoaction">
	<h2>Set the date for your market access</h2>
	<a class="submit" href="/contacts">Get started</a>
</div>

<!-- <div class="anchor"> <div id="services"></div> </div> -->

<h1 class="services-title ">
	<i>― Our services that you can use ―</i>
</h1>

<section class="services flex">
	<div class="service animated animatedFadeInUp fadeInUp">
		<a href="services#anchor-1">
			<img src="/svg/iso.svg" alt="" />
			<div class="services-text">
				<h4>QUALITY MANAGEMENT SYSTEMS</h4>
				<p>
					Development and implementation of ISO 13485 - Quality Management Systems for
					medical devices manufacturers
				</p>
			</div>
		</a>
	</div>

	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/archive.svg" alt="" />
		<div class="services-text">
			<h4>TECHNICAL FILES</h4>
			<p>
				Technical documentation preparation, review and compliance assessment, according to
				REGULATION (EU) 2017/745
			</p>
		</div>
	</div>

	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/badge.svg" alt="" />
		<div class="services-text">
			<h4>CONFORMITY ASSESSMENT</h4>
			<p>
				Organization and management of the overall conformity assessment process, incl.
				communication and negotiation with Notified Bodies (NB) and certification audit
				support
			</p>
		</div>
	</div>
</section>
