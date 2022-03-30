<template lang="pug">
LoadingData(v-if="this.$store.state.loading")
About(:aboutData="aboutData.about" v-if="aboutData && !this.$store.state.loading")
Cta(:ctaData="aboutData.cta" :phone="aboutData.settings.phone" v-if="aboutData")
</template>

<script>
import Cta from "@/components/home/Cta.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import About from "@/components/pages/About.vue";
import { mapState } from "vuex"

export default {
	name: "AboutView",
	components: {
        LoadingData,
		About,
        Cta,
	},
	computed: {
		...mapState(["aboutData"])
	},
	created() {
		this.$store.dispatch("getAboutData");
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "Aldgailbi & Altalhi | About";
				} else {
					document.title = to.meta.title || "الدغيلبي والطلحي | من نحن";
				}
			},
		},
	},
};
</script>
