<template>
  <div>
    <div id="top">
      NETNOTE
      <topright></topright>
    </div>
    <div class="content">
      <div class="trend">
        <div class="trend_tab">
          <div class="trend_left">
            <ul>
              <li v-for="(item) in currency" :key="item.id" @click="check(item.id,$event)">
                <img :src="item.img" v-show="item.switch" alt>
                <img :src="item.empty" v-show="!item.switch" alt>
                <span>{{item.type}}</span>
              </li>
            </ul>
          </div>
          <ul class="trend_time">
            <li
              v-for="(item) in timer"
              :key="item.id"
              :class="{active : activename == item.name}"
              @click="selected(item.name,item.id)"
            >{{item.name}}</li>
          </ul>
        </div>
        <div class="trend_table" ref="mychart"></div>
      </div>
      <div class="content_mid">
        <variety
          v-for="(item,index) in tabs"
          :key="index"
          :son="tabs[index]"
          :walletson="walletdata[index]"
        ></variety>
      </div>
      <div class="content_bottom">
        <div>
          <span class="btn">
            <el-button type="text" @click="dialogVisible = true">FIAT WITHDRAW</el-button>
          </span>
          <span @click="deposit" class="btn">
            <el-button type="text" @click="dialogVisible = true">FIAT DEPOSIT</el-button>
          </span>
        </div>
        <div>
          <span @click="exchange" class="btn">
            <el-button type="text" @click="dialogVisible = true">EXCHANGE</el-button>
          </span>
        </div>
      </div>
    </div>

    <el-dialog title="Remind" :visible.sync="dialogVisible" width="30%">
      <span>Sorry, this service has not been opened yet</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">Comfirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import echarts from "echarts"; //引入图表
import variety from "@/components/variety";
import topright from "@/components/top_right";
export default {
  name: "home",
  data() {
    return {
      // list=[],
      activename: "DAY", //高亮
      dialogVisible: false,
      ok: false, //用户信息的开关
      walletdata: "", //图片数据
      //图标的option
      option: {
        title: {
          //  text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },

        legend: {
          data:["USD", "HKD"],
          selected:{
            'USD':true,
            'HKD':false
          }
        },
        grid: {
          left: "28px",
          right: "4%",
          bottom: "12px",
          top: "17px",
          containLabel: true
        },
        toolbox: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#8A8A8B"
            }
          },
          axisLabel: {
            // rotate: 30,
            interval: 0,
            color: "#FFFFFF"
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          min: 0,
          max: 1000,
          splitNumber: 6,
          // splitLine: {
          //网格样式
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#8A8A8B"],
              width: 1,
              type: "solid"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#8A8A8B"
            }
          },
          axisLabel: {
            formatter: "${value}",
            color: "#FFFFFF"
          }
        },
        series: [
          {
            name: "USD",
            type: "line",
            symbolSize: 14,
            color: "#FACB07",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              normal: {
                // border:"4px"
                //  borderColor: "blue",
                borderWidth: 3
              }
            },
            lineStyle: {
              width: 6
              // type:'dotted'  //'dotted'虚线 'solid'实线
            }
            // color:
          },
          {
            name: "RMB",
            type: "line",
            stack: "总量",
            symbolSize: 14,
            color: "#59D4BE",
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                // border:"4px"
                //  borderColor: "blue",
                borderWidth: 3
              }
            },
            lineStyle: {
              width: 6
              // type:'dotted'  //'dotted'虚线 'solid'实线
            }
          },
          {
            name: "HKD",
            type: "line",
            symbolSize: 14,
            color: "#FA529F",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {
                // border:"4px"
                //  borderColor: "blue",
                borderWidth: 3
              }
            },
            // checkpointStyle: {
            //   symbolSize: 100
            // },
            lineStyle: {
              width: 6
              // type:'dotted'  //'dotted'虚线 'solid'实线
            }
          }
          // {
          //   name: "JPY",
          //   type: "line",
          //   stack: "总量",
          //   data: [320, 332, 301, 334, 390, 330, 320]
          // }
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
      ],
      //选择时间
      timer: [
        {
          id: 0,
          name: "DAY"
        },
        {
          id: 1,
          name: "HOUR"
        },
        {
          id: 2,
          name: "15 SEC"
        }
      ],

      //选择货币的线
      currency: [
        {
          id: 0,
          img: require("../assets/afb06ada6e65999bdc46fe0f9fc19e7.png"),
          empty: require("../assets/829ad48904fa7c4c07c7ae3193c3632.png"),
          type: "USD",
          switch: true
        },
        {
          id: 1,
          img: require("../assets/ac904e5be37c1e4a05471820ec1de47.png"),
          empty: require("../assets/829ad48904fa7c4c07c7ae3193c3632.png"),
          type: "HKD",
          switch: true
        },
        {
          id: 2,
          img: require("../assets/3789e9093a0585810e4cd16ce78980e.png"),
          empty: require("../assets/829ad48904fa7c4c07c7ae3193c3632.png"),
          type: "RMB",
          switch: true
        }
      ]
    };
  },
  components: {
    variety,
    topright
  },
  mounted() {
    var token = sessionStorage.getItem("token");
    // this.option.legend.data=this.legenddata
    console.log(this.option.legend.data);
    // this.$axios({
    //   method: "get",
    //   url: "/walletapi/growthing-02/users/wallet_data",
    //   // headers: {
    //   //   "Content-type": "application/json",
    //   //   Authorization: "Bearer" + " " + token
    //   // }
    // })
    this.$axios
      .get(`${this.$baseurl}/growthing-02/users/wallet_data`)
      .then(res => {
        if (res.data.Status == "success") {
          this.walletdata = res.data.Tokens;
        }
        // else{
        // else if (res.data.Status == "error") {
        //   if ("No session. Please do login." == res.data.error) {
        //     sessionStorage.removeItem("token");
        //     sessionStorage.removeItem("username");
        //     this.$router.replace({
        //       name: "login"
        //     });
        //   }
        // }
      })
      .catch(err => {
        console.log(err); //错误信息
      });
    //图片初始化实例
    var echart = echarts.init(this.$refs.mychart);
    echart.setOption(this.option);
  },
  computed: {
    // legenddata() {
    //   let list = [];
    //   for (var i = 0; i < this.currency.length; i++) {
    //     if (this.currency[i].switch == true) {
    //       list.push(this.currency[i].type);
    //     }
    //   }
    //   return list;
    
    // }
  },
  methods: {
    // 点击用户弹出信息.
    user() {
      this.ok = !this.ok;
      let user = this.$refs.username;
      //  console.log(this.$refs.username)
    },

    //退出登录
    back() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      this.$router.push({
        name: "login"
      });
    },
    goto(name, id) {
      // 编程式路由导航：获取router实例
      // this.$router  路由实例（包含跳转等方法）
      // this.$route   当前路由信息
      // console.log(this.$route,this.$router)
      // 路由传参
      let obj = { name };
      if (name === "Search") {
        obj.params = { keyword: this.hotmovie, a: 100, name: "tiantian" };
        // obj.query = {keyword:this.hotmovie};//保存在url地址中，刷新后还存在
      } else if (id) {
        obj.params = { id };
      }
      // else{
      //   obj.params = {go:true}
      // }
      this.$router.push(obj);
    },
    //点击跳到取现
    withdraw() {
      // alert("Sorry,this service has not been opened yet");
      // this.$router.push({
      //   name: "withdraw"
      // });
    },
    //点击跳到兑换
    exchange() {
      // this.$router.push({
      //   name: "exchange"
      // });
      // alert("Sorry,this service has not been opened yet");
    },
    //点击存款
    deposit() {
      // this.$router.push({
      //   name: "deposit"
      // });
      // alert("Sorry, this service has not been opened yet");
    },
    check: function(item, event) {
      // event.target.switch = !event.target.switch;
      // this.kaiguan=event.target.switch
      if (event.target.tagName == "IMG") {
        this.currency[item].switch = !this.currency[item].switch;
        this.option.legend.data=this.legenddata
        // console.log(this.currency[item].switch);
        console.log( this.option.legend.data);
      }
    },
    //高亮
    selected(name, idx) {
      this.activename = name;
    }
    // go() {
    //   this.$router.push({
    //     name: "history"
    //   });
    //   // alert("Sorry, this service has not been opened yet");
    // }
  }
};
</script>

<style>
.el-dialog {
  /* border-radius: 10px; */
  background: #373542;
}
.top_right .el-button {
  color: #616a71;
  font-size: 12px;
}
.el-dialog__title {
  font-size: 24px;
  color: #fefefc;
}

.el-dialog__header {
  text-align: center;
  padding: 50px 20px 13px;
}
.el-dialog__body {
  text-align: center;
  font-size: 14px;
  color: #aaaaa8;
  padding: 0px 20px 27px;
}
.el-button {
  color: #25262e;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
}
.el-dialog__footer {
  text-align: center;
}
.el-dialog__footer .el-button {
  width: 106px;
}
.el-button--primary {
  background: #5ce2ee;
  border: 0;
}
</style>
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
  .content_mid {
    height: 360px;
  }
  .content_bottom {
    width: 1200px;
    margin: 0 auto;
    font-size: 16px;
    padding-top: 14px;
    // box-sizing: border-box;
    height: 0px;
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
  height: 400px;
  width: 1200px;
  // margin-bottom: 24px;
  margin: 0 auto 24px auto;

  .trend_tab {
    height: 50px;
    background: #373541;
    .trend_left {
      float: left;
      padding-top: 12px;
      box-sizing: border-box;
      padding-left: 27px;
      ul {
        li {
          float: left;
          margin-right: 30px;
          img {
            margin-right: 10px;
            vertical-align: middle;
          }
          span {
            color: white;
            vertical-align: middle;
          }
        }
      }
    }
    .trend_time {
      float: right;
      //  overflow: hidden;
      border-radius: 18px;
      margin-top: 6px;
      margin-right: 14px;
      width: 300px;
      height: 34px;
      border: 2px solid #5ce2ee;
      //  box-sizing: border-box;
      display: flex;
      li {
        flex: 1;
        font-weight: 700;
        font-size: 12px;
        border-radius: 14px;
        line-height: 34px;
        color: white;
        text-align: center;
        cursor: pointer;
      }
      .active {
        background: #5ce2ee;
        color: black;
      }
    }
  }
  .trend_table {
    box-sizing: border-box;
    height: 350px;
    background: #25262e;
    // margin-top: 14px;
  }
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