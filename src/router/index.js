import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CaseStudy from '@/components/CaseStudy'
import objects from '@/components/objects'
import casestudies from '@/components/casestudies'
import standards from '@/components/standards'
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
    },
    {
      path: '/objects',
      name: 'objects',
      component: objects
    },
    {
      path: '/casestudies',
      name: 'casestudies',
      component: casestudies
    },
    {
      path: '/standards',
      name: 'standards',
      component: standards
    }
  ]
})
