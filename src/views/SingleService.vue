<template>
	<Header />
	<nav class="main-breadcrumb" v-if="allSettingsApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allSettingsApiData.breadcrumb})` }">
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

	<div v-if="loading" class="inside-loading">
		<i class="fas fa-cog fa-spin"></i>
		<span>جاري التحميل..</span>
	</div>

	<!-- Start of service section -->
	<section id="medi-app-service" class="medi-app-service-section medi-app-service-single" dir="ltr" v-if="service && !loading">
		<div class="container">
			<div id="app-medi-service-slider" class="medi-app-service-content">
				<div class="carousel__item">
					<div class="medi-app-service-innerbox">
						<div class="medi-app-service-icon-title clearfix">
							<div class="medi-app-service-icon">
								<img :src="service.image" class="img-fluid" alt />
							</div>
							<div class="app-medi-service-title app-medi-headline">
								<h3>{{ service.title }}</h3>
							</div>
						</div>
						<div class="app-medi-service-text pera-content ul-li-block" v-html="service.description"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of service section -->
	<Footer />
</template>

<script>
import axios from "axios";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "SingleService",
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			service: null,
			loading: true,
		};
	},
	methods: {
		...mapActions(["getSettingsApiData"]),
		async initData() {
			await axios
				.get(`services/${this.$route.params.id}`)
				.then((result) => {
					this.service = result.data.data;
					this.loading = false;
				});
		},
	},
	computed: mapGetters(["allSettingsApiData"]),
	async created() {
		this.getSettingsApiData();

		this.initData();

		this.$watch(
			() => this.$route.params,
			async () => {
				this.initData();
			}
		);
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || "طريق العلاج | خدماتنا";
			},
		},
	},
};
</script>
