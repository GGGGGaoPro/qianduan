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
      // 注册
      path: '/',
      name: 'Signin',
      component: Signin,
      meta: {isshow: true
      }
    },
    {
      // 登录
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
      // 我的
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      // 修改信息
      path: '/alter',
      name: 'Alter',
      component: Alter,
      meta: {isshow: true
      }
    },
    {
      // 选择爱好
      path: '/s1',
      name: 'S1',
      component: S1,
      meta: {isshow: true
      }
    }
  ]
})
