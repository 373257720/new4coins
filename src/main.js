// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import qs from "qs";
import 'babel-polyfill' //ie浏览器
Vue.prototype.$qs = qs;
// Vue.prototype.$axios = axios;
// 全局函数
import global_func from "./global/global_func"
Vue.prototype.$global_func = global_func;
// Vue.use(global);
//实例化 store
import store from './store/index.js'
axios.defaults.withCredentials = true; //让ajax携带cookie
// Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false
var baseurl = {
  api: "http://4coins.wearetechman.com",
  //  api:"http://113.52.134.95:8080",
  // api: "http://192.168.1.37:8080",

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
        // console.log(this.querySelector('input'))
        this.querySelector('input').focus();
      }
    }
    // el.querySelector('input').focus();
  }
})


new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: {
    App
  },
  template: '<App/>'
})
