<template lang="pug">
//footer part
footer
	div(class="container")
		div(class="footer-content")
			div(class="row")
				div(class="col-lg-4 col-md-6")
					div(class="footer-box")
						div(class="text")
							router-link(to="/" class="footer-logo" exact) 
								img(v-lazy="footerData.logo_white", class="img-fluid mb-4" :alt="$t('website_name')")
							p {{ footerData.footer_description }}
						div(class="social-links")
							h4 {{ $t("follow_on_socials") }}
							div(class="links")
								a(:href="footerData.facebook", class="bi bi-facebook" target="_blank" rel="noreferrer" aria-label="facebook")
								a(:href="footerData.twitter", class="bi bi-twitter" target="_blank" rel="noreferrer" aria-label="twitter")
								a(:href="footerData.instagram", class="bi bi-instagram" target="_blank" rel="noreferrer" aria-label="instagram")
				div(class="col-lg-2 col-md-6")
					div(class="footer-box")
						h3 {{ $t("useful_links") }}
						ul(class="map-links")
							li
								router-link(to="/" exact) {{ $t("home") }}
							li
								router-link(to="/about") {{ $t("about") }}
							li
								router-link(to="/products") {{ $t("our_products") }}
							li
								router-link(to="/contact") {{ $t("contact_us") }}
				div(class="col-lg-2 col-md-6")
					div(class="footer-box")
						h3 {{ $t("my_account") }}
						ul(class="map-links")
							li(v-if="!userData")
								router-link(to="/account") {{ $t("login_or_register") }}
							li(v-if="userData")
								router-link(to="/profile") {{ $t("profile") }}
							li(v-if="userData")
								router-link(to="/wishlist") {{ $t("wishlist") }}
							li(v-if="userData")
								router-link(to="/cart") {{ $t("cart") }}
							li(v-if="userData")
								router-link(to="/orders") {{ $t("orders") }}
							li(v-if="userData")
								router-link(to="/" @click="logout") {{ $t("logout") }}
				div(class="col-lg-4")
					div(class="footer-box")
						h3 {{ $t("contact") }}
						div(class="contact")
							p 
								i(class="bi bi-pin-map")
								| {{ footerData.address }}
							p 
								i(class="bi bi-telephone")
								a(:href="'tel:'+footerData.phone") {{ $t("phone") }}: {{ footerData.phone }}
							p 
								i(class="bi bi-newspaper")
								| {{ $t("fax") }}: {{ footerData.fax }}
							p 
								i(class="bi bi-envelope")
								a(:href="'mailto:'+footerData.email") {{ $t("email") }}: {{ footerData.email }}
		div(class="copyright")
			div(class="copy-text")
				p {{ footerData.copyrights }} &copy;
					a(href="http://marwan.tech/") {{ getYear }} {{ $t("marwan_tech") }}
//footer part
</template>

<script>
export default {
	name: "Footer",
	props: {
		footerData: Array,
		userData: Array,
	},
    methods: {
        logout() {
			localStorage.clear();
            this.$store.commit("destroyCart");
			window.location.reload();
		},
    },
    computed: {
         getYear() {
            let date = new Date();
            return date.getFullYear();
        }
    }
};
</script>