// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
Vue.prototype.$axios = axios;
// Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false
//在Vue中要给input设置焦点，需要注册自定义指令
// Vue.directive('focus', function (el) {a
//   el.focus()
// })a
// Vue.directive('focus', {inserted(el)}
Vue.directive('focus', {
  inserted(el) {
    // console.log(el)
    el.onclick = function (e) {
      // console.log(e)
      if (e.target.nodeName == 'I') {
        console.log(this.querySelector('input'))
        this.querySelector('input').focus();
      }
    }
    // el.querySelector('input').focus();
  }
})
// 注册一个全局自定义指令 v-focus
// Vue.directive('focus', function (el) {
//     // 聚焦元素

//     el.focus()
//   }
// )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {
    App
  },
  template: '<App/>'
})
