<template lang="pug">
//featured products
section(class="featured-products")
    div(class="container")
        div(class="main-title")
            h2 featured products
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="")
        div(class="content")
            ul(class="nav nav-pills", role="tablist")
                li(class="nav-item", role="presentation")
                    button(class="nav-link active", id="products-1-tab" data-bs-toggle="pill", data-bs-target="#products-1", type="button", role="tab", aria-controls="products-1", aria-selected="true") all
                li(class="nav-item", role="presentation")
                    button(class="nav-link", id="products-2-tab" data-bs-toggle="pill", data-bs-target="#products-2", type="button", role="tab", aria-controls="products-2", aria-selected="false") new arrivals
                li(class="nav-item", role="presentation")
                    button(class="nav-link", id="products-3-tab" data-bs-toggle="pill", data-bs-target="#products-3", type="button", role="tab", aria-controls="products-3", aria-selected="false") deal of the week
                li(class="nav-item", role="presentation")
                    button(class="nav-link", id="products-4-tab" data-bs-toggle="pill", data-bs-target="#products-4", type="button", role="tab", aria-controls="products-4", aria-selected="false") featured products
            div(class="tab-content")
                div(class="tab-pane fade show active", id="products-1" role="tabpanel", aria-labelledby="products-1-tab") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/01.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/02.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/03.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/04.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/05.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                div(class="tab-pane fade", id="products-2" role="tabpanel", aria-labelledby="products-2-tab") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/01.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/02.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart-fill")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/03.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                div(class="tab-pane fade", id="products-3" role="tabpanel", aria-labelledby="products-3-tab") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/01.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
                div(class="tab-pane fade", id="products-4" role="tabpanel", aria-labelledby="products-4-tab") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-3")
                                div(class="products-box")
                                    div(class="image")
                                        a(href="single-product.html") 
                                            img(src="@/assets/images/products/01.jpg", class="img-fluid" alt="")
                                        div(class="fav")
                                            a(href="#!" class="btn") 
                                                i(class="bi bi-heart")
                                        div(class="layer")
                                            a(href="#!" class="btn") add to cart
                                    div(class="details")
                                        div(class="title")
                                            h3
                                                a(href="single-product.html") this is product title
//featured products
</template>

<script>
export default {
	name: "Featured",
};
</script>
