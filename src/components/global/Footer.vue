<template>
	<!-- Start of footer section -->
	<footer id="app-medi-footer" class="app-medi-footer position-relative" v-if="allSettingsApiData.data" :style="{ backgroundImage: `url(${allSettingsApiData.data.background})`}">
		<div class="medi-app-background_overlay"></div>
		<div class="container">
			<div class="medi-app-footer-widget-content">
				<div class="row">
					<div class="col-lg-5">
						<div class="app-medi-footer-widget app-medi-headline pera-content ul-li-block">
							<div class="app-medi-logo-widget">
								<router-link class="medi-app-footer-logo" to="/" exact>
									<!-- <img :src="allSettingsApiData.data.logo" :alt="allSettingsApiData.data.website_title" /> -->
									<img src="@/assets/img/medical/logo/footer-logo.png" :alt="allSettingsApiData.data.website_title" />
								</router-link>
								<p>{{ allSettingsApiData.data.footer_description }}</p>
								<div class="app-medi-footer-social">
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
						</div>
					</div>
					<div class="col-lg-3">
						<div class="app-medi-footer-widget app-medi-headline pera-content ul-li-block">
							<div class="app-medi-menu-widget">
								<h3 class="medi-app-widget-title">روابط سريعة</h3>
								<ul>
									<li>
										<router-link to="/">الرئيسية</router-link>
									</li>
									<li>
										<router-link to="/about">من نحن</router-link>
									</li>
									<li>
										<router-link to="/team">فريق العمل</router-link>
									</li>
									<li>
										<router-link to="/services">أقسام المركز</router-link>
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
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="app-medi-footer-widget app-medi-headline pera-content ul-li-block">
							<div class="app-medi-contact-widget">
								<div class="contact-widget-wrap">
									<div class="cw-widget-icon float-right ml-3">
										<img src="@/assets/img/medical/cw-icon1.png" alt />
									</div>
									<div class="cw-widget-text app-medi-headline">
										<h3>
											<a :href="'tel:'+allSettingsApiData.data.phone">{{ allSettingsApiData.data.phone }}</a>
										</h3>
										<span>كلمنا على مدار الساعة</span>
									</div>
								</div>
								<div class="contact-widget-wrap">
									<div class="cw-widget-icon float-right ml-3">
										<img src="@/assets/img/medical/cw-icon3.png" alt />
									</div>
									<div class="cw-widget-text app-medi-headline">
										<h3>
											<a target="_blank" :href="'https://wa.me/966'+allSettingsApiData.data.whatsapp">{{ allSettingsApiData.data.whatsapp }}</a>
										</h3>
										<span>واتساب</span>
									</div>
								</div>
								<div class="contact-widget-wrap">
									<div class="cw-widget-icon float-right ml-3">
										<img src="@/assets/img/medical/cw-icon2.png" alt />
									</div>
									<div class="cw-widget-text app-medi-headline">
										<h3>
											<a :href="'mailto:'+allSettingsApiData.data.email">{{ allSettingsApiData.data.email }}</a>
										</h3>
										<span>راسلنا</span>
									</div>
								</div>
								<div class="cw-widget-btn text-center">
									<router-link to="/contact">
										تواصل معنا الآن
										<span>
											<i class="fas fa-arrow-left"></i>
										</span>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="app-medi-footer-copyright">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="app-medi-copyright-text text-center">
							<span>
								جميع الحقوق محفوظة &copy; 2022 مجمع طريق العلاج الطبي | 
								تصميم <a href="https://marwan.tech/" target="_blank"> مروان  جروب لتقنية المعلومات</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- End of footer section -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Footer",
	methods: {
		...mapActions(["getSettingsApiData"]),
	},
	computed: mapGetters(["allSettingsApiData"]),
	created() {
		this.getSettingsApiData();
	},
};
</script>
