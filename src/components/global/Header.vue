<template lang="pug">
//header
header 
    nav(class="navbar main-nav navbar-expand-lg")
        div(class="container-fluid")
            router-link(class="navbar-brand", to="/") 
                img(:src="headerData.logo", class="img-fluid" alt="")
            div(class="group")
                button(class="navbar-toggler", type="button", data-bs-toggle="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu", aria-expanded="false", aria-label="Toggle navigation")
                    div(class="hamburger-menu")
                        span
                        span
                        span
                div(class="lang")
                    div(class="dropdown")
                        div(class="icon" @click="changeLang")
                            span(v-if="$i18n.locale == 'ar'") English
                            span(v-if="$i18n.locale == 'en'") Arabic
            div(class="collapse navbar-collapse" id="navbarNav")
                ul(class="navbar-nav")
                    li(class="nav-item active")
                        router-link(class="nav-link", aria-current="page", to="/" exact) {{ $t("home") }}
                    li(class="nav-item")
                        router-link(class="nav-link", to="/about") {{ $t("about") }}
                    li(class="nav-item")
                        router-link(class="nav-link", to="/products") {{ $t("our_products") }}
                    li(class="nav-item")
                        router-link(class="nav-link", to="/contact") {{ $t("contact_us") }}
                    li(class="nav-item dropdown" :class="{'user-tab' : userData}")
                        router-link(class="nav-link dropdown-toggle", to="/#", role="button", data-bs-toggle="dropdown", aria-expanded="false")
                            span(v-if="!userData") {{ $t("account") }}
                            span(class="username" v-if="userData") {{ userData.name }}
                        ul(class="dropdown-menu")
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/profile") {{ $t("profile") }}
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/wishlist") {{ $t("wishlist") }}
                            li(v-if="!userData")
                                router-link(class="dropdown-item", to="/account") {{ $t("login_or_register") }}
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/" @click="logout") {{ $t("logout") }}
    //navbar desktop

    //side menu in mobile only
    div(class="offcanvas offcanvas-start", id="side_menu" data-bs-scroll="true", tabindex="-1", aria-labelledby="side_menu_label")
        div(class="offcanvas-header")
            button(type="button", class="btn-close btn-close-dark", data-bs-dismiss="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu" aria-label="Close")
        div(class="offcanvas-body")
            div(class="navbar")
                div(class="collapsed navbar-collapse" id="navbarNavSide")
                    ul(class="navbar-nav")
                        li(class="nav-item active")
                            router-link(class="nav-link", aria-current="page", to="/" exact) {{ $t("home") }}
                        li(class="nav-item")
                            router-link(class="nav-link", to="/about") {{ $t("about") }}
                        li(class="nav-item")
                            router-link(class="nav-link", to="/products") {{ $t("our_products") }}
                        li(class="nav-item")
                            router-link(class="nav-link", to="/contact") {{ $t("contact_us") }}
//header
</template>

<script>
export default {
	name: "Header",
	methods: {
		changeLang() {
			if (this.$i18n.locale == "en") {
				let url =
					window.location.protocol +
					"//" +
					window.location.host +
					"/" +
					"ar";
				window.location = url;
			} else {
				let url =
					window.location.protocol +
					"//" +
					window.location.host +
					"/" +
					"en";
				window.location = url;
			}
		},
		logout() {
			sessionStorage.removeItem("user_data");
			window.location.reload();
		},
	},
	created() {
		if (this.$i18n.locale == "ar") {
			let htmlElement = document.querySelector("html");
			htmlElement.setAttribute("dir", "rtl");
		} else {
			let htmlElement = document.querySelector("html");
			htmlElement.setAttribute("dir", "");
		}
	},
	props: {
		headerData: Array,
		userData: Array,
	},
};
</script>
