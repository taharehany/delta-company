<template lang="pug">
//if login done
Toast(:showIfValue="login_done" :message="$t('you_have_login')" :success="true")

//if login error
Toast(:showIfValue="login_error && !login_done && !register_error" :message="$t('unauthorised_message')" :success="false")
            
//if register done
Toast(:showIfValue="register_done" :message="$t('you_have_registered')" :success="true")

//login and register
section(class="login-register")
    div(class="container")
        div(class="login-register-area")
            div(class="login-register-box")
                div(class="login-register-content")
                    nav
                        div(id="nav-tab" class="nav nav-tabs", role="tablist")
                            button(class="nav-link active", id="nav-login-tab" data-bs-toggle="tab", data-bs-target="#nav-login", type="button", role="tab", aria-controls="nav-login", aria-selected="true") {{ $t("login") }}
                            button(class="nav-link", id="nav-register-tab" data-bs-toggle="tab", data-bs-target="#nav-register", type="button", role="tab", aria-controls="nav-register", aria-selected="false") {{ $t("register") }}
                    div(class="tab-content" id="nav-tabContent")
                        div(class="tab-pane fade", id="nav-register" role="tabpanel", aria-labelledby="nav-register-tab") 
                            form(class="g-3" enctype="multipart/form-data" @submit.prevent="handleRegister")
                                div(class="row")
                                    div(class="col-lg-12")
                                        div(class="form-group input-group") 
                                            i(class="input-group-text bi bi-person")
                                            input(type="text" class="form-control" :placeholder="$t('name')" v-model="registerFormData.name")
                                            div(class="invalid-feedback" v-if="registerErrors.name && !register_done" v-for="error in registerErrors.name") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group input-group")
                                            i(class="input-group-text bi bi-telephone")
                                            input(type="text" class="form-control" :placeholder="$t('phone')" v-model="registerFormData.phone")
                                            div(class="invalid-feedback" v-if="registerErrors.phone && !register_done" v-for="error in registerErrors.phone") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group input-group")
                                            i(class="input-group-text bi bi-envelope")
                                            input(type="email" class="form-control" :placeholder="$t('email')" v-model="registerFormData.email")
                                            div(class="invalid-feedback" v-if="registerErrors.email && !register_done" v-for="error in registerErrors.email") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group input-group")
                                            i(class="input-group-text bi bi-shield-lock")
                                            input(type="password" class="form-control" :placeholder="$t('password')" v-model="registerFormData.password")
                                            div(class="invalid-feedback" v-if="registerErrors.password && !register_done" v-for="error in registerErrors.password") {{ error }}
                                    div(class="col-lg-12 text-center")
                                        div(class="form-group")
                                            button(class="btn btn-danger hvr-sweep-to-top" :disabled="sendingRegister == true" type="submit") {{ $t("register_now") }}
                                                div(class="spinner-border text-light", role="status" v-if="sendingRegister")
                                                    span(class="visually-hidden") Loading...
                        div(class="tab-pane fade show active", id="nav-login" role="tabpanel", aria-labelledby="nav-login-tab") 
                            form(class="g-3" enctype="multipart/form-data" @submit.prevent="handleLogin")
                                div(class="row")
                                    div(class="col-lg-12")
                                        div(class="form-group input-group")
                                            i(class="input-group-text bi bi-envelope")
                                            input(type="email" class="form-control" :placeholder="$t('email')" v-model="loginFormData.email")
                                            div(class="invalid-feedback" v-if="loginErrors.email && !login_done" v-for="error in loginErrors.email") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group input-group")
                                            i(class="input-group-text bi bi-shield-lock")
                                            input(type="password" class="form-control" :placeholder="$t('password')" v-model="loginFormData.password")
                                            div(class="invalid-feedback" v-if="loginErrors.password && !login_done" v-for="error in loginErrors.password") {{ error }}
                                    div(class="col-lg-12 text-center")
                                        div(class="form-group")
                                            button(class="btn btn-danger hvr-sweep-to-top" type="submit" :disabled="sendingLogin == true") {{ $t("login") }}
                                                div(class="spinner-border text-light", role="status" v-if="sendingLogin")
                                                    span(class="visually-hidden") Loading...
//login and register 
</template>

<script>
import Toast from "@/components/global/Toast.vue";
import About from "@/components/pages/About.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
	name: "AccountView",
	components: {
		About,
		Toast
	},
	data() {
		return {
			register_done: null,
			login_done: null,
			login_error: null,
			register_error: null,
			sendingRegister: false,
			sendingLogin: false,
			registerErrors: {
				name: null,
				email: null,
				phone: null,
				password: null,
			},
			loginErrors: {
				email: null,
				password: null,
			},
			registerFormData: {
				name: null,
				email: null,
				phone: null,
				password: null,
			},
			loginFormData: {
				email: null,
				password: null,
			},
		};
	},
	methods: {
		handleRegister() {
			this.sendingRegister = true;
			let registerFormData = this.registerFormData;
			axios
				.post("register", registerFormData, {
					headers: {
						"Accept-Language": this.$store.state.locale,
					}
				})
				.then((response) => {
					this.sendingRegister = false;
					this.register_done = true;
					this.register_error = true;
					this.registerFormData.name = null;
					this.registerFormData.email = null;
					this.registerFormData.phone = null;
					this.registerFormData.password = null;

					setTimeout(holding, 1500);

					function holding() {
						let wishlist = JSON.stringify([]);
						localStorage.setItem("user_data", JSON.stringify(response.data.data));
						localStorage.setItem("user_wishlist", wishlist);
						window.location.reload();
						this.$router.push("/");
					}
				})
				.catch((error) => {
					this.sendingRegister = false;
					this.register_done = null;
					this.register_error = true;
					this.registerErrors.name = error.response.data.data.name;
					this.registerErrors.email = error.response.data.data.email;
					this.registerErrors.phone = error.response.data.data.phone;
					this.registerErrors.password = error.response.data.data.password;
				});
		},
		handleLogin() {
			this.sendingLogin = true;
			let loginFormData = this.loginFormData;
			axios
				.post("login", loginFormData, {
					headers: {
						"Accept-Language": this.$store.state.locale,
					}
				})
				.then((response) => {
					this.sendingLogin = false;
					this.login_done = true;

					this.registerFormData.email = null;
					this.registerFormData.password = null;

					setTimeout(holding, 1500);

					function holding() {
						let wishlist = JSON.stringify(response.data.data.wishlist);
						localStorage.setItem("user_data", JSON.stringify(response.data.data));
						localStorage.setItem("user_wishlist", wishlist);
						window.location.reload();
						this.$router.push("/");
					}
				})
				.catch((error) => {
					this.sendingLogin = false;
					this.login_done = null;
					this.login_error = true;
					this.register_error = null;

					//display errors of form inputs
					this.loginErrors.email = error.response.data.data.email;
					this.loginErrors.password = error.response.data.data.password;
				});
		},
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "In Arabia | Account";
				} else {
					document.title = to.meta.title || "الهوية العربية | الحساب الشخصي";
				}
			},
		},
	},
};
</script>
