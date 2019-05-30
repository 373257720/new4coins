<template>
  <div class="top_right fr">
    <!-- <div class="language fl">
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          {{gg}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="English">English</el-dropdown-item>
          <el-dropdown-item command="simple">简体中文</el-dropdown-item>
          <el-dropdown-item command="complex">繁體中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>-->
    <!-- <div  class="username fr"> -->
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        <img src="../assets/person_icon.png" alt>
        {{this.$store.state.currentUser}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="toprightdown">
        <el-dropdown-item command="history">
          <img src="../assets/history_icon.png" alt>
          <span>{{$t('topright.history')}}</span>
        </el-dropdown-item>
        <el-dropdown-item command="signout">
          <img src="../assets/d5dde342f63280669d570442a3d8511.png" alt>
          <span>{{$t('topright.signout')}}</span>
        </el-dropdown-item>
        <!-- <el-dropdown-item command="complex">繁體中文</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <img src="../assets/person_icon.png" alt>
      <span>{{this.$store.state.currentUser}}</span>
      <i>
        <img class="down" src="../assets/arrows.png" alt>
      </i>
      <ul ref="username" v-show="ok">
        <li @click="go">
          <img src="../assets/history_icon.png" alt>
          History
        </li>
        <li @click="back">
          <img src="../assets/d5dde342f63280669d570442a3d8511.png" alt>
          sign&nbsp;out
        </li>
    </ul>-->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "topright",
  data() {
    return {
      // languange: "English",
      ok: false //用户信息的开关
    };
  },

  created() {
    // if(this.$store.state.lang){
    //   console.log(this.$store.state)
    //   // this.languange=sessionStorage.getItem("lang", this.languange)
    //   // this.$i18n.locale=this.languange
    // }
  },
  methods: {
    handleCommand(command) {
      // console.log(command)
      if (command == "history") {
        this.go();
      }else if(command == "signout"){
        this.back();
      }
      // (this.$i18n.locale = command),
      //   // this.languange=command
      //   this.$store.commit("currencylang", command);
      // sessionStorage.setItem("lang", this.languange);
      // this.$message("click on item " + command);
    },

    // 点击用户弹出信息.
    user() {
      this.ok = !this.ok;
      let user = this.$refs.username;
      //  console.log(this.$refs.username)
    },

    //退出登录
    back() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      this.$router.push({
        name: "login"
      });
    },
    go() {
      this.$router.push({
        name: "history"
      });
    }
  }
};
</script>
<style lang="scss">
.toprightdown .el-dropdown-menu__item img {
   vertical-align:middle;
  height: 14px;
  width: 14px;
  margin-right:5px;
}
// #dropdown-menu-8804 {
//   .el-dropdown-menu {
//     top: 40px!important;
//   }
// }
</style>
<style lang="scss" scoped>
.top_right {
  z-index: 999999;
  // margin-right: 50px;
  cursor: pointer;
  float: right;
  font-size: 10px;
}
</style>