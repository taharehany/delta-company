<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="settingsData" :style="{backgroundImage: `url(${settingsData.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ $t("account") }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("account") }}
//breadcrumb

//if login done
div(class="position-fixed bottom-0 start-0 p-3 toast-part")
    div(class="toast align-items-center text-white bg-success border-0" :class="{ 'show': login_done }" role="alert", aria-live="assertive", aria-atomic="true")
        div(class="d-flex")
            div(class="toast-body") {{ $t("you_have_login") }}
            button(type="button", class="btn-close btn-close-white me-2 m-auto", data-bs-dismiss="toast", aria-label="Close")

//if login error
div(class="position-fixed bottom-0 start-0 p-3 toast-part")
    div(class="toast align-items-center text-white bg-danger border-0" :class="{ 'show': login_error && !login_done && !register_error }" role="alert", aria-live="assertive", aria-atomic="true")
        div(class="d-flex")
            div(class="toast-body") {{ $t("unauthorised_message") }}
            button(type="button", class="btn-close btn-close-white me-2 m-auto", data-bs-dismiss="toast", aria-label="Close")
            
//if register done
div(class="position-fixed bottom-0 start-0 p-3 toast-part")
    div(class="toast align-items-center text-white bg-success border-0" :class="{ 'show': register_done }" role="alert", aria-live="assertive", aria-atomic="true")
        div(class="d-flex")
            div(class="toast-body") {{ $t("you_have_registered") }}
            button(type="button", class="btn-close btn-close-white me-2 m-auto", data-bs-dismiss="toast", aria-label="Close")

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
                                            input(type="number" class="form-control" :placeholder="$t('phone')" v-model="registerFormData.phone")
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
                                    //- div(class="col-lg-12 mb-2")
                                        div(class="form-check")
                                            input(input class="form-check-input" type="checkbox" id="gridCheck1")
                                            label(class="form-check-label", for="gridCheck1")
                                                | Remember me
                                    div(class="col-lg-12 text-center")
                                        div(class="form-group")
                                            button(class="btn btn-danger hvr-sweep-to-top" type="submit" :disabled="sendingLogin == true") {{ $t("login") }}
                                                div(class="spinner-border text-light", role="status" v-if="sendingLogin")
                                                    span(class="visually-hidden") Loading...
//login and register 
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import About from "@/components/pages/About.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
	name: "Account",
	components: {
		Breadcrumb,
		About,
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
	computed: {
		...mapState(["settingsData"]),
	},
	created() {
		this.$store.dispatch("getSettingsData");
	},
	methods: {
		handleRegister() {
			this.sendingRegister = true;
			let registerFormData = this.registerFormData;
			axios
				.post("register", { registerFormData })
				.then((result) => {
					this.sendingRegister = false;
					this.register_done = true;
					this.register_error = true;
					this.registerFormData.name = null;
					this.registerFormData.email = null;
					this.registerFormData.phone = null;
					this.registerFormData.password = null;

					setTimeout(holding, 1500);

					function holding() {
						sessionStorage.setItem("user_data", JSON.stringify(result.data.data));
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
					console.log(error.response.data.data);
				});
		},
		handleLogin() {
			this.sendingLogin = true;
			let loginFormData = this.loginFormData;
			axios
				.post("login", { loginFormData })
				.then((result) => {
					this.sendingLogin = false;
					this.login_done = true;
					this.registerFormData.email = null;
					this.registerFormData.password = null;

					setTimeout(holding, 1500);

					function holding() {
						sessionStorage.setItem("user_data", JSON.stringify(result.data.data));
						window.location.reload();
						this.$router.push("/");
					}
				})
				.catch((error) => {
					this.sendingLogin = false;
					this.login_done = null;
					this.login_error = true;
                    this.register_error = null;

                    this.loginErrors.email = error.response.data.data.email;
                    this.loginErrors.password = error.response.data.data.password;
					console.log(error.response);
				});
		},
	},
};
</script>
