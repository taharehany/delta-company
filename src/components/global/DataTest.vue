<template>{{ testData }}</template>

<script>
const getTestData = async () => {
	await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
	const testData = {
		name: "this is test name",
		body: "this is test body",
	};
	return testData;
};

export default {
	async setup() {
		const testData = await getTestData();
		return { testData };
	},
};
</script>