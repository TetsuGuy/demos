import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons CSS


const app = createApp(App)
const store = createPinia()

app.use(store)
app.use(router)
app.use(vuetify)
app.mount("#app")
