import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import App from './App.vue'

const router = createRouter({
  routes,
  history: createWebHistory()
})

createApp(App).use(router).mount('.app')
