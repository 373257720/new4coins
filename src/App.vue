<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <div id="bottom">
      <div class="bottom">
        <p>APK</p>
        <div class="bottommid">
          <ul>
            <li>About&nbsp;us</li>
            <li>Contact&nbsp;us</li>
            <li>User&nbsp;agreement</li>
            <li>Privacy&nbsp;treaty</li>
            <li>Legal&nbsp;statement</li>
            <li>Rate&nbsp;standard</li>
            <li>Problem&nbsp;feedback</li>
            <li>Novice&nbsp;tutorial</li>
          </ul>
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
  created() {
    var tokenData = sessionStorage.getItem("tokenData");
    //在页面加载时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem("store") ) {
    //     this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    // }

    // //在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener("beforeunload",()=>{
    //     sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    // })
  },
  methods: {
    focuson: function(event) {
      event.target.focus();
    }
  }
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
  /* text-indent: -230px; */
}
.btn {
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  #top .top {
   text-indent: 0px;
  }
}
@media screen and (min-width: 992px) {
  #top .top {
    text-indent: -30px;
  }
} 
@media screen and (min-width: 1200px) {
  #top .top {
    text-indent: -230px;
  }
} /* 大型设备（大台式电脑，1200px 起） */


/* 中型设备（台式电脑，992px 起） */

 /* 小型设备（平板电脑，768px 起） */
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
      width: 818px;
      margin: 0 auto;
    }
    ul {
      // margin-top:20;
      height: 20px;
      // display:flex;
      // width: 1200px;
      // margin-left: 200px;
      // overflow: hidden;

      li {
        float: left;
        font-size: 12px;
        // flex:1;
        color: #788aa2;
        margin-right: 20px;
      }
    }
    span {
      display: block;
      height: 20px;
      text-align: center;
      font-size: 1px;
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
  color: #7a8da6;
  font-size: 12px;

  // min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
