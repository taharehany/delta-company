<template lang="pug">
//about us
section(class="about") 
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-4")
                    div(class="about-image")
                        div(class="image" data-aos="fade-up")
                            img(class="img1 img-fluid" v-lazy="aboutData.image" :alt="aboutData.image_alt")
                            img(class="img2 img-fluid" src="@/assets/images/big-logo.png" :alt="aboutData.image_alt")
                div(class="col-lg-7 d-flex flex-column justify-content-center")
                    div(class="about-text" data-aos="fade-down")
                        div(class="main-title" data-aos="fade-down")
                            span(class="top-title") {{ $t("about_us") }}
                            h2 {{ aboutData.title }}
                        div(v-html="description" data-aos="fade-down" data-aos-delay="100")
                        div(class="about-btn" data-aos="fade-down" data-aos-delay="200")
                            div(class="outer-btn")
                                router-link(to="/about" class="btn")
                                    span {{ $t("more_about_us") }}
//about us
</template>

<script>
export default {
	name: "About",
    props: {
        aboutData: Array,
    },
    computed: {
        description () {
            return this.aboutData.description.substring(0, 500)
        }
    }
};
</script>
