<template lang="pug">
div(class="main-wrapper")
    //meta in head
    teleport(to="head" v-if="settingsData")
        meta(name="description", :content="settingsData.meta_description")
        meta(name="keywords", :content="settingsData.meta_keywords")
        meta(property="og:title", :content="settingsData.og_title")
        meta(property="og:type", :content="settingsData.og_type")
        meta(property="og:url", :content="settingsData.og_url")
        meta(property="og:image", :content="settingsData.og_image")
    //meta in head

    Header(:headerData="settingsData" :headerFixed="headerFixedVal" v-if="settingsData")
    Breadcrumb(:breadcrumb="settingsData.breadcrumb_bg" v-if="!isHome && settingsData")
    router-view
    //to top
    div(id="toTop" v-if="showToTopBtn" @click="toTop")
        button 
            i(class="bi bi-chevron-double-up")
    //to top
    Footer(:footerData="settingsData" v-if="settingsData")
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
			isHome: null,
			showToTopBtn: null,
			deferredPrompt: null,
			headerFixedVal: null,
		}
	},
	computed: {
		...mapState(["settingsData"]),
	},
	created() {
		this.$store.dispatch("getSettingsData");
        
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault();
			this.deferredPrompt = e;
		}, { passive: true });
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

				if (offsetTop > 200) {
					this.headerFixedVal = 'fixed'
				} else {
					this.headerFixedVal = ''
				}
			}
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				if (to.name == 'HomeView') {
					this.isHome = true
				} else {
					this.isHome = null;
				}
			},
		},
	},
};
</script>