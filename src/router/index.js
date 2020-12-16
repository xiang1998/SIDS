import Vue from 'vue'
import VueRouter from 'vue-router'
import Pages from '@/views/pages.vue'
import ExperimentList from '@/views/pages/ExperimentList.vue'
import ExperiInformation from '@/views/pages/ExperiInformation.vue'
import Transmission from '@/views/pages/Transmission.vue'
import TransInfomation from '@/views/pages/TransInfomation.vue'
import Information from '@/views/pages/Information.vue'
import Management from '@/views/pages/Management.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/pages',
    name: 'Pages',
    component:Pages,
    meta:{
      title: 'SID',
      keepAlive: true
    },
    children:[
      {
        path: 'ExperimentList',
        name: 'ExperimentList',
        component:ExperimentList, 
      },
      {
        path: 'ExperiInformation',
        name: 'ExperiInformation',
        component:ExperiInformation, 
      },
      {
        path: 'Transmission',
        name: 'Transmission',
        component:Transmission, 
      },
      {
        path: 'TransInfomation',
        name: 'TransInfomation',
        component:TransInfomation, 
      },
      {
        path: 'Information',
        name: 'Information',
        component:Information,  
      },
      {
        path: 'Management',
        name: 'Management',
        component:Management,  
      }
    ]
  },
  {
    path: '/public/About',
    name: 'About',
    component: resolve=>(require(["@/views/public/About.vue"],resolve)),
    meta:{
      title: '我是网页title',
      keepAlive: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: resolve=>(require(["@/views/login.vue"],resolve)),
    meta:{
      title: '登录',
      keepAlive: true
    }
  },
 
]

const router = new VueRouter({
  mode: 'hash',
  // base: '/h5/',
  routes
})
// const router = new VueRouter({
//   hashbang:false,//去除#！开头
//   transitionOnload:false,//初次加载的时候是否对<router-view>处理场景切换效果
//   history:true,//是否开启html5模式，去掉锚点
//   saveScrollPosition:false, //记住页面的滚动位置 html5模式适用,
//   root:'/dist',//路由生效的基础路径
//   routes
// });

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}
//动态修改页面title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title == undefined?'SID':to.meta.title
  //若路径异常则返回首页
  console.log('to',to)
  if(!to.name){
    next({
      path: '/pages',
    })
  }
  next();
})
export default router
