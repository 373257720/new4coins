// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import qs from "qs";
import 'element-ui/lib/theme-chalk/index.css'
import "./css/base.css";
import 'babel-polyfill' //ie浏览器
Vue.prototype.$qs = qs;
Vue.use(ElementUI);
// 全局函数
import global_func from "./global/global_func"

Vue.prototype.$global_func = global_func;
// Vue.use(global);

//实例化 store
import store from './store/index.js'
//让ajax携带cookie
axios.defaults.withCredentials = true;

// 引入公共组件
import language from './components/language.vue'
import top_right from './components/top_right.vue'
Vue.component('lang', language)
Vue.component('topright',top_right)


// 多语言设置
import VueI18n from 'vue-i18n'
import complex from './assets/language/complex';
import english from './assets/language/english';
import simple from './assets/language/simple'
Vue.use(VueI18n)
// var gg=this.$store.state.lang
// console.log(store.state.lang)
if (localStorage.getItem("lang")) {
  store.commit("currencylang", localStorage.getItem("lang"));
}
const i18n = new VueI18n({
  locale: store.state.lang,
  // 语言标识
  messages: {
    'English': english,
    'complex': complex,
    'simple': simple

  }
})

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

//设置baseurl
var baseurl = {
  //  api: "http://4coins.wearetechman.com",
  api: "http://113.52.134.95:8080",
  //  api: "http://192.168.1.37:8080",
}
Vue.prototype.$baseurl = baseurl.api

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
//然后再修改原型链
Vue.prototype.$axios = axios


//在Vue中要给input设置焦点，需要注册自定义指令
//重新获取焦点
Vue.directive('focus', {
  inserted(el) {
    // console.log(el)
    el.onclick = function (e) {
      if (e.target.nodeName == 'I') {
        // console.log(this)
        this.querySelector('input').focus();
      }
    }
  }
})

//判断token失效处理
axios.interceptors.response.use(response => {
  // if (response) {
  if (response.data.Status == "error") {
    if ("No session. Please do login." == response.data.Message) {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem("token");
      
      router.replace({
        name: "login"
      });
    }
  }
  // }
  return response;
}, error => {
  return Promise.reject(error.response.data) //返回接口返回的错误信息
})


new Vue({
  el: '#app',
  router,
  axios,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
})
