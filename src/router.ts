import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// webpackPrefetch supports numbers for prioritization. Higher numbers get loaded first.
const AsyncAbout = () => import(/* webpackChunkName: "about", webpackPrefetch: 1 */'./views/About.vue')

/// the following lines will be useful as soon as SSR is supported
// const isServer = typeof window === 'undefined'
// const history = isServer ? createMemoryHistory() : createWebHistory()

const history = createWebHistory()

export default createRouter({
  history,
  strict: true,
  routes: [
    { path: '/', name: 'Home', component: Home },
    // async component gets prefetched in supporting browsers
    { path: '/about', name: 'About', component: AsyncAbout }
  ]
})
