import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import SingleServiceView from '@/views/SingleServiceView.vue'
import TeamView from '@/views/TeamView.vue'
import BlogsView from '@/views/BlogsView.vue'
import SingleBlogView from '@/views/SingleBlogView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [{
        path: '/',
        name: 'HomeView',
        meta: {
            name_ar: 'الرئيسية',
        },
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        meta: {
            name_ar: 'من نحن',
        },
        component: AboutView
    },
    {
        path: '/services',
        name: 'ServicesView',
        meta: {
            name_ar: 'الخدمات',
        },
        component: ServicesView
    },
    {
        path: '/services/:id',
        name: 'SingleServiceView',
        meta: {
            name_ar: 'صفحة الخدمة',
        },
        component: SingleServiceView
    },
    {
        path: '/team',
        name: 'TeamView',
        meta: {
            name_ar: 'فريق العمل',
        },
        component: TeamView
    },
    {
        path: '/blogs',
        name: 'BlogsView',
        meta: {
            name_ar: 'المقالات',
        },
        component: BlogsView
    },
    {
        path: '/blogs/:id',
        name: 'SingleBlogView',
        meta: {
            name_ar: 'صفحة المقال',
        },
        component: SingleBlogView
    },
    {
        path: '/contact',
        name: 'ContactView',
        meta: {
            name_ar: 'تواصل معنا',
        },
        component: ContactView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
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