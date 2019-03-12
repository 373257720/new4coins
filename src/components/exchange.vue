<template>
  <div class="exchange">
    <div id="top">
      <div class="top con">
        EXCHANGE
      </div>
      </div>
    <div class="content">
      <div class="list">
        <p>Fiat&nbsp;to&nbsp;Coin</p>
        <div class="common">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="small">
            <img src="../assets/1552372995.png" alt>
          </span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value2"
              :label="item.label2"
              :value="item.value2"
            ></el-option>
          </el-select>
        </div>
        <p>Coin&nbsp;to&nbsp;Coin</p>
        <div class="common">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="small">
            <img src="../assets/1552372995.png" alt>
          </span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <p>Coin&nbsp;to&nbsp;Fiat</p>
        <div class="common" style="margin-bottom:75px;">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label2"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="small">
            <img src="../assets/1552372995.png" alt>
          </span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
         <div class="btn">SUBMIT</div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "exchange",
  data() {
    return {
      options: [
        {
          value: "01",
          value2:'01',
          //   value2:'选项2',
          label: "HKD",
          label2: "HKDn"
        },
        {
          value: "02",
          value2:'02',
          //   value2:'选项2',
          label: "JPY",
          label2: "JPYn"
        },
        {
          value: "03",
          value2:'03',
          label: "RMB",
          label2: "RMBn"
        },
        {
          value: "04",
          value2:'04',
          label: "USD",
          label2: "USDn"
        }
      ],
      value: "",
        value2: ""
    };
  }
};
</script>
<style>
.list .common .el-input__inner {
  border-radius: 0;
  background: #25262e;
  border: 0;
  color: #aaaaaa;
  width: 200px;
}
/* .pic .el-icon-plus{
        display: inline-block;
         width: 468px;
        height: 222px;  
        text-align: center;
    } */
</style>
<style lang="scss" scoped>

.content {
  height: 800px;
  padding-top: 65px;
  box-sizing: border-box;
}
.list {
  height: 120px;
  width: 1200px;
  margin-top: 70px;
  //   background:
  color: #ffffff;
  font-size: 20px;
  margin: 0 auto;
  > p {
    height: 50px;
    background: #302f39;
    line-height: 50px;
    padding-left: 62px;
    margin-bottom: 33px;
  }
  .common {
    height: 40px;
    width: 455px;
    margin: 0 auto;
    margin-bottom: 46px;
    img,
    input {
      vertical-align: middle;
      //   vertical-align: middle;
    }
  }
}
.btn {
    height: 38px;
    width: 475px;
    background: #5ce2ee;
    border-radius: 20px;
    // margin-top: 126px;
    color: #25262e;
    line-height: 38px;
    text-align: center;
    font-weight: 700;
    margin: 0 auto;
  }
</style>


