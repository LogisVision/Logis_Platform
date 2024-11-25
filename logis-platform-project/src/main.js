import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

import App from './App.vue';
import router from './router';

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);

app.component('VueCropper', VueCropper);
app.mount('#app');
