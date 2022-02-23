<template>
	<Header />
	<!--breadcrumb-->
	<nav class="main-breadcrumb" v-if="allTeamApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allTeamApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>أطباؤنا</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">أطباؤنا</li>
				</ol>
			</nav>
		</div>
	</nav>
	<!--breadcrumb-->

	<div v-if="this.$store.state.loading" class="inside-loading">
		<i class="fas fa-cog fa-spin"></i>
        <span>جاري التحميل..</span>
	</div>

	<!-- Start of Team section -->
	<section id="app-medi-team" class="app-medi-team-section" v-if="!this.$store.state.loading">
		<div class="container">
			<div class="medi-app-team-content">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6 box" v-for="team in allTeamApiData.data" :key="team.id">
						<div class="app-medi-team-innerbox" data-aos="fade-up" :data-aos-delay="team.id*40">
							<div class="app-medi-team-img position-relative">
								<router-link :to="`/team/${team.id}`">
									<img :src="team.image" :alt="team.image_alt" class="img-fluid doc" />
								</router-link>
								<div class="app-medi-team-icon">
									<img src="@/assets/img/medical/team-icon.svg" class="img-fluid" alt />
								</div>
							</div>
							<div class="app-medi-text-text app-medi-headline">
								<h3>
									<router-link :to="`/team/${team.id}`">{{ team.name_ar }}</router-link>
								</h3>
								<span>{{ team.job_title_ar }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of Team section -->
	<Footer />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";

export default {
	name: "Team",
	components: {
		Header,
		Footer,
	},
	methods: {
		...mapActions(["getTeamApiData"]),
	},
	computed: mapGetters(["allTeamApiData"]),
	created() {
		this.getTeamApiData();
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || "طريق العلاج | فريق العمل";
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.app-medi-team-innerbox {
    margin-bottom: 30px;

    .app-medi-team-img {
        border: 1px solid #f5f5f5;
        img.doc {
            height: 450px;
        }
    }
    .app-medi-text-text {
        height: 120px;
        
        h3 {
            padding-top: 0;
            padding-bottom: 5px;
        }
    }
}
h1 {
    font-size: 150px;
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
