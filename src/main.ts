import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import makeServer from "./server.js";

if (
    import.meta.env.DEV &&
    typeof makeServer === "function"
) {
    makeServer();
}

createApp(App).mount('#app')
