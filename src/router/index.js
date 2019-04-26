import Vue from 'vue'
import Router from 'vue-router'
import Growthcat from '@/components/Growthcat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Growthcat',
      component: Growthcat
    }
  ]
})
