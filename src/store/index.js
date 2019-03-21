import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// vuex的使用
// 1.创建一个store
export default new Vuex.Store({
  // 2. 创建state数据交由store来管理
  //   modules:{
  //     cart,
  //     goods
  //   }
  state: {

    currentUser: null, //当前用户
    //isLogin: false //判断当前用户是否已经登录
  },
  getters: {
    // currentUser = state => state.currentUser,
    // export const isLogin = state => state.isLogin
    // salelist(state) {
    //   return state.cartlist.map(item => ({ ...item,
    //     price: item.price * 0.5
    //   }));
    // }
  },

  // 通过mutations修改state中的数据
  mutations: {
    // changeData(state, obj) { // store中的数据只能通过commit mutation来改变
    //   state.shuju = obj
    //   state.allpeople = obj.datas.list[7].data.column_images[0][0].img_url
    // }
    userStatus(state, user) {

      if (user) {
        state.currentUser = user
        //    state.isLogin = true
      } else if (user == null) {
        //退出的时候清空sessionStorage里的东西
        sessionStorage.setItem('userName', null);
        //  sessionStorage.setItem('userToke','');
        state.currentUser = null;
        //  state.isLogin = false;
      }

    }
  },

  // 负责操作mutations
  //   actions: {
  // getKuncun(context, payload) {
  //   // 请求服务器，获取库存信息

  // }
  actions: {
    // 封装一个 ajax 方法
    setUser(context, user) {
      // commit('userStatus',user)
      context.commit( 'userStatus', user )
      //context.commit('userStatus',user) // 通过接口获取的后台数据保存到store中，等待组件取用
     

    }
  }

  //   }
});
