import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CaseStudy from '@/components/CaseStudy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/casestudy',
      name: 'CaseStudy',
      component: CaseStudy
    }
  ]
})
