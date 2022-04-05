<template lang="pug">
//blogs
section(class="blogs")
    div(class="container")
        div(class="main-title")
            h2 المقالات
        div(class="content")
            div(class="row")
                div(class="col-lg-4 col-md-6 box" v-for="blog in blogsData.slice(0, 3)" :key="blog.id")
                    div(class="blogs-box" data-aos="fade-up" :data-aos-delay="blog.id*50")
                        router-link(:to="`/blogs/${blog.id}`") 
                            div(class="image")
                                img(class="img-fluid" v-lazy="blog.image" :alt="blog.image_alt")
                                ul(class="meta")
                                    li(class="date")
                                        i(class="bi bi-calendar")
                                        | {{ blog.created_at }}
                        div(class="details")
                            div(class="title")
                                router-link(:to="`/blogs/${blog.id}`") {{ blog.title }}
                            //- div(v-html="blog.description.substring(0, 150)")
            div(class="blogs-btn")
                div(class="outer-btn")
                    router-link(to="/blogs" class="btn")
                        span المزيد من المقالات
//blogs
</template>

<script>
export default {
	name: "Blogs",
	props: {
		blogsData: Array
	},
    computed: {
        description () {
            // return this.blogsData.map(element => element.description.substring(0, 100))
        }
    }
};
</script>
