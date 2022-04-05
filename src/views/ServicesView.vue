<template lang="pug">
LoadingData(v-if="this.$store.state.loading")
Services(:servicesData="servicesData.services" v-if="servicesData && !this.$store.state.loading")
</template>

<script>
import LoadingData from "@/components/global/LoadingData.vue";
import Services from "@/components/pages/Services.vue";
import { mapState } from "vuex"

export default {
	name: "ServicesView",
	components: {
        LoadingData,
		Services,
	},
	computed: {
		...mapState(["servicesData"])
	},
	created() {
		this.$store.dispatch("getServicesData");
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				document.title = to.meta.title || "عبدالله الخنفري | خدماتنا";
			},
		},
	},
};
</script>
