import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CaseStudy from '@/components/CaseStudy'
import objects from '@/components/objects'
import casestudies from '@/components/casestudies'
import standards from '@/components/standards'
import aboutUs from '@/components/aboutUs'
import standard from '@/components/standard'
import feedback from '@/components/feedback'
import contactUs from '@/components/contactus'
import 'element-ui/lib/theme-chalk/index.css'
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
    },
    {
      path: '/aboutus',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/standard',
      name: 'standard',
      component: standard
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
