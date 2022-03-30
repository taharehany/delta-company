<template lang="pug">
//footer
footer
	div(class="container")
		div(class="footer-content")
			div(class="row")
				div(class="col-lg-5 col-md-6")
					div(class="footer-box")
						div(class="text")
							h3 {{ $t("about_us") }}
							p {{ footerData.footer_description }}
						div(class="social-links")
							h3 {{ $t("follow_on_socials") }}
							div(class="links")
								a(:href="footerData.facebook", class="bi bi-facebook" target="_blank" aria-label="facebook")
								a(:href="footerData.twitter", class="bi bi-twitter" target="_blank" aria-label="twitter")
								a(:href="footerData.instagram", class="bi bi-instagram" target="_blank" aria-label="instagram")
								a(:href="footerData.linkedin", class="bi bi-linkedin" target="_blank" aria-label="linkedin")
				div(class="col-lg-3 col-md-6")
					div(class="footer-box")
						h3 {{ $t("useful_links") }}
						ul(class="map-links")
							li
								router-link(to="/" exact) {{ $t("home") }}
							li
								router-link(to="/about") {{ $t("about") }}
							li
								router-link(to="/services") {{ $t("services") }}
							li
								router-link(to="/blogs") {{ $t("blogs") }}
							li
								router-link(to="/contact") {{ $t("contact_us") }}
				div(class="col-lg-4 col-md-6")
					div(class="footer-box")
						h3 {{ $t("contact") }}
						div(class="contact")
							p 
								i(class="bi bi-pin-map")
								| {{ $t("address") }}: {{ footerData.address }}
							p 
								i(class="bi bi-telephone")
								a(:href="'tel:'+footerData.phone") {{ $t("phone") }}: {{ footerData.phone }}
							p 
								i(class="bi bi-envelope")
								a(:href="'mailto:'+footerData.email") {{ $t("email") }}: {{ footerData.email }}
		div(class="copyright")
			div(class="copy-text")
				p {{ footerData.copyrights }} &copy;
					a(href="https://marwan.tech/" target="_blank") {{ getYear }} {{ $t("marwan_tech") }}
//footer
</template>

<script>
export default {
	name: "Footer",
	props: {
		footerData: Array,
	},
    computed: {
         getYear() {
            let date = new Date();
            return date.getFullYear();
        }
    }
};
</script>