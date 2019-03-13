<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <div id="bottom">
      <div class="bottom">
        <p>APK</p>
        <div class="bottommid">
          <el-row :gutter="20" type="flex">
            <el-col :span="3">
              <div class="grid-content bg-purple">About us</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">Contact us</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">User agreement</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">Privacy treaty</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">Legal statement</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">Rate standard</div>
            </el-col>
            <el-col :span="3" :pull="0">
              <div class="grid-content bg-purple">Problemfeedback</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">Novice tutorial</div>
            </el-col>
          </el-row>
        </div>
        <span>copyright@4coin web.2018</span>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// 把axios写入Vue的原型对象，方便后面调用
// Vue.prototype.$axios = axios;
export default {
  name: "App",
  data() {
    return {};
  },
  // methods: {
  //   goto(path) {
  //     this.$router.replace({
  //       path
  //     });
  //   }
  // }
  // data: {
  //   currentRoute: window.location.pathname
  // },
  // computed: {
  //   ViewComponent() {
  //     return routes[this.currentRoute] || NotFound;
  //   }
  // },
  // render(h) {
  //   return h(this.ViewComponent);
  // }
};
</script>

<style >
@import "element-ui/lib/theme-chalk/index.css";
@import "./css/base.css";




/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#top {
  height: 60px;
  background: #25262e;
  font-size: 24px;
  line-height: 60px;
}
#top .top {
  height: 60px;
  color: white;
  text-indent: -230px;
}
</style>
<style lang="scss" scoped>
#content {
  // height: 880px;
  // margin-top:70px;
  background: #363541;
}
#bottom {
  height: 150px;
  background: #363541;
  .bottom {
    height: 150px;
    // width: 1200px;
    background: url(./assets/8d783f25abe6dcaacbfac4386e5b7ac.png) no-repeat;
    background-size: cover;
    p {
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      height: 80px;
      line-height: 80px;
    }
    .bottommid {
      width: 1200px;
      margin: 0 auto;
    }
    // ul {
    //   // margin-top:20;
    //   height: 20px;
    //   display:flex;
    //   width: 1200px;
    //   // margin-left: 200px;
    //   overflow: hidden;

    //   li {
    //     // float: left;
    //     // flex:1;
    //     color: #788aa2;
    //     // margin-right: 30px;
    //   }
    // }
    span {
      display: block;
      height: 20px;
      text-align: center;
      font-size: 12px;
      margin-top: 20px;
      color: #4d5c6f;
    }
  }
}
.el-row {
  // margin: 0 100px 100px 0;
  // width: 1200px;

  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  // background: #d3dce6;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  // min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
