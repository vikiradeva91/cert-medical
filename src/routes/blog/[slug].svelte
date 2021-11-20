<script context="module">
	import faker from 'faker';
	import moment from 'moment';
	export async function load() {
		let post = {
			title: faker.lorem.sentence(),
			body: faker.lorem.sentences(50),
			created: faker.date.past()
		};

		return {
			props: { post }
		};
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>CE Marking for Medical Devices - Certification Experts</title>
</svelte:head>

<div class="homeimg">
	<h1 class="heading-primary-main">CE Marking for Medical Devices</h1>
</div>

<h1 class="content-title mrg-top">
	<i>― Obtaining CE Certification for Medical Devices ―</i>
</h1>

<section class="row p2">
	<div class="CE-content">
		<p>
			{post.body}
		</p>
	</div>
	<div class="CE-img">
		<img src="/img/operating-room-surgery.jpg" alt="" />
	</div>
</section>
<div class="calltoaction">
	<h2>Set the date for your market access</h2>
	<a class="submit" href="/">Get started</a>
</div>

<h1 class="services-title mrg-top">
	<i>― Our services ―</i>
</h1>

<section class="services flex">
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/ce.svg" alt="" />
		<h4>CE Marking process</h4>
	</div>
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/glass.svg" alt="" />
		<h4>Technical File review</h4>
	</div>
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/Flask.svg" alt="" />
		<h4>Medical Device testing</h4>
	</div>
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/report.svg" alt="" />
		<h4>EC Declaration of Conformity</h4>
	</div>
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/archive.svg" alt="" />
		<h4>User manual and Labelling</h4>
	</div>
	<div class="service animated animatedFadeInUp fadeInUp">
		<img src="/svg/implement.svg" alt="" />
		<h4>ISO:13485 Implementation</h4>
	</div>
</section>

<h1 class="steps-title mrg-top">
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
</div>
