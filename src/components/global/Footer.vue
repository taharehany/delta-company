<template lang="pug">
//to top
div(id="toTop")
	button 
		i(class="bi bi-chevron-double-up")
//to top

//footer part
footer
	div(class="container")
		div(class="footer-content")
			div(class="row")
				div(class="col-lg-4 col-md-6")
					div(class="footer-box")
						div(class="text")
							a(href="index.html" class="footer-logo") 
								img(data-src="images/logo-white.png", class="img-fluid mb-4" alt="")
							p Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nostrum sed. Sit obcaecati eligendi facilis quod commodi, dolorum consequatur, doloremque excepturi voluptatibus mollitia saepe? Deserunt quod rerum odio officia laudantium!
						div(class="social-links")
							h4 Follow on Socials
							div(class="links")
								a(href="#", class="bi bi-facebook")
								a(href="#", class="bi bi-twitter")
								a(href="#", class="bi bi-instagram")
								a(href="#", class="bi bi-linkedin")
				div(class="col-lg-2 col-md-6")
					div(class="footer-box")
						h3 useful links
						ul(class="map-links")
							li
								a(href="#!") home
							li
								a(href="about.html") about us
							li
								a(href="products.html") our products
							li
								a(href="contact.html") contact us
				div(class="col-lg-3 col-md-6")
					div(class="footer-box")
						h3 my account
						ul(class="map-links")
							li
								a(href="login.html") login
							li
								a(href="profile.html") profile
							li
								a(href="wishlist.html") wishlist
				div(class="col-lg-3")
					div(class="footer-box")
						h3 contact
						div(class="contact")
							p 
								i(class="bi bi-pin-map")
								| jeddah , saudi arabia
							p 
								i(class="bi bi-telephone")
								a(href="tel: +954 000 000 78") phone: +954 000 000 78
							p 
								i(class="bi bi-newspaper")
								| fax: (+9) 000-000-3229
							p 
								i(class="bi bi-envelope")
								a(href="mailto:inf@inarabia.co") email: inf@inarabia.co
		div(class="copyright")
			div(class="copy-text")
				p all copyright is reseved &copy;
					a(href="#") DeltaITech
//footer part
</template>

<script>
export default {
    name: "Footer"
}
</script>