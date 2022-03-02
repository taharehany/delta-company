<template lang="pug">
//about us
section(class="about" v-if="aboutData")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-6 col-12 col")
                    div(class="image-box")
                        div(class="image")
                            img(:src="aboutData.image" class="img-fluid" :alt="aboutData.image_alt")
                div(class="col-lg-6 col-12 col")
                    div(class="text-box")
                        div(class="corner-top")
                        div(class="corner-bottom")
                        div(class="text")
                            h3 {{ aboutData.title }}
                            p {{ aboutData.description }}
                            router-link(to="/about" class="btn") {{ $t("more_about") }}
//about us
</template>

<script>
export default {
	name: "About",
    props: {
        aboutData: Array
    }
};
</script>
