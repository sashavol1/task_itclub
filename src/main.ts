import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import { MockServer } from "./server";

if (import.meta.env.DEV) {
    MockServer();
}

createApp(App).mount('#app')
