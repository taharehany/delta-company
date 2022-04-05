import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from '@jambonn/vue-lazyload'
import 'swiper/css'
import 'aos/dist/aos.css'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/sass/plugins.scss'
import '@/assets/sass/style.scss'

createApp(App).use(store).use(router).use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
}).mount('#app')
