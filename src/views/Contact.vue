<template>
	<Header />
	<!--breadcrumb-->
	<nav class="main-breadcrumb" v-if="allSettingsApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allSettingsApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>تواصل معنا</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">تواصل معنا</li>
				</ol>
			</nav>
		</div>
	</nav>
	<!--breadcrumb-->

	<!-- contact -->
	<section class="medi-contact-inner-section inner-page-padding contact">
		<div class="container">
			<div class="content">
				<div class="row">
					<div class="col-md-8">
						<div class="alert alert-warning alert-danger fade show" role="alert" v-if="notsent">
							<span>يوجد خطأ، تفقد جميع الحقول (لا يمكن ترك حقول فارغة)</span>
						</div>
						<div class="medi-app-cta-form-wrap app-medi-headline pera-content wow fadeFromRight" data-wow-delay="100ms" data-wow-duration="1000ms">
							<form @submit="onSubmitForm" ref="main_form" enctype="multipart/form-data" action>
								<div class="app-medi-cta-form-input">
									<div class="row">
										<div class="col-lg-6">
											<div class="app-medi-cta-input position-relative">
												<span class="icon-bg position-absolute">
													<i class="far fa-user"></i>
												</span>
												<input type="text" v-bind:class="{ 'invalid': notsent }" name="name" v-model="formDataFields.name" placeholder="الاسم *" />
											</div>
										</div>
										<div class="col-lg-6">
											<div class="app-medi-cta-input position-relative">
												<span class="icon-bg position-absolute">
													<i class="fas fa-phone"></i>
												</span>
												<input type="number" name="phone" v-bind:class="{ 'invalid': notsent }" v-model="formDataFields.phone" placeholder="الهاتف *" />
											</div>
										</div>
										<div class="col-lg-12">
											<div class="app-medi-cta-input position-relative">
												<span class="icon-bg position-absolute">
													<i class="far fa-envelope"></i>
												</span>
												<input type="email" name="email" v-bind:class="{ 'invalid': notsent }" v-model="formDataFields.email" placeholder="البريد الإلكتروني *" />
											</div>
										</div>
										<div class="col-lg-12">
											<div class="app-medi-cta-input position-relative">
												<textarea name="message" v-bind:class="{ 'invalid': notsent }" v-model="formDataFields.message" cols="30" rows="6" placeholder="الرسالة *"></textarea>
											</div>
										</div>
									</div>
								</div>
								<vue-recaptcha @verify="onVerify" @expired="onCaptchaExpired" ref="recaptcha" sitekey="6Ldo0EoeAAAAAIXsn0vVENfNRJZvKKreBs9FHpDy"></vue-recaptcha>
								<button type="submit">
									إرسال
									<span>
										<i v-if="!sending" class="fas fa-arrow-left"></i>
										<i v-if="sending" class="fas fa-sync fa-spin"></i>
									</span>
								</button>
							</form>
						</div>
						<div class="alert alert-success mt-2" role="alert" v-if="sent">
							<h4 class="alert-heading">تم الإرسال بنجاح</h4>
							<hr />
							<p>تم استلام رسالتك بنجاح وسيتم التواصل معك في أقرب وقت، شكرا لك</p>
						</div>
					</div>
					<div class="col-md-4" v-if="allSettingsApiData.data">
						<div class="icon-box section-b2">
							<div class="icon-box-icon">
								<i class="far fa-envelope"></i>
							</div>
							<div class="icon-box-content table-cell">
								<div class="icon-box-title">
									<h4 class="icon-title">اتصل بنا</h4>
								</div>
								<div class="icon-box-content">
									<p class="mb-1">
										<a :href="'mailto:'+allSettingsApiData.data.email">بريد إلكتروني: contact@example.com</a>
									</p>
									<p class="mb-1">
										<a :href="'tel:'+allSettingsApiData.data.phone">هاتف: {{ allSettingsApiData.data.phone }}</a>
									</p>
								</div>
							</div>
						</div>
						<div class="icon-box section-b2">
							<div class="icon-box-icon">
								<i class="fab fa-whatsapp"></i>
							</div>
							<div class="icon-box-content table-cell">
								<div class="icon-box-title">
									<h4 class="icon-title">واتساب</h4>
								</div>
								<div class="icon-box-content">
									<p class="mb-1">
										<a target="_blank" :href="'https://wa.me/966'+allSettingsApiData.data.whatsapp">{{ allSettingsApiData.data.whatsapp }}</a>
									</p>
								</div>
							</div>
						</div>
						<div class="icon-box section-b2">
							<div class="icon-box-icon">
								<i class="fas fa-search-location"></i>
							</div>
							<div class="icon-box-content table-cell">
								<div class="icon-box-title">
									<h4 class="icon-title">الموقع</h4>
								</div>
								<div class="icon-box-content">
									<p class="mb-1">المملكة العربية السعودية</p>
								</div>
							</div>
						</div>
						<div class="icon-box">
							<div class="icon-box-icon">
								<i class="fas fa-tablet-alt"></i>
							</div>
							<div class="icon-box-content table-cell">
								<div class="icon-box-title">
									<h4 class="icon-title">مواقع التواصل</h4>
								</div>
								<div class="icon-box-content">
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
				</div>
			</div>
		</div>
	</section>

	<section class="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.092041026265!2d46.66308491425043!3d24.5860195622585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1006d6297893%3A0xd8b26c1c556e1bb4!2sTareg+Alelaj+Medical+Center!5e0!3m2!1sen!2ssa!4v1527505554634" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
	</section>
	<!-- contact -->

	<Footer />
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";

export default {
	name: "Contact",
	components: {
		Header,
		Footer,
		VueRecaptcha,
	},
	data() {
		return {
			notsent: false,
			sent: false,
			sending: false,
			verifiedRecapcha: false,
			recapchaCode: "",
			formDataFields: {
				name: null,
				email: null,
				phone: null,
				message: null,
			},
		};
	},
	methods: {
		...mapActions(["storeFormData", "getSettingsApiData"]),
		onSubmitForm(e) {
			e.preventDefault();

			this.sending = true;

			if (this.verifiedRecapcha == true) {
				let formDataFieldsArr = Object.values(this.formDataFields);
				for (let index = 0; index < formDataFieldsArr.length; index++) {
					var field = formDataFieldsArr[index];
				}
				if (field == null) {
					this.notsent = true;
					this.sent = false;
				} else {
					this.storeFormData(this.formDataFields)
						.then(() => {
							if (this.$store.state.formSent == true) {
								e.target.reset();
								this.notsent = false;
								this.sent = true;
								this.sending = false;
								this.onCaptchaExpired();
								this.formDataFields.name = null;
								this.formDataFields.email = null;
								this.formDataFields.phone = null;
								this.formDataFields.message = null;
							} else {
								console.log("fields is empty");
							}
						})
						.catch((err) => {
							// this.loadingPage = false;
                            console.log(err);
						});
				}
			} else {
				if (field == null) {
					this.notsent = true;
					this.sent = false;
					this.sending = false;
				} else {
					this.notsent = false;
					this.sent = true;
				}
			}
		},
		onVerify: function (response) {
			console.log("Verify: " + response);
			this.verifiedRecapcha = true;
			this.recapchaCode = response;
		},
		onCaptchaExpired: function () {
			this.$refs.recaptcha.reset();
		},
	},
	computed: mapGetters(["allSettingsApiData"]),
	created() {
		this.getSettingsApiData();
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.title || "طريق العلاج | تواصل معنا";
			},
		},
	},
};
</script>
