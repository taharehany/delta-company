<template lang="pug">
//clients
section(class="clients" v-if="clientsData")
	div(class="container")
		div(class="content")
			carousel(class="clients-carousel" :items-to-show="5", :autoplay="4000", :settings="settings" dir="ltr")
				slide(class="item" v-for="client in clientsData", :key="client.id")
					img(class="img-fluid" :src="client.image", :alt="client.image_alt")
//clients
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

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
	props: {
		clientsData: Array,
	},
};
</script>