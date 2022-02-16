<template>
	<!-- Start of testimonial section -->
	<section id="app-medi-testimonial" class="app-medi-testimonial-section" dir="ltr" v-if="testimonialsData">
		<div class="container">
			<div class="medi-app-section-title app-medi-headline text-center position-relative">
				<span class="title-watermark position-absolute">طريق العلاج</span>
				<h2>آراء العملاء</h2>
			</div>
			<div class="app-medi-testimonial-content">
				<div class="row">
					<div class="col-lg-12">
						<div class="app-medi-testimonial-slider-img-wrap position-relative">
							<div class="app-medi-testimonial-slider wow fadeFromRight" data-wow-delay="0ms" data-wow-duration="1000ms">
								<Carousel :autoplay="5000" :wrap-around="true">
									<Slide v-for="testimonial in testimonialsData.testimonials" :key="testimonial.id">
										<div class="app-medi-testimonial-quote app-medi-headline pera-content">
											<div class="quote">
												<i class="fas fa-quote-left"></i>
											</div>
											<div v-html="testimonial.description"></div>
											<div class="app-medi-testimonial-author">
												<div class="app-medi-test-author-text">
													<h4>{{ testimonial.name }}</h4>
												</div>
											</div>
										</div>
									</Slide>
									<template #addons>
										<Navigation />
									</template>
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of testimonial section -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	name: "Testimonials",
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	props: { testimonialsData: Array },
};
</script>
