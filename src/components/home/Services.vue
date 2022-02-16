<template>
	<!-- Start of service section -->
	<section id="medi-app-service" class="medi-app-service-section" dir="ltr" v-if="servicesData">
		<div class="container">
			<div class="medi-app-section-title app-medi-headline text-center position-relative">
				<span class="title-watermark position-absolute">طريق العلاج</span>
				<h2>أقسام المركز</h2>
			</div>
			<div id="app-medi-service-slider" class="medi-app-service-content">
				<Carousel :autoplay="4000" :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
					<Slide v-for="service in servicesData.services" :key="service.id">
						<div class="carousel__item" data-aos="fade-up" :data-aos-delay="service.id*50">
							<div class="medi-app-service-innerbox">
								<div class="medi-app-service-icon-title clearfix">
									<div class="medi-app-service-icon">
										<router-link :to="`/services/${service.id}`"><img :src="service.image" class="img-fluid" alt /></router-link>
									</div>
									<div class="app-medi-service-title app-medi-headline">
										<h3>
											<router-link :to="`/services/${service.id}`">{{ service.title }}</router-link>
										</h3>
									</div>
								</div>
								<div class="app-medi-service-text pera-content ul-li-block" v-html="service.description"></div>
							</div>
						</div>
					</Slide>
					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
	</section>
	<!-- End of service section -->
</template>

<script>
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	name: "Services",
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
	data: () => ({
		settings: {
			// snapAlign: "center",
		},
		breakpoints: {
			700: {
				itemsToShow: 2,
				snapAlign: "start",
			},
			1024: {
				itemsToShow: 3,
				snapAlign: "start",
			},
		},
	}),
	props: { servicesData: Array },
};
</script>