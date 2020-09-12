import Vue from 'vue'
import About from './components/view/about'
import View from './components/view/view'
import VueRouter from './kvue-router'


// 插件注册
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: '/', component: About},
    {path: '/view', component: View}
  ]
})
