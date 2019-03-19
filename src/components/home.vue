<template>
  <div>
    <div id="top">
      NETNOTE
      <span class="signout">
        <i>
          <img src="../assets/2e26699f27582e26d295c263d1e7c5c.png" alt>
        </i>
        <u @click="back">Sign out</u>
      </span>
    </div>
    <div class="content">
      <div class="trend" ref="mychart">
        <!-- <img src="../assets/2主界面_r2_c2.png" alt=""> -->
      </div>
      <variety
        v-for="(item,index) in tabs"
        :key="index"
        :son="tabs[index]"
        :walletson="walletdata[index]"
      ></variety>
      <div class="content_bottom">
        <div>
          <span @click="withdraw" class="btn">FIAT WITHDRAW</span>
          <span @click="exchange" class="btn">EXCHANGE</span>
        </div>
        <div>
          <span @click="deposit" class="btn">FIAT DEPOSIT</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts"; //引入图表
import variety from "@/components/variety";
export default {
  name: "home",
  data() {
    return {
      //图片数据
      walletdata: "",
      option: {
        xAxis: {
          data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#aaaaaa"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            // onZero: true,
            lineStyle: {
              color: "#aaaaaa",
              width: 1,
              type: "solid"
            }
          } /*横轴边框色*/
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            // onZero: true,
            lineStyle: {
              color: "#aaaaaa",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#aaaaaa"
            }
          }
        },
        series: [
          {
            type: "k",
            data: [
              [20, 30, 10, 35],
              [40, 35, 30, 55],
              [33, 38, 33, 40],
              [40, 40, 32, 42]
            ]
          }
        ]
      },
      tabs: [
        {
          id: 0,
          text: require("../assets/usd.png")
        },
        {
          id: 1,
          text: require("../assets/rmb.png")
        },
        {
          id: 2,
          text: require("../assets/jpy.png")
        },
        {
          id: 3,
          text: require("../assets/hkd.png")
        }
      ]
    };
  },
  components: {
    variety
  },
  // beforeMount() {
  //   var token = sessionStorage.getItem("token");
  //   console.log(token);
  // },
  mounted() {
    var token = sessionStorage.getItem("token");
    console.log(token);
    this.$axios({
      method: "get",
      url: "/haha/api/note/wallet_data",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer" + " " + token
      }
      // data: {
      //   keydatahash: this.name,
      //   password: this.password
      // }
    })
      .then(res => {
        console.log(res.data);
        if (token) {
          this.walletdata = res.data.Tokens;
        }
      })
      .catch(err => {
        console.log(err); //错误信息
      });
    //图片初始化实例
    var echart = echarts.init(this.$refs.mychart);
    echart.setOption(this.option);

  },

  methods: {
    hidePopoverPanel() {
      this.popoverPanelShow = false;
    },
    //退出登录
    back() {
      sessionStorage.removeItem("token");
      this.$router.push({
        name: "login"
      });
    },
    //点击跳到取现
    withdraw() {
      this.$router.push({
        name: "withdraw"
      });
    },
    //点击跳到兑换
    exchange() {
      this.$router.push({
        name: "exchange"
      });
    },
    //点击存款
    deposit() {
      this.$router.push({
        name: "deposit"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.signout {
  float: right;
  i {
    vertical-align: middle;
  }
  u {
    font-size: 16px;
    line-height: 60px;
    color: #bec8d6;
    cursor: pointer;
    // padding-right: 5%;
  }
}
.content {
  height: 870px;
  .content_bottom {
    width: 1200px;
    margin: 0 auto;
    font-size: 16px;
    padding-top: 4px;
    box-sizing: border-box;
    height: 70px;
    // padding-top: -10px;
    display: flex;
    justify-content: space-between;
    div:nth-child(1) {
      width: 396px;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        height: 50px;
        width: 180px;
        background: #5ce2ee;
        border-radius: 25px;
        color: #25262e;
        line-height: 50px;
        text-align: center;
        font-weight: 700;
      }
    }
    div:nth-child(2) {
      width: 495px;
      span {
        display: inline-block;
        height: 50px;
        width: 495px;
        background: #5ce2ee;
        border-radius: 25px;
        color: #25262e;
        line-height: 50px;
        text-align: center;
        font-weight: 700;
      }
    }
  }
}
.trend {
  width: 1200px;
  margin: 0 auto;
  height: 400px;
  margin-bottom: 40px;
}
</style>