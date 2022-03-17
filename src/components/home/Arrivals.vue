<template lang="pug">
//toast part
Toast(:showIfValue="updated" :message="$t('wishlist_updated_successfully')" :success="true")
Toast(:showIfValue="updatingError" :message="$t('wishlist_not_updated')" :success="false")
//toast part

//new arrivals
section(class="new-arrivals" v-if="arrivalData")
    div(class="container")
        div(class="main-title")
            h2 {{ $t("new_arrivals") }}
            div(class="decore-title")
                img(src="@/assets/images/favicon.png", alt="Favicon decore")
        div(class="content") 
            carousel(:items-to-show="4" :autoplay="5000" :settings="settings" :breakpoints="breakpoints" class="arrivals-carousel" dir="ltr")
                slide(v-for="product in arrivalData", :key="product.id")
                    ProductItem(:product="product" @status="getStatus" @error="getError")
                template(#addons)
                    Navigation
//new arrivals
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import ProductItem from "@/components/global/ProductItem.vue";
import Toast from "@/components/global/Toast.vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default {
	name: "Arrivals",
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination,
		ProductItem,
		Toast,
	},
    props: {
		arrivalData: Array,
		userData: Array,
	},
	data: () => ({
		settings: {
			wrapAround: false,
			transition: 500,
		},
		breakpoints: {
			0: {
				itemsToShow: 1,
			},
			700: {
				itemsToShow: 2,
			},
			1024: {
				itemsToShow: 4,
			},
		},
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
