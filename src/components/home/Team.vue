<template lang="pug">
//team
section(class="team")
    div(class="container")
        div(class="main-title")
            //- span(class="top-title") فريق العمل
            h2 فريق العمل
        div(class="content")
            swiper(:pagination="{dynamicBullets: true}" :breakpoints="breakpoints" :modules="modules", :slidesPerView="4" :autoplay="{delay: 6000, disableOnInteraction: false}"  :spaceBetween="20" class="team-slider")
                swiper-slide(class="team-box" v-for="slide in teamData" :key="slide.id")
                    div(class="image")
                        router-link(:to="`/team/${slide.id}`") 
                            img(class="img-fluid" v-lazy="slide.image" :alt="slide.image_alt")
                    div(class="details")
                        p(class="job-title") {{ slide.job_description }}
                        div(class="name")
                            router-link(to="/team") {{ slide.name }}
//team
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
	name: "Team",
	components: {
		Swiper,
		SwiperSlide,
		Navigation,
		Pagination,
	},
	data() {
		return {
			breakpoints: {
				'0': {
					slidesPerView: 1,
				},
				'575': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 2,
				},
				'992': {
					slidesPerView: 3,
				},
				'1024': {
					slidesPerView: 4,
				},
			}
		}
	},
	setup() {
		return {
			modules: [Autoplay, Pagination, Navigation],
		};
	},
	props: {
		teamData: Array,
	},
};
</script>
