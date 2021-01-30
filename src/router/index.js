import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页
  {
    path: '/',
    name: 'Login',
    component: ()=>import('../views/Login')
  },
  // 主页
  {
    path: '/home',
    name: 'Home',
    redirect:'/home/index',
    component: () => import('../views/Home'),
    children:[
      // 首页
      {
        path:'/home/index',
        name:'HomeIndex',
        component:()=>import('views/home/Index'),
        meta:{
          title:'首页'
        }
      },
      // 商品管理
      {
        path:'/product/index',
        name:'ProductIndex',
        component:()=>import('views/shop/Product'),
        meta:{
          title:'商品管理'
        }
      },
      // 商品详情页
      {
        path:'/product/detail',
        name:'Product/Detail',
        component:()=>import('views/shop/Detail'),
        meta:{
          title:'商品详情'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
