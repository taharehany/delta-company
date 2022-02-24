<template lang="pug">
//main slider
section(class="main-slider")
    carousel(:items-to-show="1" :autoplay="50000" :settings="settings" class="main-slider-carousel")
        slide(v-for="slide in 3", :key="slide" class="slider-item")
            img(class="img-fluid" src="@/assets/images/slider/01.jpg" alt="")
            div(class="item-details")
                div(class="container")
                    div(class="item-text")
                        h1(class="title") title of text section
                        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore nobis illum. Harum a voluptates in eius tenetur quidem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        div(class="item-btn")
                            a(href="products.html" class="btn") our products
        template(#addons)
            pagination
//main slider
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default {
	name: "Slider",
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
    data: () => ({
		settings: {
			wrapAround: true,
            transition: 800
		},
	}),
};
</script>
