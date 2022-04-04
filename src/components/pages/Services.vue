<template lang="pug">
//services
section(class="services-in-page")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-4 col-md-6 box" v-for="service in servicesData" :key="service.id")
                    div(class="service-box" data-aos="fade-up" :data-aos-delay="service.id*50")
                        router-link(:to="`/services/${service.id}`") 
                            div(class="image")
                                img(class="img-fluid" v-lazy="service.image" :alt="service.image_alt")
                        div(class="details")
                            div(class="title")
                                router-link(:to="`/services/${service.id}`") {{ service.title.substring(0, 20) }}
                            div(v-html="service.description.substring(0, 130)+'...'")
                            div(class="btns")
                                router-link(:to="`/services/${service.id}`" class="details-btn" :aria-label="service.title") 
                                    i(class="bi bi-chevron-right")
//services
</template>

<script>
export default {
	name: "ServicesPage",
    props: {
        servicesData: Array
    },
};
</script>
