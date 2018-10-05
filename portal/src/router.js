import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      // this generates a separate chunk (Users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Users')
    }
  ]
})
