import {createWebHistory, createRouter} from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import JobsPage from './components/JobsPage.vue'
import JobDetails from './components/JobDetails.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'AboutPage',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'JobsPage',
        path: '/jobs',
        component: JobsPage,
    },
    {
        name: 'JobDetails',
        path: '/jobs/:id',
        component: JobDetails,
        props: true,
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component:  NotFound
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;