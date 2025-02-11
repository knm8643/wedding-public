import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 공통스타일
import './assets/css/reset.css'
import './assets/css/common.css'

const app = createApp(App);

app.use(router);
app.mount('#app');