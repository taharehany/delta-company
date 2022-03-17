<template lang="pug">
//toast part
Toast(:showIfValue="updated" :message="$t('wishlist_updated_successfully')" :success="true")
//toast part

//all products
section(class="all-products")
    div(class="container")
        div(class="content")
            div(class="alert alert-success d-flex justify-content-between", role="alert" v-if="totalProducts")
                div(class="d-flex align-items-center")
                    svg(class="bi flex-shrink-0 me-2", width="24", height="24", role="img", aria-label="Success:")
                        use(xlink:href="#check-circle-fill")
                        symbol(fill="#8fae1b", id="check-circle-fill" viewBox="0 0 16 16")
                            path(d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z")
                    div {{ totalProducts }} {{ $t("products_added_to_your_cart") }}.
                router-link(to="/cart" class="btn")
                    i(class="bi bi-cart-check me-1")
                    | {{ $t("view_cart") }}
            div(class="row")
                div(class="col-12")
                    div(class="results") 
                        div(class="icons")
                            i(class="grid-3 bi bi-grid-3x3-gap-fill" @click="threeGrids")
                            div(class="text" v-if="filterResult && filterResult.length >= 0") {{ filterResult.length }} {{ $t("results") }}
                        div(class="filter")
                            form(action="")
                                div(class="form-group")
                                    select(class="form-select" @change="handleFilter")
                                        option(selected disabled) {{ $t("categories") }}
                                        option(v-for="category in productsData.categories" :value="category.id") {{ category.title }}
                div(:class="'box ' + grid" v-for="product in productsData.products", :key="product.id" v-if="!filterResult")
                    ProductItem(:product="product" @status="getStatus" data-aos="fade-up" :data-aos-delay="product.id*100")
                div(:class="'box ' + grid" v-for="product in filterResult", :key="product.id" v-else)
                    ProductItem(:product="product" @status="getStatus" data-aos="fade-up" :data-aos-delay="product.id*100")
                div(class="notfound-txt" v-if="filterResult && filterResult.length == 0")
                    p(class="notfound-text")
                        strong {{ $t("no_results") }}
//all products
</template>

<script>
import ProductItem from "@/components/global/ProductItem.vue";
import Toast from "@/components/global/Toast.vue";
export default {
	name: "Products",
	props: {
		productsData: Array,
	},
	components: {
		ProductItem,
		Toast,
	},
	data: () => ({
		updated: null,
		filterResult: null,
		grid: "col-lg-3 col-md-6",
	}),
	methods: {
		addToCart(product) {
			this.$store.commit("addToCart", product);
		},
		productTotal(total) {
			return this.$store.getters.productQuantity(total);
		},
		getStatus(value) {
			this.updated = value;
		},
		handleFilter(event) {
			this.filterResult = this.productsData.products.filter(
				(product) => product.category_id == event.target.value
			);
		},
		threeGrids() {
			this.grid = "col-lg-4 col-md-6"
		},
	},
	computed: {
		totalProducts() {
			return this.$store.getters.totalProducts;
		},
	},
};
</script>
