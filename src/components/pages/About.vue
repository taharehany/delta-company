<template lang="pug">
//about us
section(class="about-in-page")
    div(class="container")
        div(class="content")
            div(class="about-image")
                div(class="image" data-aos="fade-up")
                    img(class="img1 img-fluid" v-lazy="aboutData.image" :alt="aboutData.image_alt")
                    img(class="img2 img-fluid" src="@/assets/images/big-logo.png" :alt="aboutData.image_alt")
            div(class="about-text")
                div(class="main-title")
                    span(class="top-title") {{ $t("about_us") }}
                    h2 {{ aboutData.title }}
                div(v-html="aboutData.description")
            div(class="clearfix")
//about us
</template>

<script>
export default {
	name: "AboutPage",
    props: {
        aboutData: Array
    },
};
</script>
