import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Error404 from '@/views/Error404.vue'

let locale = window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en";

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error404",
        component: Error404
    },
]

const router = createRouter({
    history: createWebHistory(locale),
    routes
})

export default router