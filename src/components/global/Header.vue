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
            div(class="navbar-content")
                div(class="menu") 
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
                                router-link(class="nav-link", aria-current="page", to="/") الرئيسية
                            li(class="nav-item" :class="{active: $route.name === 'AboutView'}")
                                router-link(class="nav-link", to="/about") من نحن
                            li(class="nav-item" :class="{active: $route.name === 'ServicesView'}")
                                router-link(class="nav-link", to="/services") الخدمات
                            li(class="nav-item" :class="{active: $route.name === 'TeamView'}")
                                router-link(class="nav-link", to="/team") فريق العمل
                            li(class="nav-item" :class="{active: $route.name === 'BlogsView'}")
                                router-link(class="nav-link", to="/blogs") المقالات
                            li(class="nav-item" :class="{active: $route.name === 'ContactView'}")
                                router-link(class="nav-link", to="/contact") تواصل معنا
                div(class="btn-area")
                    div(class="icon")
                        i(class="bi bi-telephone")
                    a(href="")
                        span(class="call_title") استشارة مجانية
                        span(class="call_number") 0565487441584
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
                            router-link(class="nav-link", aria-current="page", to="/") الرئيسية
                        li(class="nav-item" :class="{active: $route.name === 'AboutView'}")
                            router-link(class="nav-link", to="/about") من نحن
                        li(class="nav-item" :class="{active: $route.name === 'ServicesView'}")
                            router-link(class="nav-link", to="/services") الخدمات
                        li(class="nav-item" :class="{active: $route.name === 'TeamView'}")
                            router-link(class="nav-link", to="/team") فريق العمل
                        li(class="nav-item" :class="{active: $route.name === 'BlogsView'}")
                            router-link(class="nav-link", to="/blogs") المقالات
                        li(class="nav-item" :class="{active: $route.name === 'ContactView'}")
                            router-link(class="nav-link", to="/contact") تواصل معنا
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
		return {}
	},
	methods: {
		
	},
	created() {

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
