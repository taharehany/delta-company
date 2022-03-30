<template lang="pug">
div(class="inside-loading")
    img(src="@/assets/images/preloader.svg", class="img-fluid" alt="preloader")
</template>

<script>
export default {
	name: "LoadingData",
    props: {
        aboutApi: Array
    }
};
</script>
