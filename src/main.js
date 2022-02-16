import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/sass/style.scss'
import 'jquery'
import './registerServiceWorker'
import AOS from 'aos';
import 'aos/dist/aos.css';
window.$ = window.jQuery = require('jquery');

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
        $("header").addClass("medi-app-sticky-on");
    } else {
        if ($(this).scrollTop() < 1) {
            $("header").removeClass("medi-app-sticky-on");
        }
    }

    if ($(this).scrollTop() > 200) {
        $('.app-medi-scrollup').fadeIn();
    } else {
        $('.app-medi-scrollup').fadeOut();
    }

    if ($(window).scrollTop() > 250) {
        $('.medi-app-main-header').addClass('medi-app-sticky-on')
    } else {
        $('.medi-app-main-header').removeClass('medi-app-sticky-on')
    }
});

$(function () {
    $('body').on('click',".app-medi-mobile-main-navigation .dropdown-btn", function () {
        console.log("this");
        $(this).prev('ul').slideToggle(300);
    });

    $('.app-medi-scrollup').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    AOS.init({
        duration: 1000,
        offset: 100
    });
});

createApp(App).use(store).use(router).mount('#app')