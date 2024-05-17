import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './locale/main';

const app = createApp(App);
import { inject } from '@vercel/analytics';

const mode = import.meta.env.MODE;
inject({ mode: mode ? 'development' : 'production' });
app.use(i18n).mount('#app');
