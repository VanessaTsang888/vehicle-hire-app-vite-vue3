import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import './assets/css/global.css';
import index from './assets/css/index.css';

import LitepieDatepicker from 'litepie-datepicker';

createApp(App).use(store).use(router).mount('#app');
app.use(LitepieDatepicker);
