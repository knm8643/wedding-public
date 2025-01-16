import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainViews.vue';
import MobilePopup from '../components/MobilePopup.vue';
import EasterEgg from '../components/easterEgg/easterEgg.vue';

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
    {
        path: '/EasterEgg',
        name: 'EasterEgg',
        component: EasterEgg,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
