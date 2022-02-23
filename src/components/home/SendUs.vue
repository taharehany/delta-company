<template>
	<!-- Start of CTA section -->
	<section id="medi-app-cta" class="medi-app-cta-section position-relative" :style="{ backgroundImage: `url(${form_homeData.image})` }" v-if="form_homeData">
		<div class="medi-app-background_overlay"></div>
		<div class="container">
			<div class="medi-app-cta-content">
				<div class="clin-title-box">
					<div class="medi-app-cta-text">
						<div class="medi-app-section-title app-medi-headline pera-content position-relative" data-aos="fade-down">
							<h2>{{ form_homeData.form_home.title }}</h2>
							<div class="medi-app-section-desc" v-html="form_homeData.form_home.description"></div>
						</div>
					</div>
				</div>
				<div class="medi-app-cta-form-wrap app-medi-headline pera-content" data-aos="fade-up">
					<form @submit="onSubmitForm" ref="main_form" enctype="multipart/form-data" action>
						<div class="app-medi-cta-form-input">
							<div class="row">
								<div class="col-lg-6">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="far fa-user"></i>
										</span>
										<input type="text" v-bind:class="{ invalid: notsent }" name="name" v-model="formDataFields.name" placeholder="الاسم *" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="far fa-envelope"></i>
										</span>
										<input type="email" name="email" v-bind:class="{ invalid: notsent }" v-model="formDataFields.email" placeholder="البريد الإلكتروني *" />
									</div>
								</div>
								<div class="col-lg-12">
									<div class="app-medi-cta-input position-relative">
										<span class="icon-bg position-absolute">
											<i class="fas fa-phone"></i>
										</span>
										<input type="number" name="phone" v-bind:class="{ invalid: notsent }" v-model="formDataFields.phone" placeholder="الهاتف *" />
									</div>
								</div>
								<div class="col-lg-12">
									<div class="app-medi-cta-input position-relative">
										<textarea name="message" v-bind:class="{ invalid: notsent }" v-model="formDataFields.message" cols="30" rows="6" placeholder="الرسالة *"></textarea>
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
						<div class="alert alert-warning alert-danger fade show mt-4" role="alert" v-if="notsent">
							<strong>يوجد خطأ، تفقد جميع الحقول (لا يمكن ترك حقول فارغة)</strong>
						</div>
					</form>
					<div class="alert alert-success mt-4" role="alert" v-if="sent">
						<h4 class="alert-heading">تم الإرسال بنجاح</h4>
						<hr />
						<p>تم استلام رسالتك بنجاح وسيتم التواصل معك في أقرب وقت، شكرا لك</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of CTA section -->
</template>

<script>
import { mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";

export default {
	name: "SendUs",
	components: {
		VueRecaptcha,
	},
	data() {
		return {
			notsent: false,
			sent: false,
			sending: false,
			verifiedRecapcha: false,
			formDataFields: {
				name: null,
				email: null,
				phone: null,
				message: null,
			},
		};
	},
	props: { form_homeData: Array },
	methods: {
		...mapActions(["storeFormData"]),
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
					this.storeFormData(this.formDataFields).then(() => {
						if (this.$store.state.formSent == true) {
							e.target.reset();
							this.notsent = false;
							this.sent = true;
							this.sending = false;
							this.formDataFields.name = null;
							this.formDataFields.email = null;
							this.formDataFields.phone = null;
							this.formDataFields.message = null;
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
};
</script>

<style lang="scss">
.alert-success {
    color: #85001f;
    background-color: #f9c59c;
    border-color: #f9c59c;
    margin-bottom: 0;
    hr {
        border-top-color: #7e183021;
    }
}
.alert-warning {
    margin-bottom: 0;
        background-color: transparent;
    border-color: transparent;
    padding: 0;
}
.clin-title-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.medi-app-cta-text {
    .medi-app-section-title {
        text-align: center;
    }
}
.medi-app-cta-text .medi-app-section-title p {
    max-width: 100% !important;

}
.medi-app-section-desc {
    max-width: 650px;
    margin: auto;
}
.medi-app-cta-content {
    position: relative;
    z-index: 9;
}
</style>