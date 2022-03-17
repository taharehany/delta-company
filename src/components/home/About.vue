<template lang="pug">
//about us
section(class="about" v-if="aboutData")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-6 col-12 col")
                    div(class="image-box")
                        div(class="image" data-aos="fade-down")
                            img(v-lazy="aboutData.image" class="img-fluid" :alt="aboutData.image_alt")
                div(class="col-lg-6 col-12 col")
                    div(class="text-box" data-aos="fade-down")
                        div(class="corner-top")
                        div(class="corner-bottom")
                        div(class="text")
                            h2 {{ aboutData.title }}
                            p {{ description }}
                            router-link(to="/about" class="btn") {{ $t("more_about") }}
//about us
</template>

<script>
export default {
	name: "About",
    props: {
        aboutData: Array
    },
    computed: {
        description () {
            return this.aboutData.description.substring(0, 150)
        }
    }
};
</script>
