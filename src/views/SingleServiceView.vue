<template lang="pug">
LoadingData(v-if="loading")
SingleService(:singleServiceData="singleService" :allServicesData="allServices" v-if="singleService && !loading")
</template>

<script>   
import LoadingData from "@/components/global/LoadingData.vue";
import SingleService from "@/components/pages/SingleService.vue";
import axios from "axios";

export default {
	name: "SingleServiceView",
	components: {
        LoadingData,
		SingleService,
	},
	data() {
		return {
			singleService: null,
			allServices: null,
			loading: true,
		};
	},
	methods: {
		async initData() {
			this.loading = true;
			await axios
				.get(`services/${this.$route.params.id}`, {
                    headers: {
                        "Accept-Language": this.$store.state.locale,
                    }
                })
				.then((response) => {
					this.singleService = response.data.data.service;
					this.allServices = response.data.data.all_services;
					this.loading = false;
				});
		},
	},
    async created() {
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
			handler(to) {
                document.title = to.meta.title || "عبدالله الخنفري | صفحة الخدمة";
			},
		},
	},
};
</script>
