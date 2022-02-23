<template>
	<div class="wrapper">
		<teleport to="head">
			<meta name="description" :content="allSettingsApiData.meta_description" />
			<meta name="keywords" :content="allSettingsApiData.meta_keywords" />
		</teleport>
		<div id="app-medi-preloader"></div>
		<div class="up">
			<a href="#" class="app-medi-scrollup text-center">
				<i class="fas fa-arrow-up"></i>
			</a>
		</div>
		<router-view />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	mounted() {
		$("#app-medi-preloader").fadeOut("slow", function () {
			// $(this).remove();
		});
	},
	methods: {
		...mapActions(["getSettingsApiData"]),
	},
	computed: mapGetters(["allSettingsApiData"]),
	created() {
		this.getSettingsApiData();
	},
};
</script>

<style lang="scss">
.app-medi-search-body .outer-close {
    background-color: #7e1830 !important;
}
</style>