<template lang="pug">
Breadcrumb
//error 404
.error
	.container
		.text-center.mx-auto 
			h2 4
				span.diff-color 
					span.num 0
				| 4
			p.lead.text-gray-800.mb-4 page not found
			router-link.btn.back(to="/" exact) main page
//error 404
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";

export default {
	name: "Error404",
	components: { Breadcrumb },
};
</script>
