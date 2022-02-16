<template>
	<Header />
	<!--breadcrumb-->
	<nav class="main-breadcrumb" v-if="allServicesApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allServicesApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>أقسام المركز</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">أقسام المركز</li>
				</ol>
			</nav>
		</div>
	</nav>
	<!--breadcrumb-->

	<!-- Start of service section -->
	<section id="medi-app-service" class="medi-app-service-section">
		<div class="container">
			<div id="app-medi-service-slider" class="medi-app-service-content">
				<div class="row">
					<div class="col-lg-6 col-md-6 box" v-for="service in allServicesApiData.data" :key="service.id">
						<div class="medi-app-service-innerbox" data-aos="fade-up" :data-aos-delay="service.id*50">
							<div class="medi-app-service-icon-title clearfix">
								<div class="medi-app-service-icon">
									<router-link :to="`/services/${service.id}`"><img :src="service.image" class="img-fluid" alt /></router-link>
								</div>
								<div class="app-medi-service-title app-medi-headline">
									<h3>
										<router-link :to="`/services/${service.id}`">{{ service.title }}</router-link>
									</h3>
								</div>
							</div>
							<div class="app-medi-service-text pera-content ul-li-block" v-html="service.description"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of service section -->
	<Footer />
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Services",
	components: {
		Header,
		Footer,
	},
	methods: {
		...mapActions(["getServicesApiData"]),
	},
	computed: mapGetters(["allServicesApiData"]),
	created() {
		this.getServicesApiData();
	},
    watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || 'طريق العلاج | خدماتنا';
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.medi-app-service-section {
    .medi-app-service-innerbox {.app-medi-service-text {
        margin-bottom: 0;
    }}
    .box {
        margin-bottom: 30px;
    }
    .medi-app-service-innerbox {
        height: 100%;
    }
}
</style>