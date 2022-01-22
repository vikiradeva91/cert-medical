<script context="module">
	import { client } from '$lib/api';

	export async function load() {
		let page = {};

		try {
			const response = await client.post('query/page/', {
				$match: { path: '/' }
			});

			page = response.data.items[0];
		} catch (error) {
			console.log(error);
			return {};
		}

		return {
			props: { page }
		};
	}
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<div class="homeimg">
	<h1 class="heading-primary-main">CE Marking for Medical Devices</h1>
</div>

<h1 class="content-title mrg-top">
	<i>― {page.blocks[0].name} ―</i>
</h1>

<section class="row p2">
	<div class="CE-content">
		{@html page.blocks[0].body}
	</div>
	<div class="CE-img">
		<img src="/img/section_photo_operation.jpg" alt="" />
	</div>
</section>

<div class="calltoaction">
	<h2>Set the date for your market access</h2>
	<a class="submit" href="/contacts">Get started</a>
</div>

<!-- <div class="anchor"> <div id="services"></div> </div> -->
<h1 class="services-title ">
	<i>― Our services ―</i>
</h1>

<section class="services flex">
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/iso.svg" alt="" />
		<div class="services-text">
			<h4>QUALITY MANAGEMENT SYSTEMS</h4>
			<p>
				Development and implementation of ISO 13485 - Quality Management Systems for medical
				devices manufacturers
			</p>
		</div>
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

<!-- <h1 class="steps-title mrg-top">
	<i>― Obtaining a EC declaration of conformity for your medical device ―</i>
</h1>

<div class="container">
	<div class="row">
		<div class="col">
			<div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
				<div class="timeline-step">
					<div class="timeline-content" data-original-title="STEP 1">
						<div class="inner-circle" />
						<p class="h6 mt-3 mb-1" style="padding: 16px 0;"><b> STEP 1 </b></p>
						<p class="h6 text-muted mb-0 mb-lg-0">Identify EU requirements for your product</p>
					</div>
				</div>
				<div class="timeline-step">
					<div class="timeline-content" data-original-title="STEP 2">
						<div class="inner-circle" />
						<p class="h6 mt-3 mb-1" style="padding: 16px 0;"><b> STEP 2 </b></p>
						<p class="h6 text-muted mb-0 mb-lg-0">Assess level of conformity and testing</p>
					</div>
				</div>
				<div class="timeline-step">
					<div class="timeline-content" data-original-title="STEP 3">
						<div class="inner-circle" />
						<p class="h6 mt-3 mb-1" style="padding: 16px 0;"><b> STEP 3 </b></p>
						<p class="h6 text-muted mb-0 mb-lg-0">
							Assistance and review of the technical documentation
						</p>
					</div>
				</div>
				<div class="timeline-step">
					<div class="timeline-content" data-original-title="STEP 4">
						<div class="inner-circle" />
						<p class="h6 mt-3 mb-1" style="padding: 16px 0;"><b> STEP 4 </b></p>
						<p class="h6 text-muted mb-0 mb-lg-0">
							CE Mark can be affixed and declaration of conformity is issued
						</p>
					</div>
				</div>
				<div class="timeline-step mb-0">
					<div class="timeline-content" data-original-title="STEP 5">
						<div class="inner-circle" />
						<p class="h6 mt-3 mb-1" style="padding: 16px 0;"><b> STEP 5 </b></p>
						<p class="h6 text-muted mb-0 mb-lg-0">
							Product is certified and can be traded in the EU
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
