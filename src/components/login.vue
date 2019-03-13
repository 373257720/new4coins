<template>
  <div class="login">
    <div id="top">
      <div class="top con">NETNOTE</div>
    </div>
    <div class="content">
      <div class="box">
        <h1>WELCOME</h1>
        <div>
          <h3>Enter your name</h3>
          <p class="name">
            <el-input placeholder="Emails" v-model="name" clearable></el-input>
          </p>
        </div>
        <div>
          <h3>Enter your password</h3>
          <p class="password">
            <el-input placeholder="Password" v-model="password" clearable></el-input>
          </p>
        </div>
        <div class="btn" @click="goto">SIGN UP</div>
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
      password: ""
    };
  },
  computed: {
 
  },
  methods: {
    //邮箱验证
    // sendEmail() {
    //   var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //   if (this.name == "") {
    //     alert("请输入邮箱");
    //   } else if (!regEmail.test(this.email)) {
    //     alert("邮箱格式不正确");
    //   }
    // },

    goto() {
         //邮箱验证
          
          // if(this.name==''){
          //     alert("请输入邮箱");
          // }else if(!regEmail.test(this.email)){
          //     alert("邮箱格式不正确");
          // }
          this.$router.push({
              name: "home"
            });

      // let postData = this.$qs.stringify({
      //   tel: this.name,
      //   password: this.password
      // });
      // this.$axios
      //   .post("http://39.108.252.230:4008/login", postData)
      //   .then(res => {
      //     if (res.data.code == 0) {
      //       this.infor = "您尚未注册";
      //     } else if (res.data.code == 2) {
      //       this.infor = "您输入的号码或密码有误";
      //     } else {
      //       let storage = { token: res.data.token, tel: res.data.data };
      //       storage = JSON.stringify(storage);
      //       localStorage.setItem("tokenData", storage);

      //       this.$router.push({
      //         name: "home"
      //       });
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
};
</script>
<style>
/* .name .el-input{
  height: 40px;
 
} */
/* // .name .password { */
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
    // height: 65px;
    margin-bottom: 30px;
    h3 {
      height: 25px;
      font-size: 12px;
    }
  }
  .btn {
    height: 38px;
    width: 475px;
    background: #5ce2ee;
    border-radius: 20px;
    margin-top: 60px;
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

