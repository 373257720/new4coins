<template>
  <div class="forgetpassword1">
    <div id="top">TRANSFERS</div>
    <div class="content con">
      <div class="title">
        <!-- <img src="../assets/up.png" alt> -->
        <p>Forget password</p>
      </div>
      <div class="box_password">
        <div class="inputaccout">
          <p>Input accout</p>
          <el-input v-model="inputaccount" clearable></el-input>
        </div>
        <div class="GraphicVerificationCode">
          <p>Graphic Verification Code</p>
          <div>
            <el-input v-model="VerificationCode" clearable></el-input>
            <span class="code btn" @click="getcode">{{code}}</span>
            <!-- <span v-show="!show" class="count">{{count}} s</span> -->
          </div>
          <aside>{{this.warn}}</aside>
        </div>

        <div class="btn" @click="nextstep">Next step</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forgetpassword1",

  data() {
    return {
      show: true, //驗證碼開關
      count: "", //驗證碼倒計時
      timer: null,
      code: "Code",
      inputaccount: "",
      warn: null,
      VerificationCode: ""
    };
  },
  methods: {
    randomnum(num) {
      var str =
        "0123456789abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var arr = [];
      for (var i = 0; i < num; i++) {
        var random = parseInt(Math.random() * 62);
        var a = str.charAt(random);
        arr.push(a);
      }
      return arr.join("");
    },
    getcode() {
      this.code = this.randomnum(4);
      const TIME_COUNT = 5;
    },
    nextstep() {
      this.warn = "";
      if (this.inputaccount && this.VerificationCode) {
        if (dsf) {
          //請求這個用戶是否存在
        } else {
          this.warn = "Incorrect Accout or Verification Code";
        }
      } else {
        this.warn = "Accout or Verification Code can not be empty";
      }
    }
  }
};
</script>
<style>
.box_password .el-input__inner {
  background: #25262e;
  border-radius: 2px;
  border: 0;
  /* line-height: 40px; */
  height: 40px;
  color: #aaaaaa;
}
.box_password .GraphicVerificationCode .el-input--suffix {
  width: 283px;
  float: left;
}
</style>
<style lang="scss" scopd>
.content {
  height: 866px;
  position: relative;
  .title {
    height: 50px;
    width: 1200px;
    margin-top: 50px;
    background: #302f39;
    // margin-bottom: 60px;
    color: #ffffff;
    font-size: 20px;
    p {
      float: left;
      // display: inline;
      line-height: 50px;
      font-size: 18px;
      padding-left: 19px;
      height: 50px;
    }
  }
  .box_password {
    margin-top: 50px;
    > div {
      height: 60px;
      width: 468px;
      margin: 0 auto 32px auto;
      p {
        color: #bec8d6;
        margin-bottom: 5px;
        //  height: 16px;
        font-size: 16px;
        line-height: 16px;
      }
    }
    .GraphicVerificationCode {
      margin-bottom: 55px;
      aside {
        text-align: center;
        height: 55px;
        line-height: 55px;
        color: #f56c6c;
      }
      div {
        height: 40px;
        .code {
          display: block;
          height: 40px;
          width: 178px;

          background: white;
          float: right;
          color: #2e4b53;
          border-radius: 2px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
    .btn {
      width: 468px;
      height: 40px;
      background: #5ce2ee;
      border-radius: 45px;
      margin: 0 auto;
      line-height: 40px;
      color: #2e4b53;
      text-align: center;
    }
  }
}
</style>
