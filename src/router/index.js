import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainViews.vue';
import MobilePopup from '../components/MobilePopup.vue';

const routes = [
    {
        path: '/',
        name: 'MainView',
        component: MainView,
    },
    {
        path: '/MobilePopup',
        name: 'MobilePopup',
        component: MobilePopup,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
