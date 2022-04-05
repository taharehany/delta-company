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
                document.title = to.meta.title || "عبدالله الخنفري | تواصل معنا";
			},
		},
	},
};
</script>
