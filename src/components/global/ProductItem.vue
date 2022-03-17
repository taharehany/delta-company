<template lang="pug">
div(class="product-box")
    div(class="image")
        router-link(:to="`/products/${product.id}`") 
            img(v-lazy="product.image", class="img-fluid" :alt="product.image_alt")
        div(class="fav" v-if="!userDataCheck")
            router-link(to="/account" class="btn" aria-label="wishlit icon")
                i(class="bi bi-heart")
        div(class="fav" v-if="userDataCheck")
            form(enctype="multipart/form-data" @submit.prevent="updateWishlist")
                input(name="product_id" :value="product.id" type="hidden")
                button(class="btn" type="submit" aria-label="wishlit icon") 
                    i(class="bi bi-heart-fill" v-if="userWishlist.some(wish => wish.id == product.id)")
                    i(class="bi bi-heart" v-else)
        div(class="layer" v-if="userDataCheck && productTotal(product) <= 0")
            a(class="btn" @click="addToCart(product)") {{ $t("add_to_cart") }}
        div(class="layer" v-if="userDataCheck && productTotal(product) > 0")
            a(class="btn added" aria-label="check icon") 
                i(class="bi bi-check")
        div(class="layer" v-if="!userDataCheck")
            router-link(to="/account" class="btn") {{ $t("add_to_cart") }}
    div(class="details")
        div(class="title")
            h3
                router-link(:to="`/products/${product.id}`") {{ product.title }}
</template>

<script>
import axios from "axios";

export default {
	name: "ProductItem",
	props: {
		product: Array,
	},
	data: () => ({
		wishlistProductData: {
			product_id: null,
			user_id: null,
			token: null,
		},
		userWishlistCheck: localStorage.getItem("user_wishlist"), /* check if user wishlist exist in localstorage */
		userDataCheck: localStorage.getItem("user_data"), /* check if user data exist in localstorage */
		userWishlist: JSON.parse(localStorage.getItem("user_wishlist")),
		userData: JSON.parse(localStorage.getItem("user_data")),
		updated: null,
		updating: null,
        updatingError: null,
	}),
	methods: {
		addToCart(product) {
			this.$store.commit("addToCart", product);
		},
		productTotal(total) {
			return this.$store.getters.productQuantity(total);
		},
		updateWishlist(event) {
			this.updated = null;
			this.updatingError = null;
			this.$emit('status', this.updated, this.updatingError) //pass values to parent

			let heartIcon = event.target.querySelector("i"); //toggle heart icon fill and empty
			heartIcon.classList.add("spinner-border");
			heartIcon.classList.remove("bi-heart-fill");
			heartIcon.classList.remove("bi-heart");

			let formElements = event.target.elements;
			for (let x = 0; x < formElements.length; x++) {
				let element = formElements[x];

				if (element.value !== "" && element.name == "product_id") {
					this.wishlistProductData.product_id = element.value;
				}
			}

			this.wishlistProductData.user_id = this.userData.id;
			this.wishlistProductData.token = this.userData.token;

			let wishlistProductData = this.wishlistProductData;
			axios
				.post("update-wishlist", wishlistProductData,
					{
						headers: {
							Accept: "application/json",
							Authorization: "Bearer " + wishlistProductData.token,
                            "Accept-Language": this.$store.state.locale,
						},
						params: {
							product_id: wishlistProductData.product_id,
							user_id: wishlistProductData.user_id,
						},
					}
				)
				.then((response) => {
					this.updated = true;
					this.updatingError = null;
					this.$emit('status', this.updated, this.updatingError) //pass values to parent
					let data = JSON.stringify(response.data.data.wishlist);
					localStorage.setItem("user_wishlist", data);

					let heartIcon = event.target.querySelector("i"); //toggle heart icon fill and empty
					heartIcon.classList.remove("spinner-border");

					if (response.data.status == "added") {
						heartIcon.classList.add("bi-heart-fill")
						heartIcon.classList.remove("bi-heart")
					} else if (response.data.status == "removed") {
						heartIcon.classList.remove("bi-heart-fill")
						heartIcon.classList.add("bi-heart")
					}
				})
				.catch((error) => {
					console.log(error, "error");
                    this.updated = null;
                    this.updatingError = true;
                    this.$emit('status', this.updated, this.updatingError) //pass values to parent
				});
		},
	},
};
</script>
