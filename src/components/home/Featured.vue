<template lang="pug">
//toast part
Toast(:showIfValue="updated" :message="$t('wishlist_updated_successfully')" :success="true")
Toast(:showIfValue="updatingError" :message="$t('wishlist_not_updated')" :success="false")
//toast part

//featured products
section(class="featured-products")
    div(class="container")
        div(class="main-title")
            h2 {{ $t("featured_products") }}
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="Favicon decore")
        div(class="content")
            ul(class="nav nav-pills", role="tablist")
                li(class="nav-item", role="presentation")
                    button(class="nav-link active", id="products-all-tab" data-bs-toggle="pill", data-bs-target="#products-all", type="button", role="tab", aria-controls="products-all", aria-selected="true") {{ $t("all") }}
                li(class="nav-item", role="presentation" v-for="category in categoriesData" :key="category.id")
                    button(class="nav-link", :id="'products-'+category.id+'-tab'" data-bs-toggle="pill", :data-bs-target="'#products-'+category.id", type="button", role="tab", :aria-controls="'products-'+category.id", aria-selected="false") {{ category.title }}
            div(class="tab-content")
                div(class="tab-pane fade show active", id="products-all" role="tabpanel", aria-labelledby="products-all-tab" ) 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3 col-md-6 col-sm-6" v-for="product in allProductsData.slice(0, 8)" :key="product.id")
                                ProductItem(:product="product" @status="getStatus" data-aos="fade-up" :data-aos-delay="product.id*100")
                div(class="tab-pane fade", v-for="category in categoriesData" :key="category.id" :id="'products-'+category.id" role="tabpanel", :aria-labelledby="'products-'+category.id+'-tab'") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3 col-md-6 col-sm-6" v-for="product in category.products.slice(0, 8)" :key="product.id" v-if="category.products")
                                ProductItem(:product="product" @status="getStatus" data-aos="fade-up" :data-aos-delay="product.id*100")        
//featured products
</template>

<script>
import ProductItem from "@/components/global/ProductItem.vue";
import Toast from "@/components/global/Toast.vue";
export default {
	name: "Featured",
	components: {
		ProductItem,
		Toast
	},
	props: {
		userData: Array,
		allProductsData: Array,
		categoriesData: Array,
	},
	data: () => ({
		updated: null,
		updatingError: null,

	}),
	methods: {
		getStatus(updated, updatingError) {
			this.updated = updated;
			this.updatingError = updatingError;
		},
	},
};
</script>
