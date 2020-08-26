import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'   //引入首页组件

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path:'/food',
     component: () => import(/* webpackChunkName: "food" */ '../views/Food.vue')
  },
  {
    path:'/detalisfd/:uid',
     component: () => import(/* webpackChunkName: "detalisfd" */ '../views/Detalisfd.vue'),
    props:true
  },
  {
    path:'/finefood',
     component: () => import(/* webpackChunkName: "finefood" */ '../views/FineFood.vue')
  },
  {
    path:'/product/:fid',
     component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props:true
  },
  {
    path:'/login',
     component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path:'/loginzc',
     component: () => import(/* webpackChunkName: "loginzc" */ '../views/Login-zc.vue')
  },
  {
    path:'/cultuer',
     component: () => import(/* webpackChunkName: "cultuer" */ '../views/Cultuer.vue')
  },
  {
    path:'/index1',
     component: () => import(/* webpackChunkName: "index1" */ '../views/Index1.vue')
  },
  {
    path:'/shopping',
     component: () => import(/* webpackChunkName: "shopping" */ '../views/Shopping.vue')
  },
  {
    path:'*',
     component: () => import(/* webpackChunkName: "arror" */ '../views/Arror.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
