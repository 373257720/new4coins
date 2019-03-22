<template>
  <div>
    <div id="top">
      NETNOTE
      <div class="top_right">
        <div @click="user" class="username">
          <img src="../assets/person_icon.png" alt>
          <span>{{this.$store.state.currentUser}}</span>
          <i>
            <img :class="[ok?'down':'up']" src="../assets/arrows.png" alt>
          </i>
        </div>
        <ul ref="username" v-show="ok">
          <li @click="deposit">
            <img src="../assets/history_icon.png" alt>
            history
          </li>
          <li @click="back">
            <img src="../assets/d5dde342f63280669d570442a3d8511.png" alt>
            sign&nbsp;out
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="trend" ref="mychart" style="margin-top:14px;">
        <img src="../assets/d57bcb765433304e7ca905009882f84.png" alt="">
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
          <span @click="deposit" class="btn">FIAT DEPOSIT</span>
        </div>
        <div>
          <span @click="exchange" class="btn">EXCHANGE</span>
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
      ok: false, //用户信息的开关
      walletdata: "", //图片数据
      //图标的option
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
      //钱币的图片
      tabs: [
        {
          id: 0,
          text: require("../assets/usd.png")
        },
        {
          id: 1,
          text: require("../assets/hkd.png")
        },
        {
          id: 2,
          text: require("../assets/rmb.png")
        },
        {
          id: 3,
          text: require("../assets/jpy.png")
        }
      ]
    };
  },
  components: {
    variety
  },
  mounted() {
    var token = sessionStorage.getItem("token");
    // console.log(token);
    this.$axios({
      method: "get",
      url: "http://192.168.1.37:8080/growthing-02/users/wallet_data",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer" + " " + token
      }
    })
      .then(res => {
        // console.log(res.data);
        if (token) {
          this.walletdata = res.data.Tokens;
        }
      })
      .catch(err => {
        //console.log(err); //错误信息
      });
    //图片初始化实例
    // var echart = echarts.init(this.$refs.mychart);
    // echart.setOption(this.option);
  },

  methods: {
    // 点击用户弹出信息.
    user() {
      this.ok = !this.ok;
      let user = this.$refs.username;
      //  console.log(this.$refs.username)
    },
    hidePopoverPanel() {
      this.popoverPanelShow = false;
    },
    //退出登录
    back() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      this.$router.push({
        name: "login"
      });
    },
    //点击跳到取现
    withdraw() {
      alert("Sorry,this service has not been opened yet");
      // this.$router.push({
      //   name: "withdraw"
      // });
    },
    //点击跳到兑换
    exchange() {
      // this.$router.push({
      //   name: "exchange"
      // });
      alert("Sorry,this service has not been opened yet");
    },
    //点击存款
    deposit() {
      // this.$router.push({
      //   name: "deposit"
      // });
      alert("Sorry,this service has not been opened yet");
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
#top {
  .top_right {
    cursor: pointer;
    float: right;
    font-size: 10px;
    position: relative;
    .username {
      height: 60px;
      i {
        .down {
          transform: rotate(-90deg);
          transition: all 0.2s;
        }
        .up {
          transition: all 0.2s;
        }
      }
      img {
        vertical-align: middle;
      }
      span {
        margin-left: 5px;
        margin-right: 5px;
        vertical-align: middle;
        color: #cbcfd8;
      }
    }
    ul {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      background: #ffffff;
      z-index: 3;
      border-radius: 3px;
      li {
        padding-left: 20px;
        box-sizing: border-box;
        line-height: 50px;
        img {
          vertical-align: middle;
          height: 14px;
          width: 14px;
          margin-right: 9px;
        }

        width: 120px;
        // text-align: center;
        color: #616a71;
        // line-height: 60px;
      }
    }
  }
}
</style>