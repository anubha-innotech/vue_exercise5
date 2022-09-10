import { createWebHistory, createRouter } from 'vue-router'
const HomePage = () => import('./components/HomePage.vue');
const AboutPage = () => import('./components/AboutPage.vue');
const JobsPage = () => import('./components/JobsPage.vue');
const JobDetails = () => import('./components/JobDetails.vue');
const NotFound = () => import('./components/NotFound.vue');

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'AboutPage',
        path: '/about',
        component: AboutPage,
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
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;