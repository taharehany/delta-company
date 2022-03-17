<template lang="pug">
//subscribe
section(class="subscribe" v-if="ctaData")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-12")
                    div(class="subscribe-form")
                        div(class="main-title")
                            h3(class="heading") {{ ctaData.title }}
                            p(class="sub-title") {{ ctaData.description }}
                        div(class="icon")
                            a(:href="'tel:'+settingsData.phone" aria-label="telephone icon")
                                i(class="bi bi-telephone-outbound") 
//subscribe
</template>

<script>
export default {
	name: "Cta",
    props: {
        ctaData: Array,
        settingsData: Array
    }
};
</script>
