<template>
    <!-- Start of App medi cta section -->
    <section id="app-medi-cta-2" class="app-medi-cta-section-2" v-if="callToActionData">
        <div class="container">
            <div class="app-medi-cta-content-2">
                <div class="app-medi-cta-call" data-aos="fade-left">
                    <div class="app-medi-cta-icon">
                        <img src="@/assets/img/medical/ct-icon1.png" alt="">
                    </div>
                    <div class="app-medi-cta-text-2 app-medi-headline">
                        <h4>يسعدنا تقديم المساعدة في أي وقت</h4>
                        <span class="phone"><a :href="'tel:'+callToActionData.call_to_action.phone">{{ callToActionData.call_to_action.phone }}</a></span>
                    </div>
                </div>
                <div class="app-medi-cta-btn text-center" data-aos="fade-right">
                    <a :href="'tel:'+callToActionData.call_to_action.phone">كلمنا الآن</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End of App medi cta section -->
</template>

<script>
export default {
    name: "CallToAction",
    props: { callToActionData: Array },
}
</script>