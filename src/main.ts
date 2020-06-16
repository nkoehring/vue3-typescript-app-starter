import { createApp } from 'vue'
import router from './router'
import state from './state'

import App from './App.vue'

const app = createApp(App)
app.provide('state', state)
app.use(router)

app.mount('#app')
