import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import send from '@/components/send'
import receive from '@/components/receive'
import deposit from '@/components/deposit'
import exchange from '@/components/exchange'
import exchange2 from '@/components/exchange2'
import withdraw from '@/components/withdraw'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/send',
      name: 'send',
      component: send
    },
    {
      path: '/receive',
      name: 'receive',
      component: receive
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: deposit
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange,
    },
    {
      path: '/exchange2',
      name: 'exchange2',
      component: exchange2
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    {
      path: '*',
      name: 'login',
      component: login
    },
    {
      path: '/',
      redirect:{
          name:'login'
      }
    },
    
    
  ]
})

// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
//   let isLogin = global.isLogin;  // 是否登录
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {  
//     if (!isLogin) {
//       console.log('what fuck');
//       router.push({ name: 'login' })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   if (to.name === 'login') {
//     if (isLogin) {
//       router.push({ name: 'home' });
//     }
//   }
//   next();
// });

// 全局路由守卫
// 在进入某个路由前执行的代码
// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){
//     // 判断是否登录
//     let token = sessionStorage.getItem('token');
//     // 发送ajax请求给后端进行验证
    
//     // axios.get('/verifytoken').then(res=>{
//       // 验证通过则放行，否则回到登录界面
//       // let data = res.data;
//       if(token){
//         // if(router.app.$store.state.token){
//             next();
//         }else{
//             next({
//                 path:'/login'
//             })
//         }
//     // })
    
//   }else{
//     // 要进入to路由，必须调用next()方法
//       next();
//   }
// });
// router.afterEach((to,from)=>{
//   console.log('after')
// })

