<template lang="pug">
Slider(:sliderData="homeData.slider")
About(:aboutData="homeData.about")
Arrivals(:arrivalData="homeData.new_arrivals" :userData="session")
Diving(:divingData="homeData.diving")
Cta(:ctaData="homeData.diving" :settingsData="homeData.settings")
Featured(:allProductsData="homeData.products" :categoriesData="homeData.categories" :userData="session")
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
            sliderData: [],
            aboutData: [],
            arrivalData: [],
            divingData: [],
            ctaData: [],
            allProductsData: [],
            categoriesData: [],
            settingsData: [],
            session: JSON.parse(sessionStorage.getItem('user_data')),
        }
    },
    computed: {
        ...mapState(["homeData"])
    },
    created() {
        this.$store.dispatch("getHomeData");
    }
};
</script>
