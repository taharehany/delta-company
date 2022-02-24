<template lang="pug">
//clients
section.clients
	.container
		.content
			carousel.clients-carousel(:items-to-show="5", :autoplay="4000", :settings="settings")
				slide.item(v-for="slide in 5", :key="slide")
					img.img-fluid(src="@/assets/images/clients/01.png", alt="")
//clients
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default {
	name: "Clients",
	components: {
		Carousel,
		Slide,
	},
	data: () => ({
		settings: {
			wrapAround: true,
			transition: 500,
		},
	}),
};
</script>