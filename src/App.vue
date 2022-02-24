<template lang="pug">
div(class="main-wrapper")
    //PreLoader
    //- div(class="loader")
        img(src="images/logo.png", class="img-fluid" alt="Logo")
    //PreLoader
    Header
    router-view
    Footer
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>