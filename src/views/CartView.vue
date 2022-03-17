<template lang="pug">
//cart
section(class="cart")
    div(class="container")
        div(class="cart-content")
            div(class="notfound-txt" v-if="cartProducts.length < 1")
                p(class="oops") {{ $t("oops") }}!
                p(class="notfound-text")
                    strong {{ $t("no_products_in_cart") }}
            div(class="row" v-if="cartProducts.length > 0")
                div(class="col-lg-9")
                    div(class="table-responsive table-area")
                        table(class="table")
                            thead
                                tr
                                    th {{ $t("product") }}
                                    th {{ $t("price") }}
                                    th {{ $t("quantity") }}
                                    th {{ $t("subtotal") }}
                                    th 
                            tbody
                                CartItem(v-for="product in cartProducts" :key="product.id" :product="product")
                div(class="col-lg-3")
                    CartSummary
//cart
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue";
import CartSummary from "@/components/cart/CartSummary.vue";

export default {
	name: "CartView",
	components: {
		CartItem,
		CartSummary,
	},
	computed: {
        cartProducts() {
            return this.$store.getters.cartItems
        }
	},
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | Cart";
                } else {
                    document.title = to.meta.title || "الهوية العربية | سلة الشراء";
                }
			},
		},
	},
};
</script>
