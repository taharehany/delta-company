import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import AccountView from '@/views/AccountView.vue'
import ContactView from '@/views/ContactView.vue'
import ProfileView from '@/views/ProfileView.vue'
import WishlistView from '@/views/WishlistView.vue'
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
        path: '/products',
        name: 'products',
        component: ProductsView
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: WishlistView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
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