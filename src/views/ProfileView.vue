<template lang="pug">
//if profile updated successfully
Toast(:showIfValue="profileUpdated" :message="$t('your_data_updated_successfully')" :success="true")

//profile
section(class="profile")
    div(class="container")
        div(class="profile-content")
            div(class="row")
                div(class="col-lg-3")
                    div(class="top-part")
                        div(class="nav flex-column nav-pills shadow", id="profile_tabs" role="tablist", aria-orientation="vertical")
                            button(class="nav-link active", id="v-pills-1-tab" data-bs-toggle="pill", data-bs-target="#v-pills-1", type="button", role="tab", aria-controls="v-pills-1", aria-selected="false") {{ $t("edit_profile") }}
                            button#v-pills-2-tab(class="nav-link", data-bs-toggle="pill", data-bs-target="#v-pills-2", type="button", role="tab", aria-controls="v-pills-2", aria-selected="false") {{ $t("change_password") }}
                        div(class="profile-info shadow") 
                            div(class="image") 
                                img(src="@/assets/images/blank.png", class="img-fluid" alt="personal image")
                            div(class="details") 
                                h3 {{ userData.name }}
                                router-link(class="btn btn-primary" to="/" @click="logout") {{ $t("logout") }}
                div(class="col-lg-9")
                    div(class="tab-content" id="profile_tabsContent")
                        div(class="tab-pane fade show active", id="v-pills-1" role="tabpanel", aria-labelledby="v-pills-1-tab") 
                            form(class="g-3 shadow" enctype="multipart/form-data" @submit.prevent="handleProfileForm")
                                div(class="row")
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="p_name") {{ $t('name') }}
                                            input(type="text" class="form-control" id="p_name" :placeholder="$t('name')" name="name" v-model="profileFormData.name") 
                                            div(class="invalid-feedback" v-if="profileErrors.name && !profileUpdated" v-for="error in profileErrors.name") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="p_phone") {{ $t('phone') }}
                                            input(type="text" class="form-control" id="p_phone" :placeholder="$t('phone')" name="phone" v-model="profileFormData.phone")
                                            div(class="invalid-feedback" v-if="profileErrors.phone && !profileUpdated" v-for="error in profileErrors.phone") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="p_email") {{ $t('email') }}
                                            input(type="email" class="form-control" id="p_email" :placeholder="$t('email')" name="email" v-model="profileFormData.email")
                                            div(class="invalid-feedback" v-if="profileErrors.email && !profileUpdated" v-for="error in profileErrors.email") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            button(class="btn btn-danger hvr-sweep-to-top" type="submit") 
                                                span(v-if="!updating") {{ $t('save_changes') }}
                                                span(v-if="updating") {{ $t('sending') }}
                                                div(class="spinner-border text-light", role="status" v-if="updating")
                                                    span(class="visually-hidden") Loading...
                        div(class="tab-pane fade", id="v-pills-2" role="tabpanel", aria-labelledby="v-pills-2-tab") 
                            form(class="g-3 shadow" enctype="multipart/form-data" @submit.prevent="handleUpdatePassword")
                                div(class="alert alert-danger d-flex align-items-center", role="alert" v-if="passwordError")
                                    div {{ passwordError }}
                                div(class="row")
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="old_password") {{ $t('old_password') }}
                                            input(type="password" class="form-control" name="old_password" id="old_password" v-model="passwordFormData.old_password") 
                                            div(class="invalid-feedback" v-if="passwordErrors.old_password" v-for="error in passwordErrors.old_password") {{ error }}
                                    div(class="col-lg-6")
                                        div(class="form-group")
                                            label(for="new_password") {{ $t('new_password') }}
                                            input(type="password" class="form-control" name="new_password" id="new_password" v-model="passwordFormData.new_password") 
                                            div(class="invalid-feedback" v-if="passwordErrors.new_password" v-for="error in passwordErrors.new_password") {{ error }}
                                    div(class="col-lg-6")
                                        div(class="form-group")
                                            label(for="confirm_password") {{ $t('confirm_password') }}
                                            input(type="password" class="form-control" name="confirm_password" id="confirm_password" v-model="passwordFormData.confirm_password") 
                                            div(class="invalid-feedback" v-if="passwordErrors.confirm_password" v-for="error in passwordErrors.confirm_password") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            button(class="btn btn-danger hvr-sweep-to-top" type="submit") 
                                                span(v-if="!updating") {{ $t('save_changes') }}
                                                span(v-if="updating") {{ $t('sending') }}
                                                div(class="spinner-border text-light", role="status" v-if="updating")
                                                    span(class="visually-hidden") Loading...
//profile 
</template>

<script>
import Toast from "@/components/global/Toast.vue";
import axios from "axios";

export default {
	name: "ProfileView",
	components: {
		Toast,
	},
	data() {
		return {
			profileUpdated: null,
			updating: false,
			profileErrors: {
				name: null,
				phone: null,
				email: null,
			},
			profileFormData: {
				name: JSON.parse(localStorage.getItem("user_data")).name,
				phone: JSON.parse(localStorage.getItem("user_data")).phone,
				email: JSON.parse(localStorage.getItem("user_data")).email,
			},
			passwordFormData: {
				old_password: null,
				new_password: null,
				confirm_password: null,
			},
			passwordErrors: {
				old_password: null,
				new_password: null,
				confirm_password: null,
			},
			passwordError: null,
			userData: JSON.parse(localStorage.getItem("user_data")),
		};
	},
	methods: {
		handleProfileForm() {
			this.updating = true;
            this.profileUpdated = null;
			let profileFormData = this.profileFormData;
			let token = this.userData.token;

			axios
				.post("profile", profileFormData, {
					headers: {
						Accept: "application/json",
						Authorization: "Bearer " + token,
						"Accept-Language": this.$store.state.locale,
					},
				})
				.then((response) => {
					this.updating = false;
					this.profileUpdated = true;
					localStorage.setItem("user_data", JSON.stringify(response.data.data));
				})
				.catch((error) => {
					this.updating = false;
					this.profileUpdated = null;

					this.profileErrors.name = error.response.data.data.name;
					this.profileErrors.phone = error.response.data.data.phone;
					this.profileErrors.email = error.response.data.data.email;
				});
		},

		handleUpdatePassword() {
			this.updating = true;
            this.profileUpdated = null;
			let passwordFormData = this.passwordFormData;
			let token = this.userData.token;

			axios
				.post("update-password", passwordFormData, {
					headers: {
						Accept: "application/json",
						Authorization: "Bearer " + token,
						"Accept-Language": this.$store.state.locale,
					},
				})
				.then((response) => {
					this.updating = false;
                    this.passwordErrors.old_password = null;
					this.passwordErrors.new_password = null;
					this.passwordErrors.confirm_password = null;

					if (response.data.status == 'false') {
						this.passwordError = response.data.data;
					} else {
						this.passwordError = null;
                        this.profileUpdated = true;
					}
				})
				.catch((error) => {
					this.updating = false;
                    this.passwordError = null;
					this.passwordErrors.old_password = error.response.data.data.old_password;
					this.passwordErrors.new_password = error.response.data.data.new_password;
					this.passwordErrors.confirm_password = error.response.data.data.confirm_password;
				});
		},
		logout() {
			localStorage.clear();
			this.$store.commit("destroyCart");
			window.location.reload();
		},
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				if (this.$i18n.locale == "en") {
					document.title = to.meta.title || "In Arabia | Profile";
				} else {
					document.title =
						to.meta.title || "الهوية العربية | الملف الشخصي";
				}
			},
		},
	},
};
</script>
