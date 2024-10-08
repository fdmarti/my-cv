import './assets/main.css';
import { inject } from '@vercel/analytics';
 

import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './locale/main';

const app = createApp(App);
app.use(i18n).mount('#app');

inject();

