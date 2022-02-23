<template>
	<Header />
	<nav class="main-breadcrumb" v-if="allSettingsApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allSettingsApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>فريق العمل</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">فريق العمل</li>
				</ol>
			</nav>
		</div>
	</nav>
	<!--breadcrumb-->

	<div v-if="loading" class="inside-loading">
		<i class="fas fa-cog fa-spin"></i>
		<span>جاري التحميل..</span>
	</div>

	<!-- Start of Team section -->
	<section id="app-medi-team" class="app-medi-team-section app-medi-team-single" v-if="!loading">
		<div class="container">
			<div class="medi-app-team-content">
				<div class="app-medi-team-innerbox">
					<div class="row">
						<div class="col-lg-5">
							<div class="app-medi-team-img position-relative">
								<img :src="team.image" :alt="team.image_alt" class="doctor" />
								<div class="app-medi-team-icon">
									<img src="@/assets/img/medical/team-icon.svg" class="img-fluid" alt />
								</div>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="app-medi-text-text app-medi-headline">
								<h3>{{ team.name_ar }}</h3>
								<span>{{ team.job_title_ar }}</span>
								<h3>{{ team.name_en }}</h3>
								<span>{{ team.job_title_en }}</span>
								<hr style="height: 1px" />
								<div class="description mt-3" v-html="team.description"></div>
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
import axios from "axios";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "SingleTeam",
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			team: null,
            loading: true,
		};
	},
	methods: {
		...mapActions(["storeRatingFormData", "getSettingsApiData"]),
	},
	mounted() {
		axios
			.get(`team/${this.$route.params.id}`)
			.then((result) => {
				this.team = result.data.data;
                this.loading = false;
			})
			.catch((error) => {
				console.log(error);
			});
	},
	computed: mapGetters(["allSettingsApiData"]),
	created() {
		this.getSettingsApiData();
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

<style lang="scss">
.app-medi-team-single {
    .app-medi-team-innerbox {
        .app-medi-text-text {
            // background-color: #fcfcfc;
            height: auto;
            border: none;
         }
        &:hover {
            .app-medi-text-text {
                box-shadow: none;
            }
        }
        .app-medi-team-img {
            // max-width: 350px;
            height: auto;
            border: 2px solid #fff;
    
            img.doctor {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }
    }
}
</style>