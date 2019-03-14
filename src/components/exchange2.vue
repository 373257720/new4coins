<template>
  <div class="exchange2">
    <div id="top">
      <div class="top con">EXCHANGE</div>
    </div>
    <div class="content list">
      <p>Fiat&nbsp;to&nbsp;Note</p>
      <div class="list_top">
        <img src="../assets/hkd.png" alt>
        <span>RMBn</span>
        <span>
          Balance:
          $
          <em>9999.9999</em>
        </span>
      </div>
      <div class="list_top sec">
        <img src="../assets/hkd.png" alt>
        <span>RMBn</span>
        <span>
          Balance:
          $
          <em>9999.9999</em>
        </span>
      </div>
      <div class="rate first" style="margin-top:28px;">
        <p>RMBn</p>
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
        <u>Max</u>
      </div>
      <div class="rate second">
        <p>RMBn</p>
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
        <u>Max</u>
      </div>
      <div class="rate_sign">1RMbn=1.1681HKD</div>
      <!-- <p>1RMBn = </p> -->
      <div class="btn" @click="goto">SUBMIT</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "exchange2",
  data() {
    return {
      input2: ""
    };
  },
  methods:{
       goto(){
       this.$router.push({
              name: "home"
        })
    },
  }
};
</script>
<style>
.rate .el-input__inner {
  border-radius: 0;
  background: #25262e;
  border: 0;
  color: #aaaaaa;
}
</style>

<style lang="scss" scoped>
.content {
  height: 700px;
  width: 1200px;
  margin-top: 70px;
  //   background:
  color: #ffffff;
  font-size: 20px;
  margin: 0 auto;
  .list_top {
    height: 50px;
    width: 468px;
    margin: 0 auto;
    background: #302f39;
    margin-bottom: 12px;

    img,
    span {
      //   line-height: 50px;
      vertical-align: middle;
    }
    img {
      margin: 7px 12px 0 12px;
    }
    > span:nth-child(2) {
      font-size: 20px;
      margin-right: 170px;
    }
    > span:nth-child(3) {
      font-size: 14px;
   
      //   margin-left:203px;
    }
  }
  .rate {
    margin: 0 auto;
    width: 470px;
    position: relative;
    // margin-bottom: 20px;
    u {
      position: absolute;
      right: 10px;
      top: 32px;
      cursor: pointer;
      color: #5ce2ee;
    }
    height: 62px;
    margin-bottom: 12px;
    input {
      background: #25262e;
      width: 470px;
      height: 40px;
      margin-bottom: 12px;
    }
  }
  > p {
    height: 50px;
    background: #302f39;
    line-height: 50px;
    padding-left: 62px;
    margin-bottom: 50px;
    margin-top: 36px;
  }
  .btn {
    height: 38px;
    width: 475px;
    background: #5ce2ee;
    border-radius: 20px;
    color: #25262e;
    line-height: 38px;
    text-align: center;
    font-weight: 700;
    margin: 0 auto;
  }
}


  
  .rate_sign {
    font-size: 12px;
    margin: 0 auto;
    width: 468px;
    margin-bottom: 45px;
  }

</style>

