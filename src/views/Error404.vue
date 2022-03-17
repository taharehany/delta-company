<template lang="pug">
//error 404
div(class="error")
    div(class="container")
        div(class="text-center mx-auto") 
            h2 4
                span(class="diff-color") 
                    span(class="num") 0
                | 4
            p(class="lead text-gray-800 mb-4") {{ $t("page_not_found") }}
            router-link.btn.back(to="/" exact) {{ $t("home") }}
//error 404
</template>

<script>
export default {
	name: "Error404",
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "In Arabia | 404";
                } else {
                    document.title = to.meta.title || "الهوية العربية | 404";
                }
			},
		},
	},
};
</script>
