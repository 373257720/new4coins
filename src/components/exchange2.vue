<template>
  <div class="exchange2">
    <div id="top">
      <h2 class="btn" @click="goto('home')">EXCHANGE</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content list">
      <p>{{types[data.idx].text}}</p>
      <div class="list_top">
        <img :src="imgfirst" alt>
        <span>{{data.leftnum}}</span>
        <span>
          Balance:
          $
          <em></em>
        </span>
      </div>
      <div class="list_top sec">
        <img :src="imgsec" alt>
        <span>{{data.rightnum}}</span>
        <span>
          Balance:
          $
          <em></em>
        </span>
      </div>
      <div class="rate first" style="margin-top:28px;">
        <p>{{data.leftnum}}</p>
        <el-input v-model="input1" :placeholder="$t('withdraw.Pleaseinput')"></el-input>
        <u>Max</u>
      </div>
      <div class="rate second">
        <p>{{data.rightnum}}</p>
        <el-input v-model="input2" :placeholder="$t('withdraw.Pleaseinput')"></el-input>
        <u>Max</u>
      </div>
      <div class="rate_sign">1RMbn=1.1681HKD</div>
      <!-- <p>1RMBn = </p> -->
      <div class="btn" @click="goto" v-if="exchange_submit">{{$t('deposit.Submit')}}</div>
      <div class="btn submit" v-if="!exchange_submit">{{$t('deposit.Submit')}}</div>
    </div>
  </div>
</template>
<script>
// import topright from "@/components/top_right";
export default {
  name: "exchange2",
  components: {
    // topright
  },
  data() {
    return {
      input1: "",
      input2: "",
      data: {},
      imgfirst: "",
      imgsec: "",
      //钱币的图片
      tabs: [
        {
          id: 0,
          text: require("../assets/usd.png"),
          label: "USD"
        },
        {
          id: 1,
          text: require("../assets/hkd.png"),
          label: "HKD"
        },
        {
          id: 2,
          text: require("../assets/rmb.png"),
          label: "RMB"
        },
        {
          id: 3,
          text: require("../assets/jpy.png"),
          label: "JPY"
        }
      ],
      // 兑换方式
      types: [
        {
          id: 0,
          text: `Fiat to Note`
        },
        {
          id: 1,
          text: `Note to Note`
        },
        {
          id: 2,
          text: `Note to Fiat`
        }
      ]
    };
  },
  created() {
    this.data = this.$route.params;
    if (this.data.idx == 0) {
      this.data.rightnum = this.data.rightnum + "n";
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].label == this.data.leftnum) {
          this.imgfirst = this.tabs[i].text;
          this.imgsec = this.tabs[i].text;
        }
      }
    }
    if (this.data.idx == 1) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].label == this.data.leftnum) {
          this.imgfirst = this.tabs[i].text;
        }
        if (this.tabs[i].label == this.data.rightnum) {
          this.imgsec = this.tabs[i].text;
        }
      }
      this.data.rightnum = this.data.rightnum + "n";
      this.data.leftnum = this.data.leftnum + "n";
    }
    if (this.data.idx == 2) {
      this.data.leftnum = this.data.leftnum + "n";
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].label == this.data.rightnum) {
          this.imgfirst = this.tabs[i].text;
          this.imgsec = this.tabs[i].text;
        }
      }
    }
  },
  computed: {
    exchange_submit: function() {
      if (this.input1 && this.input2) {
        return true;
      } else {
        return false;
      }
    }
  },
  beforeRouteEnter: function(to, from, next) {
    if (from.name == "exchange" && to.params.leftnum) {
      // console.log(111)
      next();
    } else {
      next({
        path: "/exchange"
      });
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
    padding: 5px 0 0 7px;
    box-sizing: border-box;

    img,
    span {
      //   line-height: 50px;
      vertical-align: middle;
    }
    img {
      // margin: 5px 12px 0 12px;
    }
    > span:nth-child(2) {
      font-size: 20px;
      display: inline-block;
      width: 240px;
      margin-left: 10px;
      // margin-right: 170px;
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
    p {
      color: #bec8d6;
      font-size: 14px;
      margin-bottom: 9px;
    }
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
  .submit {
    background: #30313b;
    color: #64656b;
  }
}

.rate_sign {
  font-size: 12px;
  margin: 0 auto;
  width: 468px;
  margin-bottom: 45px;
}
</style>

