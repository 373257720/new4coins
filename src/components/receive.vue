<template>
  <div class="receive">
    <div id="top">
      <div class="top con">TRANSFER</div>
    </div>
    <div class="content">
      <div class="title con">
        <img src="../assets/hkd.png" alt>
        <p>
          Send&nbsp;
          <span>HKDn</span>
        </p>
      </div>
      <div class="box con">
        <img src="../assets/qr-code.png" alt>
        <p>
          <span>sdfgdfgdfgdfgdfgdfgdfvvbertertertdfgdfgdfgdferfsdfsdfvnghdfgdfgdg</span>
          <img src="../assets/cop.png" alt>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "receive",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 750px;
}

.title {
  height: 50px;
  width: 1200px;
  margin-top: 70px;
  background: #302f39;
  margin-bottom: 60px;
  color: #ffffff;
  font-size: 20px;
  img {
    // margin-left:37px;
    // margin-right:18px;
    float: left;
    margin: 3px 18px 0 37px;
    font-weight: 700;
  }
  p {
    float: left;
    // display: inline;
    line-height: 50px;
    height: 50px;
  }
}
.box {
  > img {
    display: block;
    margin: 0 auto;
    margin-bottom: 63px;
  }
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    // width: 1200px;
    // margin:0 auto;
    // height: 50px;
    // text-align:center;
    span {
      display: inline-block;
      width: 334px;
      font-size: 16px;
      word-wrap: break-word;
      color: #bec8d6;
      //    height: 44px;
      line-height: 28px;
      margin-right: 22px;
      img {
        //     position:absolute;
        //    left:50%;
        //    transform: translateX(-50%);
      }
    }
  }
}
</style>

