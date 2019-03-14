<template>
  <div>
    <div id="top">
      <div class="top con">NETNOTE</div>
    </div>
    <div class="content">
      <div class="trend" ref='mychart'>
        <!-- <img src="../assets/2主界面_r2_c2.png" alt=""> -->
      </div>
      <variety v-for="(item,index) in tabs" :key="index" :son="tabs[index]"></variety>
      <div class="content_bottom">
        <div>
          <span @click="withdraw">FIAT WITHDRAW</span>
          <span @click="exchange">EXCHANGE</span>
        </div>
        <div>
          <span @click="deposit">FIAT DEPOSIT</span>
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
      option: {
        xAxis: {
          data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"]
        },
        yAxis: {},
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
          text: require("../assets/hkd.png")
        },
        {
          id: 1,
          text: require("../assets/jpy.png")
        },
        {
          id: 2,
          text: require("../assets/rmb.png")
        },
        {
          id: 3,
          text: require("../assets/usd.png")
        }
      ]
    };
  },
  components: {
    variety
  },
  mounted() {
   
  //  console.log(this.$refs.mychart)
   var echart=echarts.init(this.$refs.mychart);
   echart.setOption(this.option);
    
  },
  methods: {
    //图表
  

    hidePopoverPanel() {
      this.popoverPanelShow = false;
    },
    withdraw() {
      this.$router.push({
        name: "withdraw"
      });
    },
    exchange() {
      this.$router.push({
        name: "exchange"
      });
    },
    deposit() {
      this.$router.push({
        name: "deposit"
      });
    }
  }

};
</script>


<style lang="scss" scoped>
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