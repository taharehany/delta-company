<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="settingsData" :style="{backgroundImage: `url(${settingsData.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ $t("error404") }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("error404") }}
//breadcrumb

//error 404
div(class="error")
    div(class="container")
        div(class="text-center mx-auto") 
            h2 4
                span(class="diff-color") 
                    span(class="num") 0
                | 4
            p(class="lead text-gray-800 mb-4") {{ $t("page_not_found") }}
            router-link.btn.back(to="/" exact) {{ $t("home") }}
//error 404
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Error404",
	computed: {
		...mapState(["settingsData"]),
	},
	created() {
		this.$store.dispatch("getSettingsData");
	},
};
</script>
