import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Me from '@/page/me'
import Find from '@/page/find'
import List from '@/page/list'
import Login from '@/page/login'
import Signin from '@/page/signin'
import Alter from '@/page/alter'
import S1 from '@/page/select01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin,
      meta: {isshow: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {isshow: true
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/alter',
      name: 'Alter',
      component: Alter,
      meta: {isshow: true
      }
    },
    {
      path: '/s1',
      name: 'S1',
      component: S1,
      meta: {isshow: true
      }
    }
  ]
})
