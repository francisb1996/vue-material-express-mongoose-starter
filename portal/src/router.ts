import Vue from 'vue'
import Router from 'vue-router'
import Reports from './views/Reports.vue'
import Applicants from './views/Applicants.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'applicants',
      component: Applicants
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
