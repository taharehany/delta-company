<template lang="pug">
//loading data
LoadingData(v-if="this.$store.state.loading")
//loading data

//orders page
section(class="orders" v-if="!this.$store.state.loading")
    div(class="container")
        div(class="content")
            div(class="notfound-txt" v-if="ordersData.orders.length < 1")
                p(class="oops") {{ $t("oops") }}
                p(class="notfound-text")
                    strong {{ $t("no_orders") }}
            div(class="order-details" v-for="order in ordersData.orders" :key="order.id" v-if="ordersData.orders.length > 0")
                div(class="title")
                    h3 {{ $t("order_number") }}: {{ order.id }}
                table(class="table")
                    thead
                        tr
                            th {{ $t("product") }}
                            th {{ $t("total") }}
                    tbody
                        tr(v-for="product in order.products" :key="product.id")
                            td 
                                router-link(:to="'/products/'+product.id") {{ product.title.slice(0, 20) }}... 
                                span(class="count")  × {{ product.quantity }}
                            td {{ product.price }}
                        tr
                            td {{ $t("status") }}
                            td(class="status") {{ $t(`${singleStatus(order.status)}`) }}
                        tr
                            td {{ $t("total") }}
                            td(class="all-total") 
                                strong(class="me-1") {{ order.total_price }}   
                                | {{ $t("currency") }}
//orders page
</template>

<script>
import { mapState } from "vuex";
import LoadingData from "@/components/global/LoadingData.vue";

export default {
	name: "OrdersView",
	components: {
		LoadingData,
	},
	data() {
		return {
			status: ['pending', 'shipping', 'delivered', 'canceled']
		}
	},
	computed: {
		...mapState(["ordersData"]),
	},
	created() {
		this.$store.dispatch("getOrdersData");
	},
	methods: {
		singleStatus(test) {
			return this.status.find(element => element == test)
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "In Arabia | Last orders";
				} else {
					document.title =
						to.meta.title || "الهوية العربية | الطلبات السابقة";
				}
			},
		},
	},
};
</script>
