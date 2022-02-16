<template>
	<Header />
	<!--breadcrumb-->
	<nav class="main-breadcrumb" v-if="allAboutApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allAboutApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>من نحن</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">من نحن</li>
				</ol>
			</nav>
		</div>
	</nav>
	<!--breadcrumb-->

	<section id="medi-app-about" class="medi-app-about-section medi-app-about-page" v-if="allAboutApiData.data">
		<div class="container">
			<div class="medi-app-about-content">
				<div class="medi-app-about-img-wrap">
					<div class="row">
						<div class="col-lg-6 col-md-8">
							<div class="d-inline-flex">
								<div class="medi-app-hover-img medi-app-about-img1 position-relative" data-aos="fade-left">
									<img :src="allAboutApiData.data.image_1" :alt="allAboutApiData.data.image_alt_1" />
								</div>
								<div class="medi-app-hover-img medi-app-about-img2 position-relative" data-aos="fade-left" data-aos-delay="500">
									<img :src="allAboutApiData.data.image_2" :alt="allAboutApiData.data.image_alt_2" />
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-4 pt-5">
							<div class="medi-app-about-exp app-medi-headline" data-aos="fade-left">
								<h2>{{ allAboutApiData.data.years_experience }}</h2>
								<span class="app-medi-title2 text-uppercase">سنوات من الخبرة</span>
							</div>
							<div class="medi-app-about-text app-medi-headline pera-content" data-aos="fade-left">
								<h2>{{ allAboutApiData.data.title }}</h2>
								<!-- <div class="desc" v-html="allAboutApiData.data.description"></div> -->
							</div>
						</div>
					</div>
				</div>
				<div class="medi-app-about-text-wrap">
					<div class="medi-app-about-text app-medi-headline pera-content" data-aos="fade-up" data-aos-delay="500">
						<!-- <h2>{{ allAboutApiData.data.title }}</h2> -->
						<div class="desc" v-html="allAboutApiData.data.description"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<Footer />
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";
// import { ref } from "vue";

// const loadAboutData = async () => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 name: "taha"
//             })
//         }, 2000)
//     })
// }

export default {
	name: "About",
	components: {
		Header,
		Footer,
	},
	methods: {
		...mapActions(["getAboutApiData"]),
	},
	computed: mapGetters(["allAboutApiData"]),
	created() {
		this.getAboutApiData();
		// console.log(aboutData);
	},
	mounted() {
		window.scrollTo(0, 0);
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || "طريق العلاج | من نحن";
			},
		},
	},
	// async setup() {
	// 	const aboutData = ref(await loadAboutData());

	// 	return { aboutData };
	// },
};
</script>

<style lang="scss" scoped>
.medi-app-about-page {
    .medi-app-about-img-wrap {
        // margin-inline-end: 50px;
        margin-bottom: 25px;
    }
    .medi-app-about-exp {
        display: inline-block;
        padding-top: 5px;
        // margin-inline-start: 50px;
    }
    .medi-app-about-text {
        p {
            overflow: visible;
            text-overflow: unset;
            -webkit-box-orient: unset;
            display: block;
            margin-bottom: 25px;
        }
        h3 {
            color: #000;
            margin-bottom: 10px;
        }
    }
}
</style>