<template>
  <div id="varitey">
    <div class="varitey con">
      <div class="coinpic fl">
        <div class="coinpic_left fl">
          <img :src="son.text" alt>
        </div>
        <div class="coinpic_right fr">
          <p>HKDn</p>
          <p>
            <span>1.0</span>&nbsp;HKDn&nbsp;per
            <span>1</span>&nbsp;HKD
          </p>
        </div>
      </div>
      <div class="mid fl">
        <p>
          HKDn&nbsp;&nbsp;&nbsp;$
          <span>0</span>
        </p>
        <p>
          HKD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
          <span>0</span>
        </p>
      </div>
      <div class="end fl">
        <span @click="receive(son.id)" class="btn">RECEIVE</span>
        <span @click="send(son.id)" class="btn">SEND</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["son"],
  name: "variety",
  data() {
    return {
      // son:[{}]
    };
  },
  created() {
    // console.log(this.son);
  },
  methods: {
    receive(id) {
    
      this.$router.push({
        name: "receive",
        params: {
          receiveid: id
        }
      });
    },
    send(id) {
      alert('未开通')
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
          font-size: 14px;
        }
      }
    }
    .mid {
      width: 80px;
      height: 40px;
      margin-left: 185px;
      margin-top: 18px;
      box-sizing: border-box;
      color: #aaaaaa;
      font-size: 14px;
      p:nth-child(1) {
        margin-bottom: 9px;
      }
    }
    .end {
      width: 305px;
      height: 40px;
      margin-top: 18px;
      margin-left: 250px;
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
        height: 40px;box-sizing: border-box;
        text-align: center;
        line-height: 36px;
        border-radius: 25px;
        background: #25262e;
        border: 2px solid #59d6e2;
        // -webkit-box-sizing: border-box;

        // justify-content: space-between;
      }
    }
  }
}
</style>
