<template>
	<!-- Start of partner section -->
	<section id="app-medi-partner" class="app-medi-partner-section" dir="ltr" v-if="partnersData">
		<div class="container">
			<div class="app-medi-partner-slider">
				<Carousel :autoplay="3000" :settings="settings" :breakpoints="breakpoints">
					<Slide  v-for="partner in partnersData.clients" :key="partner.id">
						<div class="app-medi-partner-img">
							<img :src="partner.image" alt="" />
						</div>
					</Slide>
				</Carousel>
			</div>
		</div>
	</section>
	<!-- End of partner section -->
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	name: "Partners",
	components: {
		Carousel,
		Slide,
	},
	data: () => ({
		settings: {
			itemsToShow: 1,
			snapAlign: "center",
			wrapAround: true,
		},
		breakpoints: {
			700: {
				itemsToShow: 4,
				snapAlign: "center",
			},
			1024: {
				itemsToShow: 5,
				snapAlign: "start",
			},
		},
	}),
	props: { partnersData: Array },
};
</script>