<template>
  <div class="forgetpassword1">
    <!-- <div id="top">TRANSFERS</div> -->
    <div id="top">
      <h2 class="btn" @click="goto('home')">NETNOTE</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content con">
      <div class="title">
        <!-- <img src="../assets/up.png" alt> -->
        <p>{{$t('forgetpassword.changepassword')}}</p>
      </div>
      <div class="box_password">
        <div class="inputaccout">
          <p>{{$t('forgetpassword.inputaccout')}}</p>
          <el-input v-model.trim="inputaccount" clearable></el-input>
        </div>
        <div class="GraphicVerificationCode">
          <p>{{$t('forgetpassword.getcode')}}</p>
          <div>
            <el-input v-model.trim="VerificationCode" clearable></el-input>
            <span class="code btn" @click="getcode">{{code}}</span>
            <!-- <span v-show="!show" class="count">{{count}} s</span> -->
          </div>
          <aside>{{this.warn}}</aside>
        </div>

        <div class="btn" @click="nextstep" v-if="show2">{{$t('forgetpassword.nextstep')}}</div>
        <div class="btn nextstep" v-else>{{$t('forgetpassword.nextstep')}}</div>
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
  computed: {
    show2: function() {
      if (this.inputaccount && this.VerificationCode) {
        return true;
      } else {
        this.warn = "";
        return false;
      }
    }
  },
  methods: {
    goto() {
      this.$router.push({
        name: "home"
      });
    },
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
      if (this.VerificationCode == this.code) {
        this.$axios
          .get(`${this.$baseurl}/coin4_project/users/exchange_history`, {
            params: {
              // limit: 100,
              // offset: 0
              // access_token: token
            }
          })
          .then(res => {
            if (res.data.status == "success") {
              this.exchangedata = res.data.records;
              // console.log(res.data.records)
            } else {
              this.warn = "Incorrect Accout";
            }
          })
          .catch(err => {
            //console.log(err); //错误信息
          });
      }
      //請求這個用戶是否存在
      else {
        this.warn = "Incorrect Verification Code";
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
        font-size: 14px;
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
          letter-spacing:8px;
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
    .nextstep {
      background: #30313b;
      color: #64656b;
    }
  }
}
</style>
