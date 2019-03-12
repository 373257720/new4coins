<template>
  <div class="login">
    <div id="top">NETNOTE</div>
    <div class="content">
      <div class="box">
        <h1>WELCOME</h1>
        <div>
          <h3>Enter your name</h3>
          <p class="name">
            <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
          </p>
        </div>
        <div>
          <h3>Enter your password</h3>
          <p class="password">
            <el-input placeholder="请输入内容" v-model="password" clearable></el-input>
          </p>
        </div>
        <div class="btn">SIGN UP</div>
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
  border-radius: 0px;
  border: 0;
  color: #aaaaaa;
  /* margin-bottom:30px; */
}
.password input.el-input__inner {
  background: #25262e;
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
}
#top {
  height: 60px;
  background: #25262e;
  color: white;
  font-size: 24px;
  line-height: 60px;
  padding-left: 100px;
}
.box {
  height: 335px;

  width: 475px;
  color: #bec8d6;
  // background: white;
  margin: 110px 0 0 368px;
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
  }
}
.login {
  position: relative;
}
.photo {
  position: absolute;
  right: 381px;
  top: 148px;
}
</style>

