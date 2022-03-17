<template lang="pug">
//loading data
LoadingData(v-if="this.$store.state.loading")
//loading data

Products(:productsData="productsData" v-if="!this.$store.state.loading")
</template>

<script>
import Products from "@/components/pages/Products.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import { mapState } from "vuex";

export default {
	name: "ProductsView",
	components: {
		Products,
        LoadingData,
	},
	computed: {
		...mapState(["productsData"]),
	},
	created() {
		this.$store.dispatch("getProductsData");
	},
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | Products";
                } else {
                    document.title = to.meta.title || "الهوية العربية | المنتجات";
                }
			},
		},
	},
};
</script>
