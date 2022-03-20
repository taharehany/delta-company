<template lang="pug">
//if order sent successfully
div(class="position-fixed bottom-0 start-0 p-3 toast-part")
    div(class="toast align-items-center text-white bg-success border-0" :class="{ 'show': checkout_done }" role="alert", aria-live="assertive", aria-atomic="true")
        div(class="d-flex")
            div(class="toast-body") {{ $t("your_order_sent_successfully") }}
            button(type="button", class="btn-close btn-close-white me-2 m-auto", data-bs-dismiss="toast", aria-label="Close")

//checkout page
section(class="checkout")
    div(class="container")
        div(class="content")
            form(enctype="multipart/form-data" @submit.prevent="handlecheckoutForm")
                div(class="row")
                    div(class="col-lg-9")
                        div(class="checkout-form")
                            div(class="title")
                                h3 {{ $t("checkout_details") }}
                            div(class="row")
                                div(class="col-lg-6")
                                    div(class="form-group")
                                        label(for="") {{ $t("name") }} *
                                        input(type="text" class="form-control" name="name" v-model="checkoutFormData.name")
                                        div(class="invalid-feedback" v-if="checkoutErrors.name && !checkout_done" v-for="error in checkoutErrors.name") {{ error }}
                                div(class="col-lg-6")
                                    div(class="form-group")
                                        label(for="") {{ $t("phone") }} *
                                        input(type="text" class="form-control" name="phone" v-model="checkoutFormData.phone")
                                        div(class="invalid-feedback" v-if="checkoutErrors.phone && !checkout_done" v-for="error in checkoutErrors.phone") {{ error }}
                                div(class="col-lg-12")
                                    div(class="form-group")
                                        label(for="") {{ $t("address") }} *
                                        textarea(class="form-control" rows="3" name="address" v-model="checkoutFormData.address")
                                        div(class="invalid-feedback" v-if="checkoutErrors.address && !checkout_done" v-for="error in checkoutErrors.address") {{ error }}
                    div(class="col-lg-3")
                        div(class="checkout-total")
                            table(class="table")
                                thead
                                    tr 
                                        th(class="product") {{ $t("product") }}
                                        th(class="subtotal") {{ $t("subtotal") }}
                                tbody
                                    CheckoutItemSummary(v-for="product in cartProducts" :key="product.id" :product="product")
                                    tr
                                        td(class="total-title") {{ $t("total_price") }}
                                        td(class="total") 
                                            strong(class="me-1") {{ cartTotal.toFixed() }}
                                            | {{ $t("currency") }}
                            div(class="btns")
                                button(class="btn") 
                                    span(v-if="!sending") {{ $t("order_now") }}
                                    span(v-if="sending") {{ $t("sending") }}
                                    div(class="spinner-border text-light", role="status" v-if="sending")
                                        span(class="visually-hidden") Loading...
</template>

<script>
import CheckoutItemSummary from "@/components/pages/CheckoutItemSummary.vue";
import axios from "axios";

export default {
	name: "checkoutView",
	components: {
		CheckoutItemSummary,
	},
	data() {
		return {
			userData: JSON.parse(localStorage.getItem("user_data")),
			checkout_done: null,
			checkout_error: null,
			sending: false,
			checkoutErrors: {
				name: null,
				phone: null,
				address: null,
			},
			checkoutFormData: {
				name: null,
				phone: null,
				address: null,
                total_price: this.$store.getters.cartTotal.toFixed(),
				products: this.$store.getters.cartItems,
			},
		};
	},
	computed: {
		cartProducts() {
			return this.$store.getters.cartItems;
		},
		itemCost() {
			return Number(this.product.price) * Number(this.product.quantity);
		},
		cartTotal() {
			return this.$store.getters.cartTotal;
		},
		description() {
			return this.product.description.substring(0, 150);
		},
	},
	methods: {
		handlecheckoutForm() {
			this.sending = true;
			let checkoutFormData = this.checkoutFormData;
			let token = this.userData.token;
            
			axios
				.post("checkout", checkoutFormData, 
					{
						headers: {
							Accept: "application/json",
							Authorization: "Bearer " + token,
                            "Accept-Language": this.$store.state.locale,
						},
					}
				)
				.then((response) => {
					this.sending = false;
					this.checkout_done = true;
					this.register_error = true;
					this.checkoutFormData.name = null;
					this.checkoutFormData.phone = null;
					this.checkoutFormData.address = null;

                    this.$store.commit("destroyCart");
                    localStorage.setItem("last_order", JSON.stringify(response.data.data))
                    this.$router.push("/thanks");
				})
				.catch((error) => {
					this.sending = false;
					this.checkout_done = null;
					this.checkout_error = true;

					this.checkoutErrors.name = error.response.data.data.name;
					this.checkoutErrors.phone = error.response.data.data.phone;
					this.checkoutErrors.address = error.response.data.data.address;
					console.log(error);
				});
		},
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "In Arabia | Ceckout";
				} else {
					document.title = to.meta.title || "الهوية العربية | الدفع";
				}
			},
		},
	},
};
</script>
