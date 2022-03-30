import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import SingleServiceView from '@/views/SingleServiceView.vue'
import TeamView from '@/views/TeamView.vue'
import BlogsView from '@/views/BlogsView.vue'
import SingleBlogView from '@/views/SingleBlogView.vue'
import ContactView from '@/views/ContactView.vue'

let locale = window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "ar";

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/services',
        name: 'ServicesView',
        component: ServicesView
    },
    {
        path: '/services/:id',
        name: 'SingleServiceView',
        component: SingleServiceView
    },
    {
        path: '/team',
        name: 'TeamView',
        component: TeamView
    },
    {
        path: '/blogs',
        name: 'BlogsView',
        component: BlogsView
    },
    {
        path: '/blogs/:id',
        name: 'SingleBlogView',
        component: SingleBlogView
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView
    },
]

const router = createRouter({
    history: createWebHistory(locale),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({
                top: document.querySelector(to.hash).offsetTop,
                behavior: 'smooth'
            });
        }
        return window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
})

export default router