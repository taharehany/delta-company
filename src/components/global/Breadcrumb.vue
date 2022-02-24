<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" style="background-image:url('images/bgs/breadcrumb.jpg')")
    div(class="container")
        div(class="breadcrumb-title")
            h2 about
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    a(href="index.html") Home
                li(class="breadcrumb-item active", aria-current="page") about
//breadcrumb
</template>

<script>
export default {
	name: "Breadcrumb",
};
</script>
