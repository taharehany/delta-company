<template lang="pug">
//all products
section(class="all-products" v-if="productsApi")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-12")
                    div(class="results") 
                        div(class="icons")
                            i(class="grid-2 bi bi-grid-fill")
                            i(class="grid-3 bi bi-grid-3x3-gap-fill")
                            div(class="text") showing 20 of results 
                        div(class="filter")
                            form(action="")
                                div(class="form-group")
                                    select(name="" class="form-select")
                                        option(value="" selected disabled) categories
                                        option(value="") deal of the week   
                                        option(value="") featured products    
                                        option(value="") new arrivals
                div(class="box col-lg-3" v-for="product in productsApi", :key="product.id")
                    div(class="products-box")
                        div(class="image")
                            a(href="single-product.html")
                                img(:src="product.image", class="img-fluid" :alt="product.image_alt")
                            div(class="fav")
                                a(href="#!" class="btn") 
                                    i(class="bi bi-heart-fill")
                            div(class="layer")
                                a(href="#!" class="btn") add to cart
                        div(class="details")
                            div(class="title")
                                h3
                                    a(href="single-product.html") this is product title
//all products
</template>

<script>
export default {
	name: "Products",
    props: {
        productsApi: Array
    }
};
</script>
