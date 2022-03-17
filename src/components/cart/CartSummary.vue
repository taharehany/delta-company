<template lang="pug">
//cart summary
div(class="cart-total")
    table(class="table")
        tbody
            tr
                td(class="total-title") {{ $t('total_price') }}: 
                td(class="total") 
                    strong(class="me-1") {{ cartTotal.toFixed() }} 
                    | {{ $t("currency") }}
    div(class="btns")
        router-link(class="btn", to="/checkout") {{ $t('proceed_to_checkout') }}
//cart summary
</template>

<script>
export default {
	name: "CartItem",
	computed: {
		cartTotal() {
			return this.$store.getters.cartTotal;
		},
	},
};
</script>
