<template lang="pug">
LoadingData(v-if="this.$store.state.loading")
Blogs(:blogsData="blogsData.blogs" v-if="blogsData && !this.$store.state.loading")

div(class="custom-pagination blogs" v-if="blogsData && !this.$store.state.loading")
    div(class="container")
        div(class="content")
            pagination(v-model="page" :records="countResults" :per-page="1" @paginate="getResults" :options="options")
</template>

<script>
import LoadingData from "@/components/global/LoadingData.vue";
import Blogs from "@/components/pages/Blogs.vue";
import { mapState } from "vuex";
import Pagination from 'v-pagination-3';
import axios from 'axios';

export default {
	name: "BlogsView",
	components: {
		LoadingData,
		Blogs,
		Pagination,
	},
	data() {
		return {
			page: 1,
			blogsDataPaginated: null,
			countResults: 0,
			options: {
                chunksNavigation: 'scroll',
                chunk: 3,
				hideCount: true,
				edgeNavigation: true,
			},
		}
	},
	computed: {
		...mapState(["blogsData"])
	},
	created() {
		this.$store.dispatch("getBlogsData");
	},
	mounted() {
		this.getResults();
	},
	methods: {
		async getResults(page = 1) {
			await axios.get('blogs?page=' + page, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.$store.state.locale,
                    }
                })
				.then(response => {
					this.blogsDataPaginated = response.data.data;
					this.countResults = response.data.data.countResults;
				});
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "Aldgailbi & Altalhi | Blogs";
				} else {
					document.title = to.meta.title || "الدغيلبي والطلحي | المقالات";
				}
			},
		},
	},
};
</script>
