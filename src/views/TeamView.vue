<template lang="pug">
LoadingData(v-if="this.$store.state.loading")
Team(:teamData="teamData.team" v-if="teamData && !this.$store.state.loading")
</template>

<script>
import LoadingData from "@/components/global/LoadingData.vue";
import Team from "@/components/pages/Team.vue";
import { mapState } from "vuex"

export default {
	name: "TeamView",
	components: {
        LoadingData,
		Team,
	},
	computed: {
		...mapState(["teamData"])
	},
	created() {
		this.$store.dispatch("getTeamData");
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "Aldgailbi & Altalhi | Team";
				} else {
					document.title = to.meta.title || "الدغيلبي والطلحي | فريق العمل";
				}
			},
		},
	},
};
</script>
