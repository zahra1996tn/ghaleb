import { createRouter, createWebHistory } from 'vue-router'
import homepage from './components/home-page.vue'
import contactinfo from './components/contact-info'
import servicesuse from './components/services-use'
import aboutuse from './components/about-use'
import questionuser from './components/question-user'
import weblog from './components/web-log'
// import featureshome from './components/features-home'

const routes = [
    { path: '/', component: homepage },
    { path: '/contact', component: contactinfo },
    { path: '/about', component: aboutuse },
    { path: '/services', component: servicesuse },
    { path: '/question', component: questionuser },
    { path: '/weblog', component: weblog },
    { path: '/Possibilities', component: homepage }

]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router