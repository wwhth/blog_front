import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/gridTest.vue')
    },
    {
      path: '/articleList',
      name: 'articleList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/articleList/index.vue'),
      children: [
        {
          path: 'details',
          name: 'Details',
          component: () => import("../views/articleList/details.vue")
        }
      ]
    },
    // {
    //   path:'/details',
    //   name:'Details',
    //  component:()=>import("../views/articleList/details.vue")
    // }
  ]
})

export default router
