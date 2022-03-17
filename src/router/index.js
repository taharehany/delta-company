import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import SingleProductView from '@/views/SingleProductView.vue'
import AccountView from '@/views/AccountView.vue'
import ContactView from '@/views/ContactView.vue'
import ProfileView from '@/views/ProfileView.vue'
import WishlistView from '@/views/WishlistView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ThanksView from '@/views/ThanksView.vue'
import OrdersView from '@/views/OrdersView.vue'
import Error404 from '@/views/Error404.vue'

let locale = window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en";

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/products',
        name: 'ProductsView',
        component: ProductsView
    },
    {
        path: "/products/:id",
        name: "SingleProductView",
        component: SingleProductView,
    },
    {
        path: '/account',
        name: 'AccountView',
        component: AccountView
    },
    {
        path: '/profile',
        name: 'ProfileView',
        component: ProfileView
    },
    {
        path: '/wishlist',
        name: 'WishlistView',
        component: WishlistView
    },
    {
        path: '/cart',
        name: 'CartView',
        component: CartView
    },
    {
        path: '/checkout',
        name: 'CheckoutView',
        component: CheckoutView
    },
    {
        path: '/thanks',
        name: 'ThanksView',
        component: ThanksView
    },
    {
        path: '/orders',
        name: 'OrdersView',
        component: OrdersView
    },
    {
        path: '/contact',
        name: 'ContactView',
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
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})

export default router