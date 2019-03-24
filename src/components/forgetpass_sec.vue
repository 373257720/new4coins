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
        <div class="GraphicVerificationCode">
          <p>Confirm the new password</p>
          <div>
            <el-input v-model="input10" clearable></el-input>
          </div>
        </div>
        <div class="GraphicVerificationCode">
          <p>Your mailbox</p>
          <div>
            <el-input v-model="input10"></el-input>
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
}
</script>
