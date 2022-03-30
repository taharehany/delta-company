<template lang="pug">
LoadingData(v-if="loading")
SingleBlog(:singleBlogData="singleBlog" :allBlogsData="allBlogs" v-if="singleBlog && !loading")
</template>

<script>
import LoadingData from "@/components/global/LoadingData.vue";
import SingleBlog from "@/components/pages/SingleBlog.vue";
import axios from "axios";

export default {
	name: "SingleBlogView",
	components: {
        LoadingData,
		SingleBlog,
	},
	data() {
		return {
            singleBlog: null,
			allBlogs: null,
			loading: true,
		};
	},
	methods: {
		async initData() {
			this.loading = true;
			await axios
				.get(`blogs/${this.$route.params.id}`, {
                    headers: {
                        "Accept-Language": this.$store.state.locale,
                    }
                })
				.then((response) => {
					this.singleBlog = response.data.data.blog;
					this.allBlogs = response.data.data.all_blogs;
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
                if (this.$i18n.locale == "en") {
                    document.title = to.meta.title || "Aldigailbi & Altalhi | Single blog";
                } else {
                    document.title = to.meta.title || "الدغيلبي والطلحي | صفحة المقال";
                }
			},
		},
	},
};
</script>
