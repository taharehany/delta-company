import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3StarRatings from "vue3-star-ratings";
import VueSocialSharing from 'vue-social-sharing'
import i18n from './i18n'
import "@fancyapps/ui/dist/fancybox.css"
import './registerServiceWorker'
import 'aos/dist/aos.css';
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/sass/style.scss'
import VueLazyload from '@jambonn/vue-lazyload'

router.beforeEach(async (to) => {
    //prevent user to route account page after login or register
    if (localStorage.getItem("user_data") !== null && to.path == '/account') {
        router.push("/")
    }
    //prevent user to route profile page
    if (!localStorage.getItem("user_data") && to.path == '/profile') {
        router.push("/")
    }
    //prevent user to route wishlist page
    if (!localStorage.getItem("user_data") && to.path == '/wishlist') {
        router.push("/account")
    }
    //prevent user to route checkout page if cart is empty
    if (localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart")).length < 1 && to.path == '/checkout') {
        router.push("/")
    }
    //prevent user to route thanks page
    if (!localStorage.getItem("user_data") && to.path == '/thanks') {
        router.push("/")
    }
    //prevent user to route thanks page
    if (!localStorage.getItem("user_data") && to.path == '/orders') {
        router.push("/")
    }
    //prevent user to route thanks page
    if (!localStorage.getItem("user_data") && to.path == '/cart') {
        router.push("/account")
    }
});

const app = createApp(App)

app.use(i18n).use(store).use(VueLazyload).use(router).use(vue3StarRatings).use(VueSocialSharing)

app.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
})

app.mount('#app')