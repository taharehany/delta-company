<template lang="pug">
//toast part
div(class="position-fixed toast-part")
    div(class="toast align-items-center text-white border-0" :class="{'show': showIfValue}, success ? 'bg-success' : 'bg-danger'"  role="alert", aria-live="assertive", aria-atomic="true")
        div(class="toast-content d-flex")
            div(class="toast-body") {{ message }}
            button(type="button", class="btn-close btn-close-white", data-bs-dismiss="toast", aria-label="Close")
//toast part
</template>

<script>
export default {
	name: "Toast",
    props: ["showIfValue", "message", "success"],
};
</script>
