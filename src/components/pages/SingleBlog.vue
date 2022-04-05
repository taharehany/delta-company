<template lang="pug">
//single blog
section(class="single-blog")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-8")
                    div(class="blog-box")
                        div(class="image")
                            img(class="img-fluid" v-lazy="singleBlogData.image" :alt="singleBlogData.image_alt")
                        div(class="details")
                            div(class="title")
                                h3 {{ singleBlogData.title }}
                            div(v-html="singleBlogData.description" class="text")
                div(class="col-lg-4")
                    div(class="side-widget")
                        div(class="other-blogs")
                            div(class="title")
                                h4 جميع المقالات
                            ul 
                                li(v-for="blog in allBlogsData") 
                                    router-link(:to="`/blogs/${blog.id}`") {{ blog.title }}
                        div(class="help")
                            div(class="title")
                                h4 كيف يمكننا مساعدتك؟
                            router-link(to="/contact" class="btn") تواصل معنا
//single blog 
</template>

<script>
export default {
	name: "SingleBlogPage",
	props: {
		singleBlogData: Object,
		allBlogsData: Array,
	},
};
</script>
