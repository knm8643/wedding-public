import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainViews.vue';
import MobilePopup from '../components/MobilePopup.vue';
import EasterEgg from '../components/easterEgg/easterEgg.vue';
import EasterGame from '../components/easterEgg/EasterGame.vue';

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
    {
        path: '/EasterGame',
        name: 'EasterGame',
        component: EasterGame,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
