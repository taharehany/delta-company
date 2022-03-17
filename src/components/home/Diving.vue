<template lang="pug">
//in depths
section(class="in-depths" v-if="divingData")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-6")
                    div(class="depths-image" data-aos="fade-up")
                        img(v-lazy="divingData.image" class="img-fluid" :alt="divingData.image_alt")
                div(class="col-lg-6")
                    div(class="depths-text" data-aos="fade-down")
                        div(class="main-title")
                            h2 {{ divingData.title }}
                            p {{ divingData.description }}
                            router-link(to="/about" class="btn") {{ $t("learn_more") }}
//in depths
</template>

<script>
export default {
	name: "Diving",
    props: {
        divingData: Array
    }
};
</script>
