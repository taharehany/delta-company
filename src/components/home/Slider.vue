<template lang="pug">
//main slider
section(class="main-slider")
    swiper(:pagination="{dynamicBullets: true}", :navigation="false", :modules="modules", :autoplay="{delay: 6000, disableOnInteraction: false}" class="main-slider-carousel")
        swiper-slide(class="item" v-for="slide in sliderData" :key="slide.id")
            img(class="img-fluid" v-lazy="slide.image" :alt="slide.image_alt")
            div(class="item-details")
                div(class="container")
                    div(class="item-text")
                        h1(class="title")  {{ slide.title }}
                        p {{ slide.description }}
                        div(class="item-btn")
                            div(class="outer-btn")
                                router-link(to="/about" class="btn")
                                    span المزيد عنا
//main slider
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
	name: "Slider",
	components: {
		Swiper,
		SwiperSlide,
		Navigation,
		Pagination,
	},
	setup() {
		return {
			modules: [Autoplay, Pagination, Navigation],
		};
	},
	props: {
		sliderData: Array,
	},
};
</script>
