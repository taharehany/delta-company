<template lang="pug">
//team
section(class="team")
    div(class="container")
        div(class="content")
            div(class="row")
                div(class="col-lg-3" v-for="person in teamData" :key="person.id")
                    div(class="team-box")
                        div(class="image")
                            img(class="img-fluid" v-lazy="person.image" :alt="person.image_alt")
                        div(class="details")
                            p(class="job-title") {{ person.job_description }}
                            div(class="name") {{ person.name }}
//team
</template>

<script>
export default {
	name: "TeamPage",
    props: {
        teamData: Array
    },
};
</script>
