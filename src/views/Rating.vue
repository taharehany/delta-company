<template>
	<Header />

	<nav class="main-breadcrumb" v-if="allSettingsApiData" aria-label="breadcrumb" :style="{ backgroundImage: `url(${allSettingsApiData.breadcrumb})` }">
		<div class="container">
			<div class="breadcrumb-title">
				<h2>قيم تجربتك</h2>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">الرئيسية</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">قيم تجربتك</li>
				</ol>
			</nav>
		</div>
	</nav>

	<section class="medi-contact-inner-section inner-page-padding rating">
		<div class="container">
			<div class="content">
				<div class="alert alert-warning alert-danger fade show" role="alert" v-if="notsent">
					<span>يوجد خطأ، تفقد جميع الحقول (لا يمكن ترك حقول فارغة)</span>
				</div>
				<div class="medi-app-cta-form-wrap app-medi-headline pera-content wow fadeFromRight" data-wow-delay="100ms" data-wow-duration="1000ms">
					<form @submit="onSubmitForm" ref="rating_form" enctype="multipart/form-data" action>
						<div class="app-medi-cta-form-input">
							<div class="row">
								<div class="col-12">
									<div class="rating">
										<div class="form-check">
											<input class="form-check-input" type="radio" name="rate" value="very_glad" v-model="ratingDataFields.rate" id="very_glad" />
											<label class="face" for="very_glad">
												<i class="fas fa-grin-beam"></i>
												راض جدا
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="rate" value="glad" v-model="ratingDataFields.rate" id="glad" />
											<label class="face" for="glad">
												<i class="fas fa-smile"></i>
												راض
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="rate" value="sad" v-model="ratingDataFields.rate" id="sad" />
											<label class="face" for="sad">
												<i class="fas fa-frown"></i>
												مستاء
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="rate" value="very_sad" v-model="ratingDataFields.rate" id="very_sad" />
											<label class="face" for="very_sad">
												<i class="fas fa-angry"></i>
												مستاء جدا
											</label>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="far fa-user"></i>
										</span>
										<input type="text" v-bind:class="{ 'invalid': notsent }" name="name" v-model="ratingDataFields.name" placeholder="الاسم *" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="fas fa-phone"></i>
										</span>
										<input type="number" name="phone" v-bind:class="{ 'invalid': notsent }" v-model="ratingDataFields.phone" placeholder="الهاتف *" />
									</div>
								</div>
								<div class="col-lg-12">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="far fa-envelope"></i>
										</span>
										<input type="email" name="email" v-bind:class="{ 'invalid': notsent }" v-model="ratingDataFields.email" placeholder="البريد الإلكتروني *" />
									</div>
								</div>
								<div class="col-lg-12">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="far fa-edit"></i>
										</span>
										<input type="text" name="subject" v-bind:class="{ 'invalid': notsent }" v-model="ratingDataFields.subject" placeholder="عنوان الرسالة *" />
									</div>
								</div>
								<div class="col-lg-12">
									<div class="app-medi-cta-input position-relative">
										<textarea name="message" v-bind:class="{ 'invalid': notsent }" v-model="ratingDataFields.message" cols="30" rows="6" placeholder="الرسالة *"></textarea>
									</div>
								</div>
							</div>
						</div>
						<vue-recaptcha @verify="onVerify" ref="recaptcha" sitekey="6Ldo0EoeAAAAAIXsn0vVENfNRJZvKKreBs9FHpDy"></vue-recaptcha>
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
		</div>
	</section>

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
			ratingDataFields: {
				name: null,
				rate: null,
				email: null,
				phone: null,
				subject: null,
				message: null,
			},
		};
	},
	methods: {
		...mapActions(["storeRatingFormData", "getSettingsApiData"]),
		onSubmitForm(e) {
			e.preventDefault();

			this.sending = true;

			// console.log(this.ratingDataFields);
			if (this.verifiedRecapcha == true) {
				let ratingDataFieldsArr = Object.values(this.ratingDataFields);
				for (
					let index = 0;
					index < ratingDataFieldsArr.length;
					index++
				) {
					var field = ratingDataFieldsArr[index];
				}
				if (field == null) {
					this.notsent = true;
					this.sent = false;
				} else {
					this.storeRatingFormData(this.ratingDataFields).then(() => {
						if (this.$store.state.ratingFormSent == true) {
							e.target.reset();
							this.notsent = false;
							this.sent = true;
                            this.sending = false;
							this.ratingDataFields.name = null;
							this.ratingDataFields.rate = null;
							this.ratingDataFields.email = null;
							this.ratingDataFields.phone = null;
							this.ratingDataFields.subject = null;
							this.ratingDataFields.message = null;
						} else {
							console.log("fields is empty");
						}
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
				document.title = to.meta.title || "طريق العلاج | قيم تجربتك";
			},
		},
	},
};
</script>

<style lang="scss" scoped>
    
</style>