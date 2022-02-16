<template>
	<!-- Start of Team section -->
	<section id="app-medi-team" class="app-medi-team-section" v-if="teamData">
		<div class="container">
			<div class="medi-app-section-title app-medi-headline text-center position-relative">
				<span class="title-watermark position-absolute">طريق العلاج</span>
				<span class="title-tag text-uppercase">فريق العمل</span>
				<h2>أطباء المركز</h2>
			</div>
			<div class="medi-app-team-content">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 box" v-for="team in teamData.team.slice(0, 4)" :key="team.id">
						<div class="app-medi-team-innerbox" data-aos="fade-up" :data-aos-delay="team.id*100">
							<div class="app-medi-team-img position-relative">
								<router-link :to="`/team/${team.id}`">
									<img :src="team.image" :alt="team.image_alt" class="doc img-fluid" />
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
				<div class="more">
					<router-link to="/team">
						تعرف على المزيد
						<span>
							<i class="fas fa-arrow-left"></i>
						</span>
					</router-link>
				</div>
			</div>
		</div>
	</section>
	<!-- End of Team section -->
</template>

<script>
export default {
	name: "Team",
	props: { teamData: Array },
};
</script>