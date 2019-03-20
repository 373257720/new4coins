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

const routes = [{
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      keepAlive: true, // 需要被缓存
      requireAuth: true
    }
  },
  {
    path: '/send',
    name: 'send',
    component: send,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/receive',
    name: 'receive',
    component: receive,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: deposit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: exchange,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/exchange2',
    name: 'exchange2',
    component: exchange2,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: withdraw,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '*',
    name: 'login',
    component: login
  },
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
]

// export default new Router({
//   routes: [
//     {
//       path: '/login',
//       name: 'login',
//       component: login
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: home
//     },
//     {
//       path: '/send',
//       name: 'send',
//       component: send
//     },
//     {
//       path: '/receive',
//       name: 'receive',
//       component: receive
//     },
//     {
//       path: '/deposit',
//       name: 'deposit',
//       component: deposit
//     },
//     {
//       path: '/exchange',
//       name: 'exchange',
//       component: exchange,
//     },
//     {
//       path: '/exchange2',
//       name: 'exchange2',
//       component: exchange2
//     },
//     {
//       path: '/withdraw',
//       name: 'withdraw',
//       component: withdraw
//     },
//     {
//       path: '*',
//       name: 'login',
//       component: login
//     },
//     {
//       path: '/',
//       redirect: {
//         name: 'login'
//       }
//     },
//   ],

// })
let router = new Router({
  // mode:'history',
  routes
});
// 全局路由守卫
// 在进入某个路由前执行的代码
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token');
  if (to.meta.requireAuth) {
    // 判断是否登录
    if (token) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (to.path === '/login' && token) {
      next({
        path: '/home'
      });
    } else {
      next();
    }
    // 要进入to路由，必须调用next()方法

  }
});
// router.afterEach((to, from) => {
//   console.log('after')
// })

export default router;


