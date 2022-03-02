<template lang="pug">
//main slider
section(class="main-slider" v-if="sliderData")
	carousel.main-slider-carousel(:items-to-show="1", :autoplay="6000", :settings="settings" dir="ltr")
		slide.slider-item(v-for="slide in sliderData", :key="slide.id")
			img(class="img-fluid" :src="slide.image", :alt="slide.image_alt")
			div(class="item-details")
				div(class="container")
					div(class="item-text")
						h1(class="title") {{ slide.title }}
						div(v-html="slide.description")
						div(class="item-btn")
							router-link(to="/products" class="btn") {{ $t('our_products') }}
		template(#addons)
			pagination
//main slider
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default {
	name: "Slider",
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
	data: () => ({
		settings: {
			wrapAround: true,
			transition: 1000,
		},
	}),
	props: {
		sliderData: Array,
	},
};
</script>
