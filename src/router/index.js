import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainViews.vue';
import MobilePopup from '../components/MobilePopup.vue';
import EasterEgg from '../components/easterEgg/easterEgg.vue';
import EasterGame from '../components/easterEgg/EasterGame.vue';

const routes = [
    // ------------------
    // --- 메인
    // ------------------
    {
        path: '/',
        name: 'MainView',
        component: MainView,
    },
    // ------------------
    // --- 청첩장 팝업
    // ------------------
    {
        path: '/MobilePopup',
        name: 'MobilePopup',
        component: MobilePopup,
    },
    // ------------------
    // --- 제작자 이스터에그 모음
    // ------------------
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
