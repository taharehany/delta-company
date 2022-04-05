<template lang="pug">
//single services
section(class="single-service")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-8")
                    div(class="service-box")
                        div(class="image")
                            img(class="img-fluid" v-lazy="singleServiceData.image" :alt="singleServiceData.image_alt")
                        div(class="details")
                            div(class="title")
                                h3 {{ singleServiceData.title }}
                            div(class="text")
                                div(v-html="singleServiceData.description")
                div(class="col-lg-4")
                    div(class="side-widget")
                        div(class="other-services")
                            div(class="title")
                                h4 جميع الخدمات
                            ul 
                                li(v-for="service in allServicesData" :key="service.id")
                                    router-link(:to="`/services/${service.id}`") {{ service.title }}
                        div(class="help")
                            div(class="title")
                                h4 كيف يمكننا مساعدتك؟
                            router-link(to="/contact" class="btn") تواصل معنا
//single services   
</template>

<script>
export default {
	name: "SingleServicePage",
	props: {
		singleServiceData: Object,
		allServicesData: Array,
	},
};
</script>
