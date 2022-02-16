import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Test from '@/views/Test.vue'
import Team from '@/views/Team.vue'
import SingleTeam from '@/views/SingleTeam.vue'
import Services from '@/views/Services.vue'
import SingleService from '@/views/SingleService.vue'
import Rating from '@/views/Rating.vue'
import Contact from '@/views/Contact.vue'
import Booking from '@/views/Booking.vue'
import Error404 from '@/views/Error404.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: "/team/:id",
        name: "SingleTeam",
        component: SingleTeam,
    },
    {
        path: '/Services',
        name: 'Services',
        component: Services
    },
    {
        path: "/services/:id",
        name: "SingleService",
        component: SingleService,
    },
    {
        path: '/rating',
        name: 'rating',
        component: Rating
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/booking',
        name: 'booking',
        component: Booking
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: Error404,
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition);
        return {
            top: 0,
            behavior: 'smooth',
        }
    }
});

export default router