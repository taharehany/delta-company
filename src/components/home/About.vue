<template lang="pug">
//about us
section(class="about")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-6 col-12 col")
                    div(class="image-box")
                        div(class="image")
                            img(src="@/assets/images/about.jpg" class="img-fluid" alt="")
                div(class="col-lg-6 col-12 col")
                    div(class="text-box")
                        div(class="corner-top")
                        div(class="corner-bottom")
                        div(class="text")
                            h3 about us
                            p We are a Saudi company that is bent on laying a foundation for the Kingdom’s legacy and documenting it through tracing the legacy roots, decoding it, and grasping its meaning to finally display it in a creative mold and multi-products which embody the splendor, sublimity and depth of Saudi Culture.
                            a(href="about.html" class="btn") more about us
//about us
</template>

<script>
export default {
	name: "About",
};
</script>
