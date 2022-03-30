<template lang="pug">
//header
header(:class="headerFixed")
    div(class="top-part") 
        div(class="container")
            div(class="content") 
                div(class="some-info")
                    div(class="info")
                        span(class="icon")
                            i(class="bi bi-telephone") 
                        p 
                            a(:href="'tel:'+headerData.phone") {{ headerData.phone }}
                    div(class="info")
                        span(class="icon")
                            i(class="bi bi-envelope") 
                        p 
                            a(:href="'mailto:'+headerData.email") {{ headerData.email }}
                div(class="links")
                    a(:href="headerData.facebook", class="bi bi-facebook" target="_blank" aria-label="facebook")
                    a(:href="headerData.twitter", class="bi bi-twitter" target="_blank" aria-label="twitter")
                    a(:href="headerData.instagram", class="bi bi-instagram" target="_blank" aria-label="instagram")
                    a(:href="headerData.linkedin", class="bi bi-linkedin" target="_blank" aria-label="linkedin")
    //navbar desktop
    nav(class="navbar main-nav navbar-expand-lg")
        div(class="container")
            div(class="d-flex") 
                div(class="navbar-brand") 
                    router-link(to="/") 
                        img(v-lazy="headerData.logo", class="img-fluid" :alt="headerData.website_title")
                button(class="navbar-toggler", type="button", data-bs-toggle="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu", aria-expanded="false", aria-label="Toggle navigation")
                    div(class="hamburger-menu")
                        span
                        span
                        span
            div(class="collapse navbar-collapse" id="navbarNav")
                ul(class="navbar-nav")
                    li(class="nav-item" :class="{active: $route.name === 'HomeView'}")
                        router-link(class="nav-link", aria-current="page", to="/") {{ $t("home") }}
                    li(class="nav-item" :class="{active: $route.name === 'AboutView'}")
                        router-link(class="nav-link", to="/about") {{ $t("about") }}
                    li(class="nav-item" :class="{active: $route.name === 'ServicesView'}")
                        router-link(class="nav-link", to="/services") {{ $t("services") }}
                    li(class="nav-item" :class="{active: $route.name === 'TeamView'}")
                        router-link(class="nav-link", to="/team") {{ $t("team") }}
                    li(class="nav-item" :class="{active: $route.name === 'BlogsView'}")
                        router-link(class="nav-link", to="/blogs") {{ $t("blogs") }}
                    li(class="nav-item" :class="{active: $route.name === 'ContactView'}")
                        router-link(class="nav-link", to="/contact") {{ $t("contact_us") }}
            div(class="btn-area")
                div(class="dropdown")
                    button(class="btn consultant dropdown-toggle", id="dropdownMenuButton1" type="button", data-bs-toggle="dropdown", aria-expanded="false")
                        | {{ this.$i18n.locale == 'ar' ? 'عربي' : 'english' }}
                    ul(class="dropdown-menu", aria-labelledby="dropdownMenuButton1")
                        li
                            a(class="dropdown-item ar", @click="changeLangToAr") عربي
                        li
                            a(class="dropdown-item en", @click="changeLangToEn") english
    //navbar desktop

    //side menu in mobile only
    div(class="offcanvas offcanvas-start", id="side_menu" data-bs-scroll="true", tabindex="-1", aria-labelledby="side_menu_label")
        div(class="offcanvas-header")
            button(type="button", class="btn-close btn-close-dark", data-bs-dismiss="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu" aria-label="Close")
        div(class="offcanvas-body")
            div(class="navbar")
                div(class="collapsed navbar-collapse" id="navbarNavSide")
                    ul(class="navbar-nav")
                        li(class="nav-item" :class="{active: $route.name === 'HomeView'}")
                            router-link(class="nav-link", aria-current="page", to="/") {{ $t("home") }}
                        li(class="nav-item" :class="{active: $route.name === 'AboutView'}")
                            router-link(class="nav-link", to="/about") {{ $t("about") }}
                        li(class="nav-item" :class="{active: $route.name === 'ServicesView'}")
                            router-link(class="nav-link", to="/services") {{ $t("services") }}
                        li(class="nav-item" :class="{active: $route.name === 'TeamView'}")
                            router-link(class="nav-link", to="/team") {{ $t("team") }}
                        li(class="nav-item" :class="{active: $route.name === 'BlogsView'}")
                            router-link(class="nav-link", to="/blogs") {{ $t("blogs") }}
                        li(class="nav-item" :class="{active: $route.name === 'ContactView'}")
                            router-link(class="nav-link", to="/contact") {{ $t("contact_us") }}
//header
</template>

<script>
export default {
	name: "Header",
	props: {
		headerData: Object,
		headerFixed: String,
	},
	data() {
		return { langs: ['ar', 'en'] }
	},
	methods: {
		changeLangToAr() {
			if (this.$i18n.locale == 'en') {
				window.location = window.location.href.replace(`/${this.$i18n.locale}/`, '/ar/')
			}
		},
		changeLangToEn() {
			if (this.$i18n.locale == 'ar') {
				window.location = window.location.href.replace(`/${this.$i18n.locale}/`, '/en/')
			}
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
		let sideMenu = document.querySelector("#side_menu");
		sideMenu.addEventListener("click", function (event) {
			const targetClasses = event.target.classList;

			if (!targetClasses.contains("dropdown-toggle") && targetClasses.contains("nav-link") || targetClasses.contains("dropdown-item")) {
				sideMenu.classList.remove("show");
				let offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
				offcanvasBackdrop.classList.remove("show");
			}
		}, { passive: true });
	}
};
</script>
