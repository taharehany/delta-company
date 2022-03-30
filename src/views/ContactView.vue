<template lang="pug">
Contact
</template>

<script>
import Contact from "@/components/pages/Contact.vue";

export default {
	name: "ContactView",
	components: {
		Contact,
	},
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "Aldigailbi & Altalhi | Contact us";
                } else {
                    document.title = to.meta.title || "الدغيلبي والطلحي | تواصل معنا";
                }
			},
		},
	},
};
</script>
