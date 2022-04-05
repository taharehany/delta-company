<template lang="pug">
div(class="loader" v-if="this.$store.state.loading")
    img(src="@/assets/images/fav.png", class="img-fluid" alt="preloader")
    //- img(src="@/assets/images/preloader.svg", class="img-fluid" alt="preloader")
    
Slider(:sliderData="homeData.slider" v-if="homeData")
About(:aboutData="homeData.about" v-if="homeData")
Services(:servicesData="homeData.services" v-if="homeData")
Cta(:ctaData="homeData.cta" :phone="homeData.settings.phone" v-if="homeData")
Team(:teamData="homeData.team" v-if="homeData")
Blogs(:blogsData="homeData.blogs" v-if="homeData")
</template>

<script>
import Slider from "@/components/home/Slider.vue";
import About from "@/components/home/About.vue";
import Services from "@/components/home/Services.vue";
import Team from "@/components/home/Team.vue";
import Blogs from "@/components/home/Blogs.vue";
import Cta from "@/components/home/Cta.vue";
import { mapState } from "vuex"

export default {
	name: "HomeView",
	components: {
		Slider,
		About,
		Services,
		Team,
		Blogs,
		Cta
	},
	computed: {
		...mapState(["homeData"])
	},
	created() {
		this.$store.dispatch("getHomeData");
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				document.title = to.meta.title || "عبدالله الخنفري | الرئيسية";
			},
		},
	},
};
</script>
