<template lang="pug">
//toast part
Toast(:showIfValue="updated" :message="$t('wishlist_updated_successfully')" :success="true")
//toast part
//related products
section(class="related-products")
    div(class="container")
        div(class="main-title")
            h2 {{ $t("new_arrivals") }}
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="decore image")
        div(class="content")
            div(class="row")
                div(class="col-lg-3 col-md-6" v-for="product in relatedProducts", :key="product.id")
                    ProductItem(:product="product" @status="getStatus")
//related products
</template>

<script>
import ProductItem from "@/components/global/ProductItem.vue";
import Toast from "@/components/global/Toast.vue";

export default {
	name: "RelatedProducts",
	props: {
		relatedProducts: Array,
	},
	components: {
		ProductItem,
        Toast,
	},
    data: () => ({
		updated: null,
	}),
	methods: {
		getStatus(value) {
			this.updated = value
		},
	},
};
</script>
