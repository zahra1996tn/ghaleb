import { createApp } from 'vue'
import App from './App.vue'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'hbootstrap4rtl/bootstrap-rtl.css'
const app = createApp(App)
app.use(router)
app.use(AOS.init())
    // app.use(BootstrapVue)
    // app.use(BootstrapVueIcons)
app.mount('#app')