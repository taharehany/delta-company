<template lang="pug">
tr(v-if="product")
    td
        router-link(:to="`/products/${product.id}`" class="product-name") {{ title }}... 
        | × 
        span {{ product.quantity }}
    td(class="total") 
        strong(class="me-1") {{ itemCost.toFixed() }} 
        | {{ $t("currency") }}
//checkout page
</template>

<script>
export default {
	name: "CheckoutItemSummary",
    props: {
        product: Array
    },
	methods: {
		
	},
    computed: {
		itemCost() {
			return Number(this.product.price) * Number(this.product.quantity);
		},
		title() {
			return this.product.title.substring(0, 15);
		},
	},
    created() {
		this.$store.dispatch("getSettingsData");
	},
};
</script>
