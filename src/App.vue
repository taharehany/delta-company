<template lang="pug">
div(class="main-wrapper")
    //meta in head
    teleport(to="head")
        meta(name="description", :content="settingsData.meta_description")
        meta(name="keywords", :content="settingsData.meta_keywords")
        meta(property="og:title", :content="settingsData.og_title")
        meta(property="og:type", :content="settingsData.og_type")
        meta(property="og:url", :content="settingsData.og_url")
        meta(property="og:image", :content="settingsData.og_image")
    //meta in head

    Header(:headerData="settingsData" :userData="session")
    Breadcrumb(:breadcrumb="settingsData.breadcrumb_bg" v-if="!isHome")
    router-view
    
    //to top
    div(id="toTop" v-if="showToTopBtn" @click="toTop")
        button 
            i(class="bi bi-chevron-double-up")
    //to top
    Footer(:footerData="settingsData" :userData="session")
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapState } from "vuex"
import AOS from 'aos';

export default {
	components: {
		Breadcrumb,
		Header,
		Footer,
	},
	data() {
		return {
			isLoaded: false,
			headerData: [],
			footerData: [],
			session: JSON.parse(localStorage.getItem('user_data')),
			isHome: null,
			showToTopBtn: null,
            deferredPrompt: null
		}
	},
	computed: {
		...mapState(["settingsData"]),
	},
	created() {
		this.$store.dispatch("getSettingsData");
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault();
			// Stash the event so it can be triggered later.
			this.deferredPrompt = e;
		}, {passive: true});
	},
	methods: {
		toTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
		async install() {
			this.deferredPrompt.prompt();
		}
	},
	mounted() {
		this.$store.commit("updateCartFromStorage");
		// this.$store.commit("updateUserDataFromStorage");
		// this.$store.commit("updateUserWishlistFromStorage");
		// this.$store.commit("updateLastOrderFromStorage");

		document.onreadystatechange = () => {
			if (document.readyState == "complete") {
				this.isLoaded = true;
			}
			AOS.init({
				duration: 1000,
				offset: 10
			});


			window.onscroll = () => {
				let offsetTop = window.pageYOffset;

				if (offsetTop > 500) {
					this.showToTopBtn = true
				} else {
					this.showToTopBtn = null
				}
			}
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				if (to.name == 'Home') {
					this.isHome = true
				} else {
					this.isHome = null;
				}
			},
		},
	},
};
</script>