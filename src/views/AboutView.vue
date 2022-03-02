<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="aboutData.settings" :style="{backgroundImage: `url(${aboutData.settings.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ $t("about_us") }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("about_us") }}
//breadcrumb
About(:aboutApi="aboutData.about")
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import About from "@/components/pages/About.vue";
import { mapState } from "vuex"

export default {
	name: "AboutView",
	components: {
        Breadcrumb,
        About,
	},
    data() {
        return{
            aboutApi: [],
        }
    },
    computed: {
        ...mapState(["aboutData"])
    },
    created() {
        this.$store.dispatch("getAboutData");
    }
};
</script>
