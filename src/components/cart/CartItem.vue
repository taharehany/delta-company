<template lang="pug">
//cart item
tr(v-if="product")
    td
        router-link(:to="`/products/${product.id}`" class="product-name")
            div(class="image")
                img(class="img-fluid" alt="Natus" v-lazy="product.image")
            p {{ description }}...
    td(nowrap="nowrap") 
        strong(class="me-1") {{ Number(product.price) }} 
        | {{ $t("currency") }}
    td 
        div(class="quantity")
            i(class="decrease-val bi bi-dash-lg" @click="removeFromCart(product)")
            input(type="number", min="1", max="500", :value="product.quantity", class="val", disabled)
            i(class="increase-val bi bi-plus-lg" @click="addToCart(product)")
    td(nowrap="nowrap") 
        strong(class="me-1") {{ itemCost.toFixed(1) }} 
        | {{ $t("currency") }}
    td
        button(class="btn remove removeFromProfile" type="submit" @click="removeProduct(product)")
            | ×
//cart item
</template>

<script>
export default {
	name: "CartItem",
	props: {
		product: Array,
	},
	computed: {
		itemCost() {
			return Number(this.product.price) * Number(this.product.quantity);
		},
		description() {
			return this.product.description.substring(0, 150);
		},
	},
	methods: {
		addToCart(product) {
			this.$store.commit("addToCart", product);
		},
		removeFromCart(product) {
			this.$store.commit("removeFromCart", product);
		},
		removeProduct(product) {
			this.$store.commit("removeProduct", product);
		},
	},
};
</script>
