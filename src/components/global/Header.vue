<template>
	<!-- Start of header section -->
	<header id="medi-app-header" class="medi-app-main-header clearfix" v-if="allSettingsApiData.data">
		<div class="medi-app-header-top clearfix">
			<div class="medi-app-header-top-social-login float-left d-flex">
				<div class="medi-app-header-top-social">
					<a :href="allSettingsApiData.data.instagram">
						<i class="fab fa-instagram"></i>
					</a>
					<a :href="allSettingsApiData.data.facebook">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a :href="allSettingsApiData.data.twitter">
						<i class="fab fa-twitter"></i>
					</a>
					<a :href="allSettingsApiData.data.youtube">
						<i class="fab fa-youtube"></i>
					</a>
				</div>
			</div>
			<div class="medi-app-header-top-contact-language d-flex float-left">
				<div class="medi-app-header-top-contact">
					<a :href="'tel:'+allSettingsApiData.data.phone">
						<i class="fas fa-phone"></i>
						{{ allSettingsApiData.data.phone }}
					</a>
					<a :href="'mailto:'+allSettingsApiData.data.email">
						<i class="fas fa-envelope"></i>
						{{ allSettingsApiData.data.email }}
					</a>
				</div>
			</div>
		</div>
		<div class="medi-app-main-menu-wrap position-relative">
			<div class="site-brand-logo">
				<router-link to="/">
					<img :src="allSettingsApiData.data.logo" :alt="allSettingsApiData.data.website_title" />
				</router-link>
			</div>
			<div class="medi-app-side-option d-flex float-left">
				<div class="medi-app-side-btn medi-app-search-btn">
					<img src="@/assets/img/medical/header-icon.svg" class="img-fluid" alt />
				</div>
				<!-- <div class="medi-app-side-btn">
					<span class="medi-app-side-toggle">
						<img src="@/assets/img/medical/header-icon.svg" class="img-fluid" alt />
					</span>
				</div>-->
			</div>
			<div class="medi-app-main-navigation float-right">
				<nav class="medi-app-main-navigation clearfix ul-li">
					<ul id="main-nav" class="navbar-nav text-capitalize">
						<li>
							<router-link to="/" exact>الرئيسية</router-link>
						</li>
						<li>
							<router-link to="/about">من نحن</router-link>
						</li>
						<li>
							<router-link to="/team">فريق العمل</router-link>
						</li>
						<li class="dropdown">
							<router-link to="/services">أقسام المركز</router-link>
							<ul class="dropdown-menu clearfix" v-if="allSettingsApiData.data.dropdown_services">
								<li v-for="service in allSettingsApiData.data.dropdown_services" :key="service.id">
									<router-link :to="`/services/${service.id}`">{{ service.title }}</router-link>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/rating">قيم تجربتك</router-link>
						</li>
						<li>
							<router-link to="/booking">حجز موعد</router-link>
						</li>
						<li>
							<router-link to="/contact">تواصل معنا</router-link>
						</li>
					</ul>
				</nav>
			</div>
			<!-- Desktop Menu -->
			<div class="app-medi-mobile_menu position-relative">
				<div class="app-medi-mobile_menu_button app-medi-open_mobile_menu" v-on:click="ShowMenu()">
					<i class="fas fa-bars"></i>
				</div>
				<div class="app-medi-mobile_menu_wrap" v-bind:class="{  mobile_menu_on : mobile}">
					<div class="mobile_menu_overlay app-medi-open_mobile_menu"></div>
					<div class="app-medi-mobile_menu_content">
						<div class="app-medi-mobile_menu_close app-medi-open_mobile_menu" v-on:click="hideMenu()">
							<i class="fas fa-times"></i>
						</div>
						<div class="m-brand-logo text-center">
							<router-link to="/">
								<img :src="allSettingsApiData.data.logo" :alt="allSettingsApiData.data.website_title" />
							</router-link>
						</div>
						<nav class="app-medi-mobile-main-navigation clearfix ul-li">
							<ul id="m-main-nav" class="navbar-nav text-capitalize clearfix">
								<li>
									<router-link to="/" exact>الرئيسية</router-link>
								</li>
								<li>
									<router-link to="/about">من نحن</router-link>
								</li>
								<li>
									<router-link to="/team">فريق العمل</router-link>
								</li>
								<li class="dropdown">
									<router-link to="/services">أقسام المركز</router-link>
									<ul class="dropdown-menu clearfix" v-if="allSettingsApiData.data.dropdown_services">
										<li v-for="service in allSettingsApiData.data.dropdown_services" :key="service.id">
											<router-link :to="`/services/${service.id}`">{{ service.title }}</router-link>
										</li>
									</ul>
                                    <div class="dropdown-btn">
										<span class="fa fa-angle-down"></span>
									</div>
								</li>
								<li>
									<router-link to="/rating">قيم تجربتك</router-link>
								</li>
								<li>
									<router-link to="/booking">حجز موعد</router-link>
								</li>
								<li>
									<router-link to="/contact">تواصل معنا</router-link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Header",
	data: function () {
		return {
			mobile: false,
		};
	},
	methods: {
		...mapActions(["getSettingsApiData"]),
		ShowMenu() {
			this.mobile = true;
		},
		hideMenu() {
			this.mobile = false;
		},
	},
	computed: mapGetters(["allSettingsApiData"]),
	created() {
		this.getSettingsApiData();
		
	},
};
</script>
