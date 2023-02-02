import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// custom css

import './assets/sass/style.scss';

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// import all oof bootstrap js


import * as bootstrap from 'bootstrap';