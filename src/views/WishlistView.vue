<template lang="pug">
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="settingsData" :style="{backgroundImage: `url(${settingsData.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ $t("wishlist") }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("wishlist") }}
//breadcrumb

//wishlist
section(class="wishlist")
    div(class="container")
        div(class="wishlist-content")
            div(class="table-responsive table-area")
                table(class="table table-hover")
                    thead
                        tr
                            th product
                            th category
                            th adding date
                            th controle
                    tbody
                        tr
                            td
                                a(class="product-name" href="single-product.html")
                                    div(class="image")
                                        img(class="img-fluid" alt="Natus" src="@/assets/images/products/01.jpg")
                                    p Voluptates quis mollitia corrupti officia enim eum molestiae error numquam consequatur nemo laborum
                            td scarf
                            td 12/06/2021
                            td
                                button(class="btn remove removeFromProfile" type="submit")
                                    | ×
                        tr
                            td
                                a(class="product-name" href="single-product.html")
                                    div(class="image")
                                        img(class="img-fluid" alt="Consequatur" src="@/assets/images/products/01.jpg")
                                    p Expedita et vero dolor minima hic earum culpa fugiat asperiores neque placeat eum voluptatum
                            td scarf
                            td 12/06/2021
                            td
                                button(class="btn remove removeFromProfile" type="submit")
                                    | ×
                        tr
                            td
                                a(class="product-name" href="single-product.html")
                                    div(class="image")
                                        img(class="img-fluid" alt="Minima" src="@/assets/images/products/01.jpg")
                                    p Irure iure ut excepturi in
                            td scarf
                            td 11/30/2021
                            td
                                button(class="btn remove removeFromProfile" type="submit")
                                    | ×
                        tr
                            td
                                a(class="product-name" href="single-product.html")
                                    div(class="image")
                                        img(class="img-fluid" alt="Itaque" src="@/assets/images/products/01.jpg")
                                    p Enim corrupti sit adipisci est aliqua Quis dolorum debitis rerum ratione laudantium ab
                            td scarf
                            td 01/04/2022
                            td
                                button(class="btn remove removeFromProfile" type="submit")
                                        | ×
//wishlist
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import About from "@/components/pages/About.vue";
import { mapState } from "vuex"

export default {
	name: "WishlistView",
	components: {
        Breadcrumb,
        About,
	},
    computed: {
		...mapState(["settingsData"]),
	},
	created() {
		this.$store.dispatch("getSettingsData");
	},
};
</script>
