<template>
  <div class="exchange">
    <div id="top">EXCHANGE</div>
    <div class="content">
      <div class="list">
        <p>Fiat&nbsp;to&nbsp;Note</p>
        <div class="common">
          <el-select v-model="Ftocoin" placeholder="-">
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
          <el-select v-model="Ftocoin" placeholder="-">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label2"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <p>Note&nbsp;to&nbsp;Note</p>
        <div class="common">
          <el-select v-model="coin1" placeholder="-">
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
          <el-select v-model="coin2" placeholder="-">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label2"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <p>Note&nbsp;to&nbsp;Fiat</p>
        <div class="common" style="margin-bottom:75px;">
          <el-select v-model="Ctofiat" placeholder="-">
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
          <el-select v-model="Ctofiat" placeholder="-">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="btn" @click="exchange2" v-if="exchange_switch">SUBMIT</div>
        <div class="btn submit" v-if="!exchange_switch">SUBMIT</div>
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
          value: 'HKD',
          label: "HKD",
          label2: "HKDn"
        },
        {
          value: 'JPY',
          label: "JPY",
          label2: "JPYn"
        },
        {
          value: 'RMB',
          label: "RMB",
          label2: "RMBn"
        },
        {
          value: 'USD',
          label: "USD",
          label2: "USDn"
        }
      ],

      Ftocoin: "",
      coin1: "",
      coin2: "",
      Ctofiat: ""
    };
  },
  //监听一行输入框，其他2行输入框清空
  watch: {
    Ftocoin: function(newval, oldval) {
      // console.log(newval, oldval);
      if (this.Ftocoin) {
        this.coin1 = "";
        this.coin2 = "";
        this.Ctofiat = "";
      }
      // this.Ftocoin = "";
    },
    coin1: function(newval, oldval) {
      if (this.coin1) {
        this.Ftocoin = "";
        this.Ctofiat = "";
      }
    },
    coin2: function(newval, oldval) {
      if (this.coin2) {
        this.Ftocoin = "";
        this.Ctofiat = "";
      }
    },
    Ctofiat: function(newval, oldval) {
      if (this.Ctofiat) {
        this.Ftocoin = "";
        this.coin1 = "";
        this.coin2 = "";
      }
    }
  },
  created(){
    //  console.log(this.Ftocoin) 
  },
  computed: {
    exchange_switch: function() {
      if (this.Ftocoin || this.coin1 &&this.coin2 ||this.Ctofiat) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    // nowchange(){
    //     this.coin1='',
    //     this.coin2=''
    // },
    exchange2() {
      if (this.Ftocoin) {
        this.$router.push({
          name: "exchange2",
          params: {
            idx: 0,
            leftnum:this.Ftocoin,
            rightnum:this.Ftocoin,
          
          }
        });
      }
      if (this.coin1) {
        this.$router.push({
          name: "exchange2",
          params: {
            idx: 1,
            leftnum:this.coin1,
            rightnum:this.coin2,
          }
        });
      }
      if (this.Ctofiat) {
        this.$router.push({
          name: "exchange2",
          params: {
            idx: 2,
            leftnum:this.Ctofiat,
            rightnum:this.Ctofiat,
          }
        });
      }
    }
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
.submit {
  background: #30313b;
  color: #64656b;
}
</style>


