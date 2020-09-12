import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import VuexTest from '@/components/VuexTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: VuexTest
    }
  ]
})
