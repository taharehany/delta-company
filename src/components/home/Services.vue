<template lang="pug">
//services
section(class="services" :style="cssProps")
    div(class="container")
        div(class="main-title")
            //- span(class="top-title") الخدمات
            h2 الخدمات
        div(class="content")
            div(class="row")
                div(class="col-lg-4 col-md-6 box" v-for="service in servicesData.slice(0, 6)" :key="service.id")
                    div(class="service-box" data-aos="fade-up" :data-aos-delay="service.id*50")
                        div(class="inner-box")
                            router-link(:to="`/services/${service.id}`") 
                                div(class="image")
                                    img(class="img-fluid" v-lazy="service.image" :alt="service.image_alt")
                            div(class="details")
                                div(class="title")
                                    router-link(:to="`/services/${service.id}`") {{ service.title.substring(0, 20) }}
                                div(v-html="service.description.substring(0, 130)+'...'")
                                div(class="btns")
                                    router-link(:to="`/services/${service.id}`" class="details-btn" :aria-label="service.title") معرفة المزيد
            div(class="services-btn")
                div(class="outer-btn")
                    router-link(to="/services" class="btn")
                        span المزيد من الخدمات
//services
</template>

<script>
export default {
	name: "Services",
    props: {
        servicesData: Array
    },
    data() {
      return {
        cssProps: {
          backgroundImage: `url(${require('@/assets/images/bgs/serv.jpg')})`
        }
      }
    }
};
</script>
