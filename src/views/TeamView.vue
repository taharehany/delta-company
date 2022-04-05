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
				document.title = to.meta.title || "عبدالله الخنفري | فريق العمل";
			},
		},
	},
};
</script>
