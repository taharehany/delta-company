<template lang="pug">
//call to action
section(class="cta")
    div(class="container")
        div(class="content")
            div(class="cta-logo")
                img(class="img-fluid" v-lazy="ctaData.image" :alt="ctaData.image_alt")
            div(class="main-title")
                h2 {{ title }}
                div(v-html="ctaData.description")
            div(class="cta-icon")
                a(:href="'tel:'+phone") 
                    i(class="bi bi-telephone-outbound") 
//call to action
</template>

<script>
export default {
	name: "Cta",
	props: {
		ctaData: Object,
		phone: String,
	},
    computed: {
        title () {
            return this.ctaData.title.substring(0, 50)
        }
    }
};
</script>
