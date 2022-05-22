import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import { MockServer } from "./server";
import router from './router'

if (import.meta.env.DEV) {
    MockServer();
}

const app = createApp(App)
app.use(router)
app.mount('#app')