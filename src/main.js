import {
    createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import $ from 'jquery'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/sass/style.scss'

//prevent user to route account page after login or register
router.beforeEach(async (to) => {
    if (sessionStorage.getItem("user_data") !== null && to.name == 'account') {
        router.push("/")
    }
    if (sessionStorage.getItem("user_data") == null && to.name == 'profile') {
        router.push("/")
    }
    if (sessionStorage.getItem("user_data") == null && to.name == 'wishlist') {
        router.push("/")
    }
})

$("document").ready(function () {
    //products grid
    if (!localStorage.getItem("products_grid")) {
        localStorage.setItem("products_grid", "col-lg-3");
        $(".all-products .box").addClass(localStorage.getItem("products_grid"));
    } else {
        $(".all-products .box").addClass(localStorage.getItem("products_grid"));
    }
    $(".grid-2").on("click", function () {
        console.log($("this"))
        localStorage.setItem("products_grid", "col-lg-6");
        $(".all-products .box").addClass(localStorage.getItem("products_grid"));
        window.location.reload();
    });
    $(".grid-3").on("click", function () {
        localStorage.setItem("products_grid", "col-lg-4");
        $(".all-products .box").addClass(localStorage.getItem("products_grid"));

        window.location.reload();
    });

    $(window).on("load", function () {
        $('.loader').delay(500).fadeOut(500);
    });
});

createApp(App).use(i18n).use(store).use(router).mount('#app')