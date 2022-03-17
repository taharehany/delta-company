<template lang="pug">
div(class="inside-loading")
    div(class="icons")
        i(class="bi bi-gear a")
        i(class="bi bi-gear b")
</template>

<script>
export default {
	name: "LoadingData",
    props: {
        aboutApi: Array
    }
};
</script>
