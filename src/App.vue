<template>
  <div id="app">
    <div id="content">
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
    <div id="bottom">
      <div class="bottom">
        <p>APK</p>
        <div class="bottommid">
          <ul :class="this.$store.state.lang">
            <li>{{$t('home.AboutUS')}}</li>
            <li>{{$t('home.Contactus')}}</li>
            <li>{{$t('home.useragreement')}}</li>
            <li>{{$t('home.privacytready')}}</li>
            <li>{{$t('home.legalstatement')}}</li>
            <li>{{$t('home.ratestandard')}}</li>
            <li>{{$t('home.problemfeedback')}}</li>
            <li>{{$t('home.novicetutorial')}}</li>
          </ul>
        </div>
        <span>copyright@4coin web.2018</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // status: this.$store.state.lang,
      // statusText: ["ENGLISH", "繁體中文", "简体中文"]

      statusText: {
        0: ["span-delay", "进行中"],
        1: ["span-finish", "已完成"],
        2: ["span-rough", "未开始"]
      }
    };
  },
  computed: {
    // status: function() {
    //   for (var i = 0; i < statusText.length; i++) {
    //     if (statusText[i] == this.$store.state.lang) {
    //        console.log(i)
    //     }
    //   }
    // }
  },
  // watch:{
  //     status:function(newval, oldval){
  //         console.log(newval)
  //     }
  //     //    if (sessionStorage.getItem("lang")) {
  //     //   for (var i = 0; i < this.statusText.length; i++) {
  //     //     if (this.statusText[i] == sessionStorage.getItem("lang")) {

  //     //       this.status=i
  //     //       console.log(this.status)
  //     //     }
  //     //   }
  //     // }
  // },
  created() {
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("userName", this.$store.state.currentUser);
      localStorage.setItem("lang", this.$store.state.lang);
    });
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("userName")) {
      this.$store.commit("userStatus", sessionStorage.getItem("userName"));
    }
  },
  methods: {
    focuson(event) {
      event.target.focus();
    }
  }
};
</script>

<style>
/* @import "element-ui/lib/theme-chalk/index.css"; */
/* @import "./css/base.css"; */

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
  font-size: 30px;
  line-height: 60px;
  color: white;
  padding-left: 4%;
  padding-right: 10%;
}
#top h2 {
  width: 140px;
  float: left;
}

.btn {
  cursor: pointer;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  /* color: #999; */
  /* font-size: 16px; */
  opacity: 0.5;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  /* color: #999; */
  /* font-size: 16px; */
  opacity: 0.5;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  /* color: #999;
  font-size: 16px; */
  opacity: 0.5;
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
      width: 950px;
      margin: 0 auto;
    }
    .complex {
      // margin-top:20;
      height: 20px;
      display: flex;
      // width: 1200px;
      // margin-left: 200px;
      // overflow: hidden;
      li {
        font-size: 12px;
        flex: 1;
        color: #788aa2;
        margin-right: 20px;
        text-align: center;
      }
    }
    .simple {
      height: 20px;
      display: flex;
      // width: 1200px;
      // margin-left: 200px;
      // overflow: hidden;
      li {
        font-size: 12px;
        flex: 1;
        color: #788aa2;
        margin-right: 20px;
        text-align: center;
      }
    }

    .English {
      height: 20px;
      margin-left: 80px;
      li {
        float: left;
        font-size: 12px;
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
