<template lang="pug">
//footer
footer
	div(class="container")
		div(class="footer-content")
			div(class="row")
				div(class="col-lg-5 col-md-6")
					div(class="footer-box")
						div(class="text")
							h3 من نحن
							p {{ footerData.footer_description }}
						div(class="social-links")
							h3 روابط مواقع التواصل
							div(class="links")
								a(:href="footerData.facebook", class="bi bi-facebook" target="_blank" aria-label="facebook")
								a(:href="footerData.twitter", class="bi bi-twitter" target="_blank" aria-label="twitter")
								a(:href="footerData.instagram", class="bi bi-instagram" target="_blank" aria-label="instagram")
								a(:href="footerData.linkedin", class="bi bi-linkedin" target="_blank" aria-label="linkedin")
				div(class="col-lg-3 col-md-6")
					div(class="footer-box")
						h3 روابط مفيدة
						ul(class="map-links")
							li
								router-link(to="/" exact) الرئيسية
							li
								router-link(to="/about") من نحن
							li
								router-link(to="/services") الخدمات
							li
								router-link(to="/blogs") المقالات
							li
								router-link(to="/contact") تواصل معنا
				div(class="col-lg-4 col-md-6")
					div(class="footer-box")
						h3 معلومات التواصل
						div(class="contact")
							p 
								i(class="bi bi-pin-map")
								| العنوان {{ footerData.address }}
							p 
								i(class="bi bi-telephone")
								a(:href="'tel:'+footerData.phone") الهاتف {{ footerData.phone }}
							p 
								i(class="bi bi-envelope")
								a(:href="'mailto:'+footerData.email") البريد الإلكتروني {{ footerData.email }}
		div(class="copyright")
			div(class="copy-text")
				p {{ footerData.copyrights }} &copy;
					a(href="https://marwan.tech/" target="_blank") {{ getYear }} مروان تك
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