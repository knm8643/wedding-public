import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainViews.vue';
import MobilePopup from '../components/MobilePopup.vue';

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
