<script context="module">
	import { client } from '$lib/api';

	export async function load() {
		let page = {};

		try {
			const response = await client.post('query/page/', {
				$match: { path: '/' }
			});

			page = response.data.items.length && response.data.items[0];
		} catch (error) {
			console.log(error);
		}

		return {
			props: { page }
		};
	}
</script>

<script>
	export let page;

	let { trusted } = page.data;
</script>

<svelte:head>
	<title>{page.title || ''}</title>
</svelte:head>

<div class="homeimg">
	<h1 class="heading-primary-main">CE Marking for Medical Devices</h1>
</div>

{#if trusted}
	<h1 class="trusted-title mrg-top">
		<i>― {trusted.title.value} ―</i>
	</h1>

	<section class="row p2">
		<div class="CE-content">
			{@html trusted.body.value}
		</div>
		<div class="CE-img">
			<img src="/img/{trusted.feature.value}" alt={trusted.title.value} />
		</div>
	</section>
{/if}

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
					Development and implementation of ISO 13485 - Quality Management Systems for medical
					devices manufacturers
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
		<img src="/svg/Flask.svg" alt="" />
		<div class="services-text">
			<h4>CLINICAL EVALUATION</h4>
			<p>
				Clinical evaluation process management, incl. communication and negotiation with
				contract research organizations (CRO) and accredited testing laboratories
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
