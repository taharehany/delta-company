<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="settingsData" :style="{backgroundImage: `url(${settingsData.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ $t("contact_us") }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("contact_us") }}
//breadcrumb

//toast part
div(class="position-fixed bottom-0 p-3 toast-part")
    div(class="toast align-items-center text-white bg-success border-0" :class="{ 'show': sent }" role="alert", aria-live="assertive", aria-atomic="true")
        div(class="d-flex")
            div(class="toast-body") {{ $t("mesage_sent_successfully") }}
            button(type="button", class="btn-close btn-close-white", data-bs-dismiss="toast", aria-label="Close")
//toast part

//contact
section(class="contact")
    div(class="container")
        div(class="info-area")
            div(class="row")
                div(class="col-md-4 col-lg-4")
                    div(class="info-box")
                        i(class="bi bi-envelope") 
                        h3 {{ $t("email") }}
                        a(:href="'mailto:'+settingsData.email") {{ settingsData.email }}
                div(class="col-md-4 col-lg-4")   
                    div(class="info-box")
                        i(class="bi bi-telephone")
                        h3 {{ $t("phone") }}
                        a(:href="'tel:'+settingsData.phone" dir="ltr") {{ settingsData.phone }}
                div(class="col-md-4 col-lg-4")
                    div(class="info-box")
                        i(class="bi bi-pin-map")
                        h3 {{ $t("address") }}
                        span {{ settingsData.address }}
        div(class="form-area")
            div(class="contact-box")
                //- div(class="text-center mb-3" v-if="sent")
                    p(class="successfully") Message Sent Successfully 
                div(class="form-content")
                    form(class="g-3" enctype="multipart/form-data" @submit.prevent="handleContactForm")
                        div(class="row")
                            div(class="col-lg-12")
                                div(class="form-group input-group")
                                    input(type="text", class="form-control", :placeholder="$t('name')" name="name" v-model="contactFormData.name" )
                                    div(class="invalid-feedback" v-if="contactErrors.name && !sent" v-for="error in contactErrors.name") {{ error }}
                            div(class="col-lg-12")
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
                                div(class="form-group input-group")
                                    button(class="btn btn-danger hvr-sweep-to-top" type="submit" :disabled="sending == true") 
                                        span(v-if="!sending") {{ $t('send') }}
                                        span(v-if="sending") {{ $t('sending') }}
                                        div(class="spinner-border text-light", role="status" v-if="sending")
                                            span(class="visually-hidden") Loading...
//contact 

//map
section(class="map")
    iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564056191!2d31.22344491853406!3d30.059558098334296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1634654464669!5m2!1sen!2seg", width="100%", height="450", style="border:0;", allowfullscreen="", loading="lazy")
//map
</template>

<script>
import { mapState, mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";

export default {
	name: "ContactView",
	components: {
		VueRecaptcha,
	},
	data() {
		return {
			productsApi: [],
			notsent: false,
			sent: false,
			sending: false,
			verifiedRecapcha: false,
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
			this.sending = true;

			if (this.verifiedRecapcha == true) {
				this.storeFormData(this.contactFormData).then(() => {
					if (!this.$store.state.contactErrorsApi) {
						e.target.reset();
						this.notsent = false;
						this.sent = true;
						this.sending = false;
						this.onCaptchaExpired();
						this.contactFormData.name = null;
						this.contactFormData.email = null;
						this.contactFormData.phone = null;
						this.contactFormData.message = null;
					} else {
						this.sending = false;
						this.sent = false;
						let errors = this.$store.state.contactErrorsApi.data.data;
						this.contactErrors.name = errors.name;
						this.contactErrors.email = errors.email;
						this.contactErrors.phone = errors.phone;
						this.contactErrors.message = errors.message;
					}
				});
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
