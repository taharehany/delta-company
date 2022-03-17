<template lang="pug">
//thanks page
section(class="thanks")
    div(class="container")
        div(class="content")
            div(class="text")
                p {{ $t("thanks_your_request_has_been_received") }}
                ul 
                    li {{ $t("order_number") }}:
                        strong {{ lastOrderData.id }}
                    li {{ $t("date") }}:
                        strong {{ lastOrderData.date }}
                    li {{ $t("total") }}:
                        strong {{ lastOrderData.total_price }}
                    li {{ $t("billing_way") }}:
                        strong {{ $t("on_delivery") }}
//thanks page
</template>

<script>
export default {
	name: "ThanksView",
	data: () => ({
		lastOrderData: JSON.parse(localStorage.getItem("last_order")) || [],
	}),
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "In Arabia | Orders";
				} else {
					document.title =
						to.meta.title || "الهوية العربية | الطلبات";
				}
			},
		},
	},
};
</script>
