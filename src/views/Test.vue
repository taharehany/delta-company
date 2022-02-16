<template>
	<Suspense>
		<template #default>
			<DataTest />
		</template>
		<template #fallback><div id="app-medi-preloader"></div></template>
	</Suspense>
</template>


<script>
import DataTest from "@/components/global/DataTest.vue";

export default {
	components: {
		DataTest,
	},
};
</script>