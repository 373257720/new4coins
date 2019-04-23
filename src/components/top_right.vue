<template>
  <div class="top_right">
    <div @click="user" class="username">
      <img src="../assets/person_icon.png" alt>
      <span>{{this.$store.state.currentUser}}</span>
      <i>
        <img :class="[ok?'down':'up']" src="../assets/arrows.png" alt>
      </i>
    </div>
    <ul ref="username" v-show="ok">
      <li @click="go">
        <img src="../assets/history_icon.png" alt>
        History
      </li>
      <li @click="back">
        <img src="../assets/d5dde342f63280669d570442a3d8511.png" alt>
        sign&nbsp;out
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "topright",
  data() {
    return {
      ok: false //用户信息的开关
    };
  },
  methods: {
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
//    .top_right .el-button--text{
//         // color:#616a71;
//     }
</style>
<style lang="scss" scoped>
.top_right {
  z-index: 999999;
  cursor: pointer;
  float: right;
  font-size: 10px;
  position: relative;
  .username {
    height: 60px;
    i {
      .down {
        transform: rotate(-90deg);
        transition: all 0.2s;
      }
      .up {
        transition: all 0.2s;
      }
    }
    img {
      vertical-align: middle;
    }
    span {
      margin-left: 5px;
      margin-right: 5px;
      vertical-align: middle;
      color: #cbcfd8;
    }
  }
  ul {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    z-index: 3;
    border-radius: 3px;
    li {
      padding-left: 20px;
      box-sizing: border-box;
      line-height: 50px;
      img {
        vertical-align: middle;
        height: 14px;
        width: 14px;
        margin-right: 9px;
      }

      width: 120px;
      // text-align: center;
      color: #616a71;
      // line-height: 60px;
    }
  }
}
</style>