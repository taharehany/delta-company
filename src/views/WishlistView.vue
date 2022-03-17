<template lang="pug">
//if wishlist updated
Toast(:showIfValue="updated" :message="$t('wishlist_updated_successfully')" :success="true")

//wishlist
section(class="wishlist")
    div(class="container")
        div(class="wishlist-content")
            div(class="table-responsive table-area")
                div(class="notfound-txt" v-if="wishlist.length == 0")
                    p(class="oops") {{ $t("oops") }}
                    p(class="notfound-text")
                        strong {{ $t("no_data_found") }}
                table(class="table table-hover" v-if="wishlistCheck && wishlist.length > 0")
                    div(class="wishlist-spinner" v-if="removing")
                        div(class="spinner-border text-dark", role="status")
                            span(class="visually-hidden") Loading...
                    thead
                        tr
                            th {{ $t("product") }}
                            th {{ $t("adding_date") }}
                            th {{ $t("controle") }}
                    tbody
                        tr(v-for="product in wishlist" :key="product.id")
                            td 
                                router-link(class="product-name" :to="`/products/${product.id}`")
                                    div(class="image")
                                        img(class="img-fluid" :alt="product.image_alt" v-lazy="product.image")
                                    p {{ product.title }}
                            td(nowrap="nowrap") {{ product.created_at }}
                            td
                                form(enctype="multipart/form-data" @submit.prevent="removeFromWishlist")
                                    input(name="product_id" :value="product.id" type="hidden")
                                    button(class="btn remove removeFromProfile" type="submit")
                                        | ×
//wishlist
</template>

<script>
import Toast from "@/components/global/Toast.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
	name: "WishlistView",
	components: {
        Toast,
	},
	data() {
		return {
            wishlistCheck: localStorage.getItem("user_wishlist"),
			wishlist: JSON.parse(localStorage.getItem("user_wishlist")),
			wishlistProductData: {
                product_id: null,
				token: JSON.parse(localStorage.getItem("user_data")).token,
			},
            removing: null,
            updated: null,
		};
	},
	methods: {
		removeFromWishlist(event) {
            this.updated = null;
			let wishlistTableTr = event.target;
			let formElements = event.target.elements;

			for (let x = 0; x < formElements.length; x++) {
				let element = formElements[x];

				if (element.value !== "" && element.name == "product_id") {
					this.wishlistProductData.product_id = element.value;
				}
			}
            
			this.removing = true;
			let wishlistProductData = this.wishlistProductData;
            
			axios
				.post("destroy", wishlistProductData, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization" : "Bearer " + wishlistProductData.token,
                        "Accept-Language": this.$store.state.locale,
                    },
                    params: {
                        product_id: wishlistProductData.product_id,
                    }
                })
				.then((response) => {
                    let data = JSON.stringify(response.data.data.wishlist);
                    this.removing = null;
                    this.updated = true;
                    wishlistTableTr.parentElement.parentElement.remove();
                    localStorage.setItem("user_wishlist", data);
				})
				.catch((error) => {
                    console.log(error, 'error');
				});
		},
	},
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | Wishlist";
                } else {
                    document.title = to.meta.title || "الهوية العربية | المفضلة";
                }
			},
		},
	},
};
</script>
