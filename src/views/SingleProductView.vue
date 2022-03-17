<template lang="pug">
//loading data
LoadingData(v-if="loading" )
//loading data

//single product
ProductDetails(:product="product" :categories="homeData.categories" v-if="product && !loading")
//single product

//related products
RelatedProducts(:relatedProducts="homeData.new_arrivals")
//related products
</template>

<script>
import LoadingData from "@/components/global/LoadingData.vue";
import RelatedProducts from "@/components/single-product/RelatedProducts.vue";
import ProductDetails from "@/components/single-product/ProductDetails.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
	name: "SingleProductView",
	components: {
		LoadingData,
		ProductDetails,
		RelatedProducts,
	},
	data() {
		return {
			product: [],
			loading: true,
		};
	},
	computed: {
		...mapState(["homeData"]),
	},
	methods: {
		async initData() {
			this.loading = true;
			await axios
				.get(`products/${this.$route.params.id}`, {
                    headers: {
                        "Accept-Language": this.$store.state.locale,
                    }
                })
				.then((response) => {
					this.product = response.data.data.product;
					this.loading = false;
				});
		},
	},
    async created() {
        this.$store.dispatch("getHomeData");
		this.initData();
		this.$watch(
			() => this.$route.params,
			async () => {
				this.initData();
			}
		);
	},
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | Single product";
                } else {
                    document.title = to.meta.title || "الهوية العربية | صفحة المنتج";
                }
			},
		},
	},
};
</script>
