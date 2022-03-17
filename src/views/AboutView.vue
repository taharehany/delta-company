<template lang="pug">
//loading data
LoadingData(v-if="this.$store.state.loading")
//loading data

About(:aboutApi="aboutData.about" v-if="!this.$store.state.loading")
</template>

<script>
import LoadingData from "@/components/global/LoadingData.vue";
import About from "@/components/pages/About.vue";
import { mapState } from "vuex"

export default {
	name: "AboutView",
	components: {
        LoadingData,
        About,
	},
    data() {
        return{
            aboutApi: [],
        }
    },
    computed: {
        ...mapState(["aboutData"]),
    },
    created() {
        this.$store.dispatch("getAboutData");
    },
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | About us";
                } else {
                    document.title = to.meta.title || "الهوية العربية | من نحن";
                }
			},
		},
	},
};
</script>
