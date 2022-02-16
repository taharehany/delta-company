<template>
	<Suspense>
		<template #default>
			<Team />
		</template>
		<template #fallback>
			<!-- <div id="app-medi-preloader"></div> -->
            <h1>looding....</h1>
		</template>
	</Suspense>
</template>

<script>
import Team from "@/components/pages/Team.vue";

export default {
	name: "TeamPage",
	components: {
		Team,
	},
};
</script>

<style scoped>
h1 {
    font-size: 150px;
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

