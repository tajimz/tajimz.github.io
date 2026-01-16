import Aboutview from '@/views/Aboutview.vue'
import Contactview from '@/views/Contactview.vue'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name: 'about',
      component: Aboutview
    },{
      path:'/contact',
      name: 'contact',
      component: Contactview
    },{
      path:'/blogs',
      name: 'blogs',
      component: BlogView
    }
  ],
})

export default router
