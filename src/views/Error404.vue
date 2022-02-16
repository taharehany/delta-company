<template>
	<Header />
	<!--breadcrumb-->
	<nav class="main-breadcrumb" v-if="allSettingsApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allSettingsApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>أطباؤنا</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">أطباؤنا</li>
				</ol>
			</nav>
		</div>
	</nav>
	<!--breadcrumb-->

	<div class="error">
		<div class="container">
			<div class="text-center mx-auto">
				<h2>
					4
					<span class="diff-color">0</span> 4
				</h2>
				<p class="lead text-gray-800 mb-4">صفحة غير موجودة</p>
				<router-link to="/" exact class="back btn">الرئيسية</router-link>
			</div>
		</div>
	</div>

	<Footer />
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Error404",
	components: {
		Header,
		Footer,
	},
	methods: {
		...mapActions(["storeFormData", "getSettingsApiData"]),
	},
	computed: mapGetters(["allSettingsApiData"]),
	created() {
		this.getSettingsApiData();
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || "طريق العلاج | 404";
			},
		},
	},
};
</script>

<style lang="scss" scoped>

</style>