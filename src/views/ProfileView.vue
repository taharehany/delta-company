<template lang="pug">
//breadcrumb
nav(aria-label="breadcrumb" class="main-breadcrumb" v-if="settingsData" :style="{backgroundImage: `url(${settingsData.breadcrumb_bg})`}")
    div(class="container") 
        div(class="breadcrumb-title")
            h2 {{ userData.name }}
        nav(aria-label="breadcrumb")
            ol(class="breadcrumb")
                li(class="breadcrumb-item")
                    router-link(to="/" exact) {{ $t("home") }}
                li(class="breadcrumb-item active", aria-current="page") {{ $t("profile") }}
//breadcrumb

//if profile updated successfully
div(class="position-fixed bottom-0 start-0 p-3 toast-part")
    div(class="toast align-items-center text-white bg-success border-0" :class="{ 'show': profileUpdated }" role="alert", aria-live="assertive", aria-atomic="true")
        div(class="d-flex")
            div(class="toast-body") {{ $t("your_data_updated_successfully") }}
            button(type="button", class="btn-close btn-close-white me-2 m-auto", data-bs-dismiss="toast", aria-label="Close")

//profile
section(class="profile")
    div(class="container")
        div(class="profile-content")
            div(class="row")
                div(class="col-lg-3")
                    div(class="top-part")
                        div(class="nav flex-column nav-pills shadow", id="profile_tabs" role="tablist", aria-orientation="vertical")
                            button(class="nav-link active", id="v-pills-1-tab" data-bs-toggle="pill", data-bs-target="#v-pills-1", type="button", role="tab", aria-controls="v-pills-1", aria-selected="false") edit profile
                            button#v-pills-2-tab(class="nav-link", data-bs-toggle="pill", data-bs-target="#v-pills-2", type="button", role="tab", aria-controls="v-pills-2", aria-selected="false") change password
                        div(class="profile-info shadow") 
                            div(class="image") 
                                img(src="@/assets/images/blank.png", class="img-fluid" alt="")
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
                                            div(class="invalid-feedback" v-if="profileErrors.name && !register_done" v-for="error in profileErrors.name") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="p_phone") {{ $t('phone') }}
                                            input(type="text" class="form-control" id="p_phone" :placeholder="$t('phone')" name="phone" v-model="profileFormData.phone")
                                            div(class="invalid-feedback" v-if="profileErrors.phone && !register_done" v-for="error in profileErrors.phone") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="p_email") {{ $t('email') }}
                                            input(type="email" class="form-control" id="p_email" :placeholder="$t('email')" name="email" v-model="profileFormData.email")
                                            div(class="invalid-feedback" v-if="profileErrors.email && !register_done" v-for="error in profileErrors.email") {{ error }}
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            button(class="btn btn-danger hvr-sweep-to-top" type="submit") 
                                                span(v-if="!updating") {{ $t('save_changes') }}
                                                span(v-if="updating") {{ $t('sending') }}
                                                div(class="spinner-border text-light", role="status" v-if="updating")
                                                    span(class="visually-hidden") Loading...
                        div(class="tab-pane fade", id="v-pills-2" role="tabpanel", aria-labelledby="v-pills-2-tab") 
                            form(class="g-3 shadow" action="" novalidate)
                                div(class="row")
                                    //- div(class="col-lg-12")
                                        div(class="alert alert-warning alert-dismissible fade show", role="alert")
                                            strong Holy guacamole!
                                            | You should check in on some of those fields below.
                                            button(type="button", class="btn-close", data-bs-dismiss="alert", aria-label="Close")
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="p_password") {{ $t('password') }}
                                            input(type="password" class="form-control" id="p_password")
                                    div(class="col-lg-12")
                                        div(class="form-group")
                                            label(for="cp_password") {{ $t('c_password') }}
                                            input(type="password" class="form-control" id="cp_password")
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
import { mapState } from "vuex";
import axios from "axios";

export default {
	name: "ProfileView",
	computed: {
		...mapState(["settingsData"]),
	},
	data() {
		return {
			userData: JSON.parse(sessionStorage.getItem("user_data")),
			profileUpdated: null,
			profile_error: null,
			sendingRegister: false,
			updating: false,
			profileErrors: {
				name: null,
				phone: null,
				email: null,
			},
			profileFormData: {
				name: JSON.parse(sessionStorage.getItem("user_data")).name,
				phone: JSON.parse(sessionStorage.getItem("user_data")).phone,
				email: JSON.parse(sessionStorage.getItem("user_data")).email,
			},
		};
	},
	created() {
		this.$store.dispatch("getSettingsData");
	},
	methods: {
		handleProfileForm() {
			this.updating = true;
			let profileFormData = this.profileFormData;
			let token = this.userData.token;
            axios
                .post("profile", { profileFormData }, { /** تحط هنا قوسين عشان ميضربش في وشك **/
                    headers: {
                        "Accept": "application/json",
                        "Authorization" : "Bearer " + token
                    }
                })
				.then((response) => {
					this.updating = false;
					this.profileUpdated = true;
					sessionStorage.setItem("user_data", JSON.stringify(response.data.data));
				})
				.catch((error) => {
					this.updating = false;
					this.profileUpdated = null;
					this.profile_error = true;

					this.profileErrors.name = error.response.data.data.name;
					this.profileErrors.phone = error.response.data.data.phone;
					this.profileErrors.email = error.response.data.data.email;
					// console.log(error.response.data);
				});
		},
        logout() {
			sessionStorage.removeItem("user_data");
			window.location.reload();
		},
	},
};
</script>
