<template>
  <div class="forgetpassword2">
    <div id="top">
      <h2 class="btn" @click="goto('home')">NETNOTE</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content con">
      <div class="title">
        <!-- <img src="../assets/up.png" alt> -->
        <p>Forget password</p>
      </div>
      <div class="box_password">
        <div class="inputaccout">
          <p>New password</p>
          <el-input
            v-model.trim="newpassword"
            clearable
            autofocus
            v-focus
            show-password
            @focus="dispear"
          ></el-input>
          <span v-if="!newpasswordreg" class="judge">password can not be empty</span>
        </div>
        <div class="inputaccout">
          <p>Confirm the new password</p>
          <div>
            <el-input
              v-model.trim="confirmpassword"
              clearable
              v-focus
              show-password
              @focus="dispear"
              @blur="confirm"
            ></el-input>
            <span v-if="!judge" class="judge">Not consistent with the first password entered</span>
            <!-- <el-input v-model="confirmpassword" clearable v-focus></el-input> -->
          </div>
        </div>
        <div class="mailbox inputaccout">
          <p>Your mailbox</p>
          <div>
            <!-- <el-input></el-input> -->
            <span class="el-input__inner"></span>
          </div>
        </div>
        <div class="GraphicVerificationCode">
          <p>Mailbox Verification Code</p>
          <div>
            <el-input v-model="Mailbox" clearable v-focus></el-input>
            <span v-show="show" class="code" @click="getCode">code</span>
            <!-- <span v-show="show" @click="getCode"></span> -->
            <span v-show="!show" class="code miao">{{count}} s</span>
            <span v-if="!judgecode" class="judge">Incorrect Verification Code</span>
          </div>
        </div>
        <div class="btn" @click="submit" v-if="submitok">SUBMIT</div>
        <div class="btn submitok" v-if="!submitok">SUBMIT</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forgetpassword2",
  data() {
    return {
      newpassword: "",
      confirmpassword: "",
      Mailbox: "",
      Code: "",
      show: true,
      count: "",
      timer: null,
      judge: true,
      judgecode: true,
      newpasswordreg: true
      // submitok: false
    };
  },
  computed: {
    submitok: function() {
      if (
        this.newpassword &&
        this.confirmpassword &&
        this.Mailbox &&
        this.newpassword === this.confirmpassword
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    //驗證密碼是否相等
    goto() {
      this.$router.push({
        name: "home"
      });
    },
    dispear(e) {
      var e = e.target;
      e.style.border = 0;
      this.judge = true;
      this.newpasswordreg = true;
    },
    remind(e) {
      var e = e.target;
    },
    confirm(e) {
      if (this.confirmpassword !== this.newpassword) {
        var e = e.target;
        e.style.border = "1px solid #f56c6c";
        this.judge = false;
      }
      if (this.newpasswordreg == false) {
        this.newpasswordreg = true;
      }
      //  console.log(e.target)

      //  var afterStyle = window.getComputedStyle(e, ":after");
      //  afterStyle="1111"
    },
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    submit() {
      // this.judgecode=true
      if (this.judgecode) {
        // this.submitok=true
        // $refs.submit.style.background="whtie"
        // console.log($refs.sub);
        // }
      } else {
        // console.log("")
        this.judgecode = false;
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
.mailbox .el-input__inner {
  background: #30313b;
}
</style>

<style lang="scss" scoped>
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
    .judge {
      position: absolute;
      top: 33px;
      left: 480px;
      color: #f56c6c;
      font-size: 14px;
      width: 300px;
    }
    .inputaccout {
      position: relative;
    }
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
      position: relative;
      margin-bottom: 55px;
      div {
        height: 40px;
        .code {
          display: block;
          height: 40px;
          width: 178px;

          background: #5ce2ee;
          float: right;
          border-radius: 2px;
          text-align: center;
          line-height: 40px;
        }
        .miao {
          background: #30313b;
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
    .submitok {
      background: #30313b;
      color: #64656b;
    }
  }
}
</style>

