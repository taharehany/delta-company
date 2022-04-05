<template lang="pug">
//about us
section(class="about") 
    div(class="container")
        div(class="content")
            div(class="top-about")
                div(class="row")
                    div(class="col-lg-6")
                        div(class="main-title" data-aos="fade-down")
                            span(class="top-title") من نحن
                            h2 {{ aboutData.title }}
                    div(class="col-lg-6")
                        div(class="about-text" data-aos="fade-down")
                            div(v-html="first_about" data-aos="fade-down" data-aos-delay="100")
            div(class="bottom-about")
                div(class="row")
                    div(class="col-lg-6")
                        div(class="about-text" data-aos="fade-down")
                            //- div(class="main-title" data-aos="fade-down")
                            //-     h2 {{ aboutData.title }}
                            div(v-html="description" data-aos="fade-down" data-aos-delay="100")
                        div(class="about-btn" data-aos="fade-down" data-aos-delay="200")
                            div(class="outer-btn")
                                router-link(to="/about" class="btn")
                                    span المزيد عنا
                    div(class="col-lg-6")
                        div(class="about-image")
                            div(class="image" data-aos="fade-up")
                                img(class="img1 img-fluid" v-lazy="aboutData.image" :alt="aboutData.image_alt")
                                img(class="img2 img-fluid" v-lazy="aboutData.image2" :alt="aboutData.image_alt")
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
            return this.aboutData.description.substring(0, 450)
        },
        first_about () {
            return this.aboutData.first_about.substring(0, 250)
        }
    }
};
</script>
