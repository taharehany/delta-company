<template lang="pug">
//about page
section(class="about-in-page" v-if="aboutApi")
    div(class="container")
        div(class="content") 
            div(class="about-box" v-for="about in aboutApi", :key="about.id")
                div(class="row")
                    div(class="col-lg-6")
                        div(class="about-image")
                            img(class="img-fluid", alt="" :src="about.image")
                    div(class="col-lg-6")
                        div(class="about-text")
                            div(class="main-title")
                                h2 {{ about.title }}
                                div(class="decore-title")
                                    img(src="@/assets/images/favicon.png", alt="")
                            div(v-html="about.description")
//about page
</template>

<script>
export default {
	name: "About",
    props: {
        aboutApi: Array
    }
};
</script>
