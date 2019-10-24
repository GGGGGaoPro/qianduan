import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/login'
import Signin from '@/page/signin'
import Me from '@/page/me'
import Alter from '@/page/alter'
import S1 from '@/page/select01'
import main from '@/page/main'
import forum from '@/page/forum'
import classify from '@/page/classify'
import Guanzhu from '@/page/guanzhu'
import zuofa from '@/page/zuofa'
import dongtai from '@/page/dongtai'
import pinglun from '@/page/pinglun'
import tianjia from '@/page/tianjia'
import jiacai from '@/page/jiacai'
import ckxx from '@/page/ckxx'
import laixiaoxi from '@/page/laixiaoxi'

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
      // 选择爱好
      path: '/s1',
      name: 'S1',
      component: S1,
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
      //主页面
      path: '/main',
      name: 'main',
      component: main
    },
    {
      // 分类
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      // 讨论区
      path: '/forum',
      name: 'forum',
      component: forum
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
      // 关注
      path: '/guanzhu',
      name: 'guanzhu',
      component: Guanzhu,
    },
    {
      // 做法
      path: '/zuofa',
      name: 'zuofa',
      component: zuofa,
      meta: {isShow: true}
    },
    {
      // 动态
      path: '/dongtai',
      name: 'dongtai',
      component: dongtai,
      meta: {isShow: true}
    },
    {
      // 评论
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun,
      meta: {isShow: true}
    },
    {
      // 添加
      path: '/tianjia',
      name: 'tianjia',
      component: tianjia,
      meta: {isShow: true}
    },
    {
      // 添加菜谱
      path: '/jiacai',
      name: 'jiacai',
      component: jiacai,
      meta: {isShow: true}
    },
    {
      // 查看信息
      path: '/ckxx',
      name: 'ckxx',
      component: ckxx,
      meta: {isShow: true}
    },
    {
      // 来消息
      path: '/laixiaoxi',
      name: 'laixiaoxi',
      component: laixiaoxi,
      meta: {isShow: true}
    }
  ]
})
