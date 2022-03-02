<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="productsData.settings" :style="{backgroundImage: `url(${productsData.settings.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ $t("products") }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("products") }}
//breadcrumb
Products(:productsApi="productsData.products")
</template>

<script>
import Products from "@/components/pages/Products.vue";
import { mapState } from "vuex";

export default {
	name: "AboutView",
	components: {
		Products,
	},
    data() {
        return{
            productsApi: [],
        }
    },
	computed: {
		...mapState(["productsData"]),
	},
	created() {
		this.$store.dispatch("getProductsData");
	},
};
</script>
