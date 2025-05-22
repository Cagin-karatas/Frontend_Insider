import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Buefy for quick UI
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Buefy)
app.mount('#app')
