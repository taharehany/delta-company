<template lang="pug">
//if mesage sent
Toast(:showIfValue="sent" :message="$t('message_sent_successfully')" :success="true")

//if mesage not sent
Toast(:showIfValue="recapchaError" :message="$t('recapcha_error')" :success="false")

//contact
section(class="contact" v-if="settingsData")
    div(class="container")
        div(class="info-area")
            div(class="row")
                div(class="col-md-4 col-lg-4 box p-0")
                    div(class="info-box")
                        i(class="repeated bi bi-envelope") 
                        i(class="bi bi-envelope") 
                        h4 {{ $t("email") }}
                        a(:href="'mailto:'+settingsData.email") {{ settingsData.email }}
                div(class="col-md-4 col-lg-4 box p-0")
                    div(class="info-box")
                        i(class="repeated bi bi-telephone")
                        i(class="bi bi-telephone")
                        h4 {{ $t("phone") }}
                        a(:href="'tel:'+settingsData.phone" dir="ltr") {{ settingsData.phone }}
                div(class="col-md-4 col-lg-4 box p-0")
                    div(class="info-box")
                        i(class="repeated bi bi-pin-map")
                        i(class="bi bi-pin-map")
                        h4 {{ $t("address") }}
                        span {{ settingsData.address }}
        div(class="form-area")
            div(class="main-title")
                h2 {{ $t("contact_us") }}
                    span(class="line")
            div(class="contact-box")
                div(class="form-content")
                    form(class="g-3" enctype="multipart/form-data" @submit.prevent="handleContactForm")
                        div(class="row")
                            div(class="col-lg-6")
                                div(class="form-group input-group")
                                    input(type="text", class="form-control", :placeholder="$t('name')" name="name" v-model="contactFormData.name" )
                                    div(class="invalid-feedback" v-if="contactErrors.name && !sent" v-for="error in contactErrors.name") {{ error }}
                            div(class="col-lg-6")
                                div(class="form-group input-group")
                                    input(type="text", class="form-control", :placeholder="$t('phone')" name="phone" v-model="contactFormData.phone")
                                    div(class="invalid-feedback" v-if="contactErrors.phone && !sent" v-for="error in contactErrors.phone") {{ error }}
                            div(class="col-lg-12")
                                div(class="form-group input-group")
                                    input(type="text", class="form-control", :placeholder="$t('email')" name="email" v-model="contactFormData.email")
                                    div(class="invalid-feedback" v-if="contactErrors.email && !sent" v-for="error in contactErrors.email") {{ error }}
                            div(class="col-lg-12")
                                div(class="form-group input-group")
                                    textarea(rows="6" class="form-control" :placeholder="$t('message')" name="message" v-model="contactFormData.message")
                                    div(class="invalid-feedback" v-if="contactErrors.message && !sent" v-for="error in contactErrors.message") {{ error }}
                            div(class="col-lg-12 mb-3")
                                vue-recaptcha(@verify="onVerify" @expired="onCaptchaExpired" ref="recaptcha"  sitekey="6LeMuKkeAAAAAJGnqbyd2jEWdTS65wP5Xwtw9H81")
                            div(class="col-lg-12 text-center")
                                div(class="form-group contact-btn")
                                    div(class="outer-btn")
                                        button(class="btn btn-danger" type="submit" :disabled="sending == true") 
                                            span(v-if="!sending") {{ $t('send') }}
                                            span(v-if="sending") {{ $t('sending') }}
                                                div(class="spinner-border text-light", role="status" v-if="sending")
                                                    span(class="visually-hidden") Loading...
//contact 

//map
section(class="map" v-if="settingsData")
    iframe(:src="settingsData.map_url", width="100%", height="450", style="border:0;", allowfullscreen="", loading="lazy")
//map
</template>

<script>
import { mapState, mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";
import Toast from "@/components/global/Toast.vue";

export default {
	name: "ContactPage",
	components: {
		VueRecaptcha,
		Toast,
	},
	data() {
		return {
			sent: null,
			sending: null,
			verifiedRecapcha: null,
			recapchaError: null,
			contactFormData: {
				name: null,
				phone: null,
				email: null,
				message: null,
			},
			contactErrors: {
				name: null,
				email: null,
				phone: null,
				message: null,
			},
		};
	},
	computed: {
		...mapState(["settingsData"]),
	},
	created() {
		this.$store.dispatch("getSettingsData");
	},
	methods: {
		...mapActions(["storeFormData"]),
		handleContactForm(e) {
			if (this.verifiedRecapcha == true) {
				this.sending = true;
				this.sent = null;
				this.recapchaError = null
				this.storeFormData(this.contactFormData).then(() => {
					if (!this.$store.state.contactErrorsApi) {
						e.target.reset();
						this.sent = true;
						this.sending = null;
						this.onCaptchaExpired();
						this.contactFormData.name = null;
						this.contactFormData.email = null;
						this.contactFormData.phone = null;
						this.contactFormData.message = null;
					} else {
						this.sending = null;
						this.sent = null;
						let errors = this.$store.state.contactErrorsApi.data.data;
						this.contactErrors.name = errors.name;
						this.contactErrors.email = errors.email;
						this.contactErrors.phone = errors.phone;
						this.contactErrors.message = errors.message;
					}
				});
			} else {
				this.recapchaError = true;
				setTimeout(() => {
					this.recapchaError = null;
				}, 5000);
			}
		},
		onVerify: function (response) {
			this.verifiedRecapcha = true;
			this.recapchaCode = response;
		},
		onCaptchaExpired: function () {
			this.$refs.recaptcha.reset();
		},
	},
};
</script>
