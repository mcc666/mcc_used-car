/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import BuyCar from '../pages/BuyCar/BuyCar.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
    path:'/Home',
    component:Home,
    meta:{
      showFooter:true
    }
  },
    {
      path:'/BuyCar',
      component:BuyCar,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Login',
      component:Login
    },
    {
      path:'/',
      redirect:'/Home'
    }
  ]
})
