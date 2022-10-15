import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/style.scss'

import Pagination from 'v-pagination-3'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('pagination', Pagination)
