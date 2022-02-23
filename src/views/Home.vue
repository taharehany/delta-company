<template>
    <div v-if="this.$store.state.loading" id="app-medi-preloader"></div>
	<Header />
	<Slider :sliderData="allHomeApiData.data" :callToActionData="allHomeApiData.data" />
	<About :aboutData="allHomeApiData.data" />
	<Services :servicesData="allHomeApiData.data" />
	<SendUs :form_homeData="allHomeApiData.data" />
	<Team :teamData="allHomeApiData.data" />
	<CallToAction :callToActionData="allHomeApiData.data" />
	<Testimonials :testimonialsData="allHomeApiData.data" />
	<Partners :partnersData="allHomeApiData.data" />
	<Footer />
</template>

<script>
import Header from "@/components/global/Header.vue";
import Slider from "@/components/home/Slider.vue";
import About from "@/components/home/About.vue";
import Services from "@/components/home/Services.vue";
import SendUs from "@/components/home/SendUs.vue";
import Team from "@/components/home/Team.vue";
import CallToAction from "@/components/home/CallToAction.vue";
import Testimonials from "@/components/home/Testimonials.vue";
import Partners from "@/components/home/Partners.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Home",
	data: function () {
		return {
			sliderData: null,
			aboutData: null,
			servicesData: null,
			form_homeData: null,
			teamData: null,
			callToActionData: null,
			testimonialsData: null,
			partnersData: null,
		};
	},
	components: {
		Header,
		Slider,
		About,
		Services,
		SendUs,
		Team,
		CallToAction,
		Testimonials,
		Partners,
		Footer,
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || "طريق العلاج | الرئيسية";
			},
		},
	},
	methods: {
		...mapActions(["getHomeApiData"]),
	},
	computed: mapGetters(["allHomeApiData"]),
	created() {
		this.getHomeApiData();
	},
};
</script>

<style lang="scss">
.medi-app-banner-section {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.carousel__item {
	direction: rtl;
    text-align: initial;
}

.carousel__slide {
	padding: 10px;
}
.carousel__prev {
    left: 15px
}
.carousel__next {
    right: 15px
}
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
    background-color: #9d344d !important;
}
.carousel__pagination-button--active {
    background-color: #7e1830 !important;
}
.carousel__pagination-button{
    background-color: #6f6f6f;
}
.app-medi-testimonial-section {
    .carousel__prev,
    .carousel__next {
        position: static;
        transform: none;
        display: inline-block;
        line-height: 12px;
        border: 5px solid #f3f3f3;
        margin: 15px 5px;
    }
}

.app-medi-team-innerbox {
    .app-medi-team-img {
        border: 1px solid #f5f5f5;
    }
    .app-medi-text-text {
        height: 120px;

        h3 {
            padding-top: 0;
            padding-bottom: 5px;
        }
    }
}
.medi-app-about-text {
    p {
        text-align: justify;
    }
}
.medi-app-service-innerbox {
    .app-medi-service-text {
        p {
            text-align: justify;
        }
    }
}
</style>
