<template>
  <div id="varitey">
    <div class="varitey con">
      <div class="coinpic fl">
        <div class="coinpic_left fl">
          <img :src="son.text" alt>
        </div>
        <div class="coinpic_right fr">
          <p>{{walletson&&walletson.CoinCurrency}}</p>
          <p>
            <span>1.0</span>
            &nbsp;{{walletson&&walletson.CoinCurrency}}&nbsp;per
            <span>{{walletson&&walletson.ExchangeFtoC}}</span>
            &nbsp;{{walletson&&walletson.FiatCurrency}}
          </p>
        </div>
      </div>
      <div class="mid fl">
        <p>
          <span>{{walletson&&walletson.CoinCurrency}}</span>
          $
          <span>{{walletson&&walletson.CoinBalance}}</span>
        </p>
        <p>
          <span>{{walletson&&walletson.FiatCurrency}}</span>
          $
          <span>{{walletson&&walletson.FiatBalance}}</span>
        </p>
      </div>
      <div class="end fr">
        <span class="btn">
          <!-- <span @click="goto('receive')" class="btn">
          RECEIVE-->
          <el-button type="text" @click="dialogVisible = true">RECEIVE</el-button>
        </span>
        <span class="btn">
          <!-- <span @click="goto('send')" class="btn"> -->
          <!-- SEND  -->
          <el-button type="text" @click="dialogVisible = true">SEND</el-button>
        </span>
      </div>
      <el-dialog :title="$t('home.remind')" :visible.sync="dialogVisible" width="30%">
        <span>{{$t('home.sorry')}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">{{$t('home.Comfirm')}}</el-button>
        </span>
      </el-dialog>
      <!-- <el-dialog title="$t('home.remind')" :visible.sync="dialogVisible" width="30%">
        <span>{{$t('home.sorry')}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">{{$t('home.Comfirm')}}</el-button>
        </span>
      </el-dialog> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["son", "walletson"],
  name: "variety",

  data() {
    return {
      dialogVisible: false
      // son:[{}]
    };
  },
  created() {
    // console.log(this.son);
  },
  methods: {
    goto(name, id) {
      let obj = { name };
      if (name === "receive") {
        obj.params = { receiveid: this.son.name, pic: this.son.text };
        // obj.query = {keyword:this.hotmovie};//保存在url地址中，刷新后还存在
      } else if (id) {
        obj.params = { id };
      }
      if (name === "send") {
        obj.params = { receiveid: this.son.name, pic: this.son.text };
        // obj.query = {keyword:this.hotmovie};//保存在url地址中，刷新后还存在
      } else if (id) {
        obj.params = { id };
      }
      this.$router.push(obj);
    },
    receive(id) {
      // alert("Sorry,this service has not been opened yet");
      // this.$router.push({
      //   name: "receive",
      //   params: {
      //     receiveid: id
      //   }
      // });
    },
    send(id) {
      // alert("Sorry,this service has not been opened yet");
      // this.$router.push({
      //   name: "send",
      //   params: {
      //     sendid: id
      //   }
      // });
    }
  }
};
</script>
<style>
.end .el-button {
  /* background: #5ce2ee; */
  height: 36px;
  font-size: 14px;
  color: #5ce2ee;
  line-height: 12px;
  font-weight: 500;
  font-family: "\5FAE\8F6F\96C5\9ED1";

  /* line-height: 40px; */
  /* width: 100px;  */
}
/* .end .el-button span{
    line-height: 36px;
  } */
</style>
<style lang="scss" scoped>
#varitey {
  .varitey {
    width: 1200px;
    height: 80px;
    background: #25262e;
    margin-bottom: 10px;
    .coinpic {
      width: 200px;
      height: 80px;
      // overflow: hidden;
      // background: yellow;
      margin-left: 66px;
      .coinpic_left {
        width: 60px;
        height: 80px;
        padding-top: 18px;
        box-sizing: border-box;
        // background:white;
        // img{
        //   width: 60px;
        //   height: 80px;
        // }
      }
      .coinpic_right {
        width: 140px;
        height: 80px;
        padding-top: 15px;
        box-sizing: border-box;

        // background: yellow;
        p:nth-child(1) {
          font-size: 20px;
          color: #fff;
          margin-bottom: 5px;
        }
        p:nth-child(2) {
          color: #aaaaaa;
          font-size: 12px;
        }
      }
    }
    .mid {
      // width: 80px;
      // height: 40px;
      margin-left: 185px;
      margin-top: 15px;
      box-sizing: border-box;
      color: #aaaaaa;
      font-size: 14px;
      > p {
        span:nth-child(1) {
          display: inline-block;
          width: 54px;
        }
        span:nth-child(2) {
          display: inline-block;
          // width: 54px;
        }
      }
      p:nth-child(1) {
        margin-bottom: 9px;
      }
    }
    .end {
      width: 305px;
      height: 40px;
      margin-top: 18px;
      margin-right: 96px;
      box-sizing: border-box;
      // background: white;
      font-size: 14px;
      display: -webkit-flex;
      display: flex;
      color: #59d6e2;

      -webkit-justify-content: space-between;
      justify-content: space-between;
      span {
        // flex:1;
        //  box-sizing: border-box;

        width: 116px;
        height: 40px;
        box-sizing: border-box;
        text-align: center;
        line-height: 36px;
        border-radius: 25px;
        // background: #59d6e2;
        border: 2px solid #59d6e2;
        // -webkit-box-sizing: border-box;

        // justify-content: space-between;
      }
    }
  }
}
</style>
