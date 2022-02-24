<template lang="pug">
//new arrivals
section(class="new-arrivals")
    div(class="container")
        div(class="main-title")
            h2 new arrivals
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="")
        div(class="content")
            carousel(:items-to-show="4" :autoplay="5000" :settings="settings" class="arrivals-carousel")
                slide(v-for="slide in 4", :key="slide" class="arrivals-box")
                    div(class="image")
                        a(href="single-product.html") 
                            img(src="@/assets/images/arrivals/01.jpg", class="img-fluid" alt="")
                        div(class="fav")
                            a(href="#!" class="btn") 
                                i(class="bi bi-heart")
                        div(class="layer")
                            a(href="#!" class="btn") add to cart
                    div(class="details")
                        div(class="title")
                            h3
                                a(href="single-product.html") this is product title
                template(#addons)
                    Navigation
//new arrivals
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default {
	name: "Arrivals",
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
    },
    data: () => ({
        settings: {
            wrapAround: false,
            transition: 500
        },
    }),
};
</script>
