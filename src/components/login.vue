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
        <div class="btn" @click="goto">SIGN&nbsp;&nbsp;IN</div>
      </div>
      <div class="photo">
        <img src="../assets/img.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
// import jquery from "jquery";
import $ from 'jquery'
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
      warn: ""
    };
  },
  computed: {
    //  focuson: function(name, event) {
    //   if (this.name=="") {
    //     console.log(event)
    //     // .focus();
    //   }
    //   //  console.log(event)
    // },
  },
  methods: {
    // 清空输入框重新获取焦点
    // focus(){},
    //邮箱验证
    // sendEmail() {
    //   var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //   if (this.name == "") {
    //     alert("请输入邮箱");
    //   } else if () {
    //     alert("邮箱格式不正确");
    //   }
    // },

    goto() {
      //邮箱验证
      if (this.name && this.password) {
        this.warn = "";
        //  var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        //       if(!regEmail.test(this.name){
        //           this.warn='你的邮箱地址有误';
        //       }
        //       // this.$router.push({
        //       //   name: "home"
        //       // });
        //   // if (this.name == "") {
        //   //   alert("请输入邮箱");
        //   } else {
        //       this.warn='Please enter your email address or password'
        //   }
        let postData = JSON.stringify({
          keydatahash: this.name,
          password: this.password
        });
        // console.log(posa.name);
        // this.$axios
        //   .post("/api/note/login", postData, {
        //     headers: { "Content-type": "application/json" }
        //   })
        //   .then(res => {
        //     console.log(res);
        //   }) ;
        // $.ajax({
        //   url: "/api/note/login", //请求的url地址
        //   headers: { 
		    //         "Content-type": "application/json" 

        //   },
        //   dataType: "json", //返回格式为json
        //   async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        //   data: { keydatahash: this.name,password:this.password }, //参数值,键值对
        //   type: "POST", //请求方式
        //   beforeSend: function() {
        //     //请求前的处理
        //   },
        //   success: function(req) {
        //     //请求成功时处理
        //     console.log(req)
        //   },
        //   complete: function() {
        //     //请求完成的处理
        //   },
        //   error: function() {
        //     //请求出错处理
        //   }
        // });
          this.$axios
            .post("/api/api/note/login", {
              headers: {
                "Content-type": "application/json"
              },
              data: {
                keydatahash: this.name,
                password: this.password
              }
            })
            .then(res => {
              console.log(res.data);
              let storage = { token: res.data.token };
              storage = JSON.stringify(storage);
              sessioStorage.setItem("tokenData", storage);
              this.$router.push({
                // name: "home"
              });
            })
            .catch(error => {
              console.log(error);
            });
      } else {
        this.warn = "name or password can not be empty";
      }
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
    height: 14px;
    color: #bec8d6;
    font-size: 14px;
    color: red;
  }
  .btn {
    height: 38px;
    width: 475px;
    background: #5ce2ee;
    border-radius: 20px;
    margin-top: 13px;
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

