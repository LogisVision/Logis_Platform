import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VueCropper', VueCropper);
app.mount('#app')
