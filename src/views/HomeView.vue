<template lang="pug">
Slider
About
Arrivals
Diving
Cta
Featured
Clients
</template>

<script>
import Slider from "@/components/home/Slider.vue";
import About from "@/components/home/About.vue";
import Arrivals from "@/components/home/Arrivals.vue";
import Diving from "@/components/home/Diving.vue";
import Cta from "@/components/home/Cta.vue";
import Featured from "@/components/home/Featured.vue";
import Clients from "@/components/home/Clients.vue";

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
};
</script>
