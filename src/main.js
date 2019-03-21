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
Vue.prototype.$axios = axios;
//实例化 store
import store from './store/index.js'
// Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false


//在Vue中要给input设置焦点，需要注册自定义指令
// Vue.directive('focus', function (el) {a
//   el.focus()
// })a
// Vue.directive('focus', {inserted(el)}
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
