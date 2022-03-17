<template lang="pug">
//header
header 
    nav(class="navbar main-nav navbar-expand-lg")
        div(class="container-fluid")
            router-link(class="navbar-brand", to="/") 
                img(v-lazy="headerData.logo", class="img-fluid" :alt="$t('website_name')")
            div(class="group")
                button(class="navbar-toggler", type="button", data-bs-toggle="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu", aria-expanded="false", aria-label="Toggle navigation")
                    div(class="hamburger-menu")
                        span
                        span
                        span
                div(class="cart-icon")
                    router-link(to="/wishlist" class="btn position-relative" aria-label="wishlit icon")
                        i(class="bi bi-heart")
                        //- span(class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger") {{ wishlist.length }}
                            span(class="visually-hidden") wishlist 
                    router-link(to="/cart" class="btn position-relative" aria-label="cart icon")
                        i(class="bi bi-cart")
                        span(class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger") {{ totalProducts }}
                            span(class="visually-hidden") products cart
                div(class="lang")
                    div(class="dropdown")
                        div(class="icon" @click="changeLang")
                            span(v-if="$i18n.locale == 'ar'") English
                            span(v-if="$i18n.locale == 'en'" class="ar") عربي
            div(class="collapse navbar-collapse" id="navbarNav")
                ul(class="navbar-nav")
                    li(class="nav-item" :class="{active: $route.name === 'Home'}")
                        router-link(class="nav-link", aria-current="page", to="/" exact) {{ $t("home") }}
                    li(class="nav-item" :class="{active: $route.name === 'AboutView'}")
                        router-link(class="nav-link", to="/about") {{ $t("about") }}
                    li(class="nav-item" :class="{active: $route.name === 'ProductsView'}")
                        router-link(class="nav-link", to="/products") {{ $t("our_products") }}
                    li(class="nav-item" :class="{active: $route.name === 'ContactView'}")
                        router-link(class="nav-link", to="/contact") {{ $t("contact_us") }}
                    li(class="nav-item dropdown" :class="{'user-tab' : userData}")
                        a(class="nav-link dropdown-toggle", href="javascript:void(0);", role="button", data-bs-toggle="dropdown", aria-expanded="false")
                            span(v-if="!userData") {{ $t("account") }}
                            span(class="username" v-if="userData") {{ userData.name }}
                        ul(class="dropdown-menu")
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/profile") {{ $t("profile") }}
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/wishlist") {{ $t("wishlist") }}
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/cart") {{ $t("cart") }}
                            li(v-if="userData")
                                router-link(class="dropdown-item", to="/orders") {{ $t("orders") }}
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
                        li(class="nav-item" :class="{active: $route.name === 'Home'}")
                            router-link(class="nav-link", aria-current="page", to="/" exact) {{ $t("home") }}
                        li(class="nav-item" :class="{active: $route.name === 'AboutView'}")
                            router-link(class="nav-link", to="/about") {{ $t("about") }}
                        li(class="nav-item" :class="{active: $route.name === 'ProductsView'}")
                            router-link(class="nav-link", to="/products") {{ $t("our_products") }}
                        li(class="nav-item" :class="{active: $route.name === 'ContactView'}")
                            router-link(class="nav-link", to="/contact") {{ $t("contact_us") }}
                        li(class="nav-item dropdown" :class="{'user-tab' : userData}")
                            a(class="nav-link dropdown-toggle", href="javascript:void(0);", role="button", data-bs-toggle="dropdown", aria-expanded="false")
                                span(v-if="!userData") {{ $t("account") }}
                                span(class="username" v-if="userData") {{ userData.name }}
                            ul(class="dropdown-menu")
                                li(v-if="userData")
                                    router-link(class="dropdown-item", to="/profile") {{ $t("profile") }}
                                li(v-if="userData")
                                    router-link(class="dropdown-item", to="/wishlist") {{ $t("wishlist") }}
                                li(v-if="userData")
                                    router-link(class="dropdown-item", to="/cart") {{ $t("cart") }}
                                li(v-if="userData")
                                    router-link(class="dropdown-item", to="/orders") {{ $t("orders") }}
                                li(v-if="!userData")
                                    router-link(class="dropdown-item", to="/account") {{ $t("login_or_register") }}
                                li(v-if="userData")
                                    router-link(class="dropdown-item", to="/" @click="logout") {{ $t("logout") }}
//header
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			wishlistCheck: localStorage.getItem("user_wishlist"),
			wishlist: JSON.parse(localStorage.getItem("user_wishlist")),
		};
	},
	props: {
		headerData: Array,
		userData: Array,
	},
	methods: {
		changeLang() {
			if (this.$i18n.locale == "en") {
				window.location = window.location.href.replace('/en/', '/ar/')
			} else if (this.$i18n.locale == "ar") {
				window.location = window.location.href.replace('/ar/', '/en/')
			}
		},
		logout() {
			localStorage.clear();
			this.$store.commit("destroyCart");
			window.location.reload();
		},
	},
	created() {
		if (this.$i18n.locale == "ar") {
			let htmlElement = document.querySelector("html");
			htmlElement.setAttribute("dir", "rtl");
			htmlElement.setAttribute("lang", "ar");
		} else {
			let htmlElement = document.querySelector("html");
			htmlElement.setAttribute("dir", "ltr");
			htmlElement.setAttribute("lang", "en");
		}
	},
	computed: {
		totalProducts() {
			return this.$store.getters.totalProducts;
		},
	},
	mounted() {
		let sideMenue = document.querySelector("#side_menu");
		sideMenue.addEventListener("click", function (event) {
			const targetClasses = event.target.classList;

			if (!targetClasses.contains("dropdown-toggle") && targetClasses.contains("nav-link") || targetClasses.contains("dropdown-item")) {
				sideMenue.classList.remove("show");
				let offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
				offcanvasBackdrop.classList.remove("show");
			}
		}, { passive: true });
	}
};
</script>
