<template>
	<!-- Start of about section -->
	<section id="medi-app-about" class="medi-app-about-section" v-if="aboutData">
		<div class="container">
			<div class="medi-app-about-content">
				<div class="row">
					<div class="col-lg-6">
						<div class="medi-app-about-img-wrap d-flex">
							<div class="medi-app-hover-img medi-app-about-img1 position-relative" data-aos="fade-left">
								<img :src="aboutData.about.image_1" :alt="aboutData.about.image_alt_1" />
							</div>
							<div class="medi-app-hover-img medi-app-about-img2 position-relative" data-aos="fade-right">
								<img :src="aboutData.about.image_2" :alt="aboutData.about.image_alt_2" />
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="medi-app-about-text-wrap d-flex">
							<div class="medi-app-about-exp app-medi-headline" data-aos="fade-left">
								<h2>{{ aboutData.about.years_experience }}</h2>
								<span class="app-medi-title2 text-uppercase">سنوات من الخبرة</span>
							</div>
							<div class="medi-app-about-text app-medi-headline pera-content wow fadeFromRight" data-aos="fade-right">
								<h2>{{ aboutData.about.title }}</h2>
								<div class="desc" v-html="aboutData.about.description"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of about section -->
        
</template>

<script>
export default {
	name: "About",
	props: { aboutData: Array },
};
</script>