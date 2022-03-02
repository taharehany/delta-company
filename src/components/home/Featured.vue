<template lang="pug">
//featured products
section(class="featured-products")
    div(class="container")
        div(class="main-title")
            h2 {{ $t("featured_products") }}
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="")
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
                            div(class="col-lg-3" v-for="product in allProductsData" :key="product.id")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(:src="product.image", class="img-fluid" :alt="product.image_alt")
                                        div(class="fav" v-if="userData")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart")
                                        div(class="layer" v-if="userData")
                                            a(href="#!" class="btn") {{ $t("add_to_cart") }}
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") {{ product.title }}
                div(class="tab-pane fade", v-for="category in categoriesData" :key="category.id" :id="'products-'+category.id" role="tabpanel", :aria-labelledby="'products-'+category.id+'-tab'") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3" v-for="product in category.products" :key="product.id")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(:src="product.image", class="img-fluid" :alt="product.image_alt")
                                        div(class="fav" v-if="userData")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer" v-if="userData")
                                            a(href="#!" class="btn") {{ $t("add_to_cart") }}
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") {{ product.title }}          
//featured products
</template>

<script>
export default {
	name: "Featured",
	props: {
		userData: Array,
		allProductsData: Array,
		categoriesData: Array,
	},
};
</script>
