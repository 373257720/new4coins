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
      path: '/',
      redirect:{
          name:'login'
      }
    },
    
  ]
})
