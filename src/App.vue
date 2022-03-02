<template lang="pug">
div(class="main-wrapper")
    //PreLoader
    div(class="loader")
        img(src="@/assets/images/logo.png", class="img-fluid" alt="Logo")
    //PreLoader
    Header(:headerData="settingsData" :userData="session")
    router-view
    Footer(:footerData="settingsData" :userData="session")
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapState } from "vuex"

export default {
	components: {
		Header,
		Footer,
	},
    data() {
        return {
            headerData: [],
            footerData: [],
            session: JSON.parse(sessionStorage.getItem('user_data')),
        }
    },
    computed: {
        ...mapState(["settingsData"])
    },
    created() {
        this.$store.dispatch("getSettingsData");
    }
};
</script>