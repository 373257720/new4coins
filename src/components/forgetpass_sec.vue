<template>
  <div class="forgetpassword2">
    <div id="top">TRANSFERS</div>
    <div class="content con">
      <div class="title">
        <!-- <img src="../assets/up.png" alt> -->
        <p>Forget password</p>
      </div>
      <div class="box_password">
        <div class="inputaccout">
          <p>New password</p>
          <el-input v-model="input10" clearable></el-input>
        </div>
        <div class="inputaccout">
          <p>Confirm the new password</p>
          <div>
            <el-input v-model="input10" clearable></el-input>
          </div>
        </div>
        <div class="mailbox inputaccout">
          <p>Your mailbox</p>
          <div>
            <el-input></el-input>
          </div>
        </div>
        <div class="GraphicVerificationCode">
          <p>Mailbox Verification Code</p>
          <div>
            <el-input v-model="input10" clearable></el-input>
            <span class="code">code</span>
          </div>
        </div>
        <div class="btn">SUBMIT</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'forgetpassword2',
    data(){
      return{
        input10:''
      }
    }
}
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
.mailbox .el-input__inner{
  background:#30313B;
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

