<template lang="pug">
//new arrivals
section(class="new-arrivals" v-if="arrivalData")
    div(class="container")
        div(class="main-title")
            h2 {{ $t("new_arrivals") }}
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="")
        div(class="content")
            carousel(:items-to-show="4" :autoplay="5000" :settings="settings" class="arrivals-carousel" dir="ltr")
                slide(v-for="product in arrivalData", :key="product.id" class="arrivals-box")
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
    props: {
        arrivalData: Array,
        userData: Array,
    }
};
</script>
