<template lang="pug">
div(class="loader" v-if="this.$store.state.loading")
    img(src="@/assets/images/logo.png", class="img-fluid" alt="Logo")
Slider(:sliderData="homeData.slider")
About(:aboutData="homeData.about")
Arrivals(:arrivalData="homeData.new_arrivals" :userData="session")
Diving(:divingData="homeData.diving")
Cta(:ctaData="homeData.cta" :settingsData="homeData.settings")
Featured(:allProductsData="homeData.products" :categoriesData="homeData.categories" :userData="session" v-if="homeData.products !== undefined")
Clients(:clientsData="homeData.clients")
</template>

<script>
import Slider from "@/components/home/Slider.vue";
import About from "@/components/home/About.vue";
import Arrivals from "@/components/home/Arrivals.vue";
import Diving from "@/components/home/Diving.vue";
import Cta from "@/components/home/Cta.vue";
import Featured from "@/components/home/Featured.vue";
import Clients from "@/components/home/Clients.vue";
import { mapState } from "vuex"

export default {
	name: "HomeView",
	components: {
		Slider,
		About,
		Arrivals,
		Diving,
		Cta,
		Featured,
		Clients,
	},
    data() {
        return{
            session: JSON.parse(localStorage.getItem('user_data')),
        }
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
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | Home";
                } else {
                    document.title = to.meta.title || "الهوية العربية | الرئيسية";
                }
			},
		},
	},
};
</script>
