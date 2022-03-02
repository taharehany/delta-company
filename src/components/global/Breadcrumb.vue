<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" style="background-image:url('images/bgs/breadcrumb.jpg')")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 about {{ currentProperties }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) Home
                li(class="breadcrumb-item active", aria-current="page") about
//breadcrumb
</template>

<script>
export default {
	name: "Breadcrumb",
	props: {
        currentProperties: Object
    }
};
</script>
