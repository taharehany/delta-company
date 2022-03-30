<template lang="pug">
//blogs
section(class="blogs-in-page")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-4 col-md-6 box" v-for="blog in blogsData" :key="blog.id")
                    div(class="blogs-box" data-aos="fade-up" :data-aos-delay="blog.id*50")
                        router-link(:to="`/blogs/${blog.id}`") 
                            div(class="image")
                                img(class="img-fluid" v-lazy="blog.image" :alt="blog.image_alt")
                        div(class="details")
                            ul(class="meta")
                                li(class="date")
                                    i(class="bi bi-calendar")
                                    | {{ blog.created_at }}
                            div(class="title")
                                router-link(:to="`/blogs/${blog.id}`") {{ blog.title }}
                            div(v-html="description")
//blogs
</template>

<script>
export default {
	name: "BlogsPage",
	props: {
		blogsData: Array
	},
    computed: {
        description () {
            return this.blogsData.map(element => element.description.substring(0, 100))
        }
    }
};
</script>
