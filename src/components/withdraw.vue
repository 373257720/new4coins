<template>
  <div class="withdraw">
    <div id="top">
      <h2 class="topbtn" @click="goto('home')">WITHDRAW</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content">
      <div class="content_first">
        <p>
          <span>Fiat</span>
          <span>
            Available balance $
            <em>99999.99999</em>
            <span>RMB</span>
          </span>
        </p>
        <div class="choose">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="rate_first" style="margin-top:28px;">
        <p>RMBn</p>
        <el-input v-model.trim="input3" placeholder="请输入内容"></el-input>
        <u>Max</u>
      </div>
      <div class="btn" @click="goto" v-if="withdraw_switch">{{$t('withdraw.Submit')}}</div>
      <div class="btn submit" v-if="!withdraw_switch">{{$t('withdraw.Submit')}}</div>
    </div>
  </div>
</template>
<script>
// import topright from "@/components/top_right";
export default {
  name: "withdraw",
  components:{
    // topright
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "HKD"
        },
        {
          value: "选项2",
          label: "JPY"
        },
        {
          value: "选项3",
          label: "RMB"
        },
        {
          value: "选项4",
          label: "USD"
        }
      ],
      value: "",
      input3: ""
    };
  },
  computed: {
    withdraw_switch: function() {
      if (this.value && (this.input3 || this.input3 === 0)) {
        return true;
      } else {
        false;
      }
    }
  },
  methods: {
    goto() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style>
.choose .el-input__inner {
  border-radius: 0;
  background: #25262e;
  border: 0;
  color: #bec8d6;
  width: 468px;
}
.rate_first .el-input__inner {
  border-radius: 0;
  background: #25262e;
  border: 0;
  color: #bec8d6;
  width: 468px;
}
</style>

<style lang="scss" scoped>
.content {
  height: 800px;
  width: 468px;
  margin: 0 auto;
  color: #aaaaaa;
  margin-top: 90px;
  .content_first {
    // height: 63px;
    p {
      width: 468px;
      // display: flex;
      font-size: 14px;
      margin-bottom: 10px;
      > span:nth-child(1) {
        margin-right: 215px;
        padding-left: 2px;
      }
      > span:nth-child(2) {
        font-size: 12px;
      }
    }
  }
  .rate_first {
    position: relative;
    p {
      width: 468px;
      display: flex;
      font-size: 14px;
      margin-bottom: 10px;
    }
    u {
      position: absolute;
      right: 8px;
      top: 35px;
      color: #5ce2ee;
    }
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
 .submit {
    background: #30313b;
    color: #64656b;
  }
  .topbtn{
    cursor: pointer;
  }
</style>


