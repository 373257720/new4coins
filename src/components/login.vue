<template>
  <div class="login">
    <div id="top">NETNOTE</div>
    <div class="content">
      <div class="box">
        <h1>WELCOME</h1>
        <div>
          <h3>Enter your name</h3>
          <p class="name">
            <el-input placeholder="Emails" v-model.trim="name" clearable autofocus v-focus></el-input>
          </p>
        </div>
        <div>
          <h3>Enter your password</h3>
          <p class="password">
            <el-input
              placeholder="Password"
              v-model.trim="password"
              clearable
              v-focus
              show-password
            ></el-input>
          </p>
        </div>
        <aside>{{this.warn}}</aside>
        <div class="btn" @click="goto1">SIGN&nbsp;&nbsp;IN</div>
      </div>
      <div class="photo">
        <img src="../assets/img.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
      warn: ""
    };
  },
  created() {
    // console.log(this.$baseurl.api);
  },
  methods: {
    //邮箱验证
    emailblur(e) {
      var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      // if (this.name) {
      if (!regEmail.test(this.name)) {
        // this.warn="888"
        // console.log(e.target);
        e.target.style.border = " 1px solid #f56c6c";
        // this.warn = "buzhengque";
      }

      // alert("邮箱格式不正确");
    },
    emailfocus(e) {
      this;
      e.target.style.border = "0";
    },

    goto1() {
      if (this.name && this.password) {
        // const url ="http://192.168.1.37:8080"
        this.warn = "";
        // this.$axios({
        //   method: "post",
        //   url: this.$baseurl + "/growthing-02/users/pcLogin",
        // url: 192.168.1.37:8080/growthing-02/users/pcLogin
        //   // headers: {
        //   //   "Content-type": "application/json"
        //   // },
        //   data: {
        //     email: this.name,
        //     password: this.password
        //   }
        // });
        this.$axios({
          method: "post",
          url: this.$baseurl + "/growthing-02/users/pcLogin",
          data: {
            email: this.name,
            password: this.password
          }
        })
          .then(res => {
            if (res.data.Status == "success") {
              console.log(res);
              this.$store.dispatch("setUser", this.name);
              sessionStorage.setItem("token", res.data.Token.access_token);
              this.$router.push({
                name: "home"
              });
            } else if (res.data.Status == "error") {
              if ("No session. Please do login." ==res.data.Message ) {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("username");
                this.$router.replace({
                  name: "login"
                });
              }
            } else {
              this.warn = "Incorrect username or password.";
            }
          })
          .catch(err => {
            //console.log(err); //错误信息
          });
      } else {
        this.warn = "name or password can not be empty";
      }
    }
  }
};
</script>
<style>
.name input.el-input__inner {
  background: #25262e;
  height: 40px;
  width: 474px;
  border-radius: 0px;
  border: 0;
  color: #aaaaaa;
  /* margin-bottom:30px; */
}
.password input.el-input__inner {
  background: #25262e;
  width: 474px;
  height: 40px;
  border-radius: 0px;
  border: 0;
  color: #aaaaaa;
}
/* // } */
</style>

<style lang="scss" scoped>
.content {
  height: 700px;
  width: 1200px;
  margin: 0 auto;
}

.box {
  height: 335px;

  width: 475px;
  color: #bec8d6;
  // background: white;
  margin: 80px 0 0 0;
  h1 {
    margin-bottom: 58px;
    font-size: 30px;
    font-weight: 700;
  }
  > div {
    h3 {
      height: 25px;
      font-size: 12px;
    }
  }
  > div:nth-child(2) {
    // height: 65px;
    margin-bottom: 30px;
  }
  aside {
    height: 55px;
    color: #bec8d6;
    font-size: 14px;
    color: #f56c6c;
    line-height: 55px;
    text-align: center;
  }
  .btn {
    height: 38px;
    width: 475px;
    background: #5ce2ee;
    border-radius: 20px;
    // margin-top: 13px;
    color: #25262e;
    line-height: 38px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
  }
}
.content {
  position: relative;
}
.photo {
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>

