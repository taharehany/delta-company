<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" :style="{backgroundImage: `url(${breadcrumb})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2(v-if="pageTitle") {{ $t(`${pageTitle}`) }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page" v-if="pageTitle") {{ $t(`${pageTitle}`) }}
//breadcrumb
</template>

<script>
export default {
	name: "Breadcrumb",
	props: ["breadcrumb"],
    data() {
		return {
			pageTitle: null,
		}
	},
    watch: {
		$route: {
			immediate: true,
			handler(to) {
				this.pageTitle = to.name;
			},
		},
	},
};
</script>
